<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch, type VNode } from 'vue'
import MarkdownNodes from './MarkdownNodes'
import ImageGallery from './ImageGallery.vue'
import ImageAndBullets from './ImageAndBullets.vue'
import { contentUnits, flattenNodes, imagesIn, unitNodes } from '../utils/markdown-nodes'
import { chooseColumnBreak } from '../utils/column-balance.mjs'

const props = defineProps<{ slideType: string; nodes: VNode[]; rightNodes?: VNode[]; manualBreak: boolean }>()
const nodes = computed(() => flattenNodes(props.nodes))
const heading = computed(() => nodes.value.filter(node => node.type === 'h1'))
const body = computed(() => nodes.value.filter(node => node.type !== 'h1'))
const rightBody = computed(() => flattenNodes(props.rightNodes || []))
const titleSlide = computed(() => props.slideType === 'Title')
const sectionSlide = computed(() => props.slideType === 'Section')
const imageAndBullets = computed(() => props.slideType === 'Image-and-bullets')
const columns = computed(() => props.slideType === 'General content two column' ? 2 : 1)
const images = computed(() => body.value.flatMap(imagesIn))
const imageBlocks = computed(() => body.value.filter(node => imagesIn(node).length))
const credit = computed(() => body.value.filter(node => !imagesIn(node).length))
const gallery = computed(() => !titleSlide.value && images.value.length > 1 && imageBlocks.value.length === images.value.length)
const panels = computed(() => images.value.map(node => ({ source: String(node.props?.src || ''), caption: String(node.props?.alt || '') })))
const units = computed(() => contentUnits(body.value))
const explicitRightUnits = computed(() => contentUnits(rightBody.value))
const allMeasuredUnits = computed(() => props.manualBreak ? [...units.value, ...explicitRightUnits.value] : units.value)
const headingElement = ref<HTMLElement>()
const measurementElement = ref<HTMLElement>()
const fontSize = ref(64)
const measureFont = ref(64)
const contentTop = ref(355)
const breakIndex = ref(0)
const status = ref('measuring')
const error = ref('')
const contentHeight = computed(() => 950 - contentTop.value)
const contentWidth = computed(() => columns.value === 2 ? 853 : 1806)
const left = computed(() => unitNodes(columns.value === 1 || props.manualBreak ? units.value : units.value.slice(0, breakIndex.value)))
const right = computed(() => unitNodes(props.manualBreak ? explicitRightUnits.value : units.value.slice(breakIndex.value)))
let generation = 0
let observer: ResizeObserver | undefined

async function measure() {
  const current = ++generation
  await nextTick()
  if (current !== generation) return
  if (titleSlide.value || sectionSlide.value || gallery.value || imageAndBullets.value) { status.value = 'ready'; return }
  if (props.manualBreak && columns.value !== 2) {
    error.value = '::columnBreak:: requires slideType: General content two column.'
    status.value = 'overflow'
    console.error(error.value)
    return
  }
  status.value = 'measuring'
  contentTop.value = Math.max(355, 140 + (headingElement.value?.offsetHeight || 0) + 48)
  for (const size of [64, 52]) {
    measureFont.value = size
    await nextTick()
    if (current !== generation) return
    // offsetHeight is already in design-canvas units, independent of Slidev's display scale.
    const measured = [...(measurementElement.value?.children || [])].map(element => (element as HTMLElement).offsetHeight)
    const stackHeight = (values: number[]) => values.reduce((sum, height) => sum + height, 0) + Math.max(0, values.length - 1) * 32
    let fits: boolean
    if (props.manualBreak) {
      breakIndex.value = units.value.length
      fits = Math.max(stackHeight(measured.slice(0, breakIndex.value)), stackHeight(measured.slice(breakIndex.value))) <= contentHeight.value
    } else if (columns.value === 2) {
      const result = chooseColumnBreak(measured, 32, contentHeight.value)
      breakIndex.value = result.index
      fits = result.fits
    } else {
      breakIndex.value = units.value.length
      fits = stackHeight(measured) <= contentHeight.value
    }
    fontSize.value = size
    if (fits) { error.value = ''; status.value = 'ready'; return }
  }
  error.value = 'Content does not fit at the minimum 52 px body size. Review the content or choose another slide type.'
  status.value = 'overflow'
  console.error(error.value)
}

onMounted(async () => {
  await document.fonts.ready
  await measure()
  observer = new ResizeObserver(() => void measure())
  if (headingElement.value) observer.observe(headingElement.value)
})
watch([() => props.nodes, () => props.rightNodes, () => props.slideType], () => void measure())
onBeforeUnmount(() => { generation++; observer?.disconnect() })
</script>

<template>
  <header v-if="!imageAndBullets" ref="headingElement" class="course-heading"><MarkdownNodes :nodes="heading" /></header>
  <div v-if="titleSlide" class="course-title-content" data-layout-status="ready"><MarkdownNodes :nodes="body" /></div>
  <div v-else-if="sectionSlide" data-layout-status="ready" />
  <ImageAndBullets v-else-if="imageAndBullets" :heading="heading" :nodes="body" :manual-break="manualBreak" />
  <div v-else-if="gallery" data-layout-status="ready"><ImageGallery :panels="panels" :credit="credit" /></div>
  <template v-else>
    <div class="course-content" :data-columns="columns" :data-column-break="manualBreak ? 'explicit' : 'automatic'" :data-break-index="breakIndex" :data-layout-status="status" :data-layout-error="error || undefined" :style="{ top: `${contentTop}px`, height: `${contentHeight}px`, fontSize: `${fontSize}px` }">
      <div class="course-column"><MarkdownNodes :nodes="left" /></div>
      <div v-if="columns === 2" class="course-column"><MarkdownNodes :nodes="right" /></div>
    </div>
    <div ref="measurementElement" class="course-measure" aria-hidden="true" :style="{ width: `${contentWidth}px`, fontSize: `${measureFont}px` }">
      <div v-for="(unit, index) in allMeasuredUnits" :key="index" class="course-column"><MarkdownNodes :nodes="unitNodes([unit])" /></div>
    </div>
  </template>
</template>

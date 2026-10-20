<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const { $clicks } = useSlideContext()
const captions = [
  'How the customer explained it',
  'How the project leader understood it',
  'How the analyst designed it',
  'How the programmer wrote it',
  'What the beta testers received',
  'How the business consultant described it',
  'How the project was documented',
  'What operations installed',
  'How the customer was billed',
  'How it was supported',
  'What marketing advertised',
  'When it was delivered',
  'What the customer really needed',
  'What the digg effect can do to your site',
  'The disaster recover plan',
  'What the customer really needed',
  'What the digg effect can do to your site',
  'The disaster recover plan',
]
const assets = import.meta.glob('../Introduction-assets/project-cartoon-*.jpg', { eager: true, query: '?url', import: 'default' })
const panels = captions.map((caption, index) => ({
  caption,
  source: assets[`../Introduction-assets/project-cartoon-${String(index + 1).padStart(2, '0')}.jpg`] as string,
}))
const active = computed(() => Math.max(0, Math.min(17, $clicks.value)))
</script>

<template>
  <div class="cartoon-grid" role="group" aria-label="Project cartoon: read each row from left to right, then continue on the second row">
    <figure v-for="(panel, index) in panels" :key="index" class="cartoon-panel" :aria-current="index === active ? 'true' : undefined">
      <img :src="panel.source" :alt="`${index + 1}. ${panel.caption}`" />
    </figure>
  </div>
  <p class="cartoon-caption" aria-live="polite">{{ active + 1 }} / 18 · {{ panels[active].caption }}</p>
  <p class="cartoon-source">Source: www.projectcartoon.com</p>
</template>

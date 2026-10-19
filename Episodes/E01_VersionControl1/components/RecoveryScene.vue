<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'
const { $clicks } = useSlideContext()
const step = computed(() => $clicks.value)
const captions = [
  'Start with a working website.',
  'Select the changes with git add.',
  'Record the working state with git commit.',
  'A new feature changes the source.',
  'A bug report arrives. The working state is saved.',
  'Use git checkout to return to the saved version.',
  'The source returns to the earlier working state.',
  'Reproduce the problem and fix the bug.',
  'The bug is fixed. A saved version made recovery possible.',
]
</script>

<template>
  <div class="course-scene recovery-scene">
    <svg class="recovery-graph diagram" viewBox="0 0 1806 510" role="img" :aria-label="captions[step] || captions[8]">
      <g class="diagram-lines">
        <g :class="{ 'recovery-saved': step >= 2 }">
          <path d="M180 80h130l44 44v172H180zM310 80v44h44M216 162h99m-99 39h99m-99 39h66" />
          <path v-if="step >= 2" d="m197 334 22 22 48-51" />
        </g>
        <path v-if="step >= 3" class="state-line" d="M400 188H720m-24-12 24 12-24 12" />
        <g class="recovery-current" :class="{ 'is-present': step >= 3, 'is-restored': step >= 6 }">
          <path d="M785 80h130l44 44v172H785zM915 80v44h44" />
          <Transition name="source-change" mode="out-in"><g :key="step >= 6 ? 'saved' : 'changed'"><path :d="step >= 6 ? 'M821 162h99m-99 39h99m-99 39h66' : 'm820 164 103 28-108 48 92 16'" /></g></Transition>
        </g>
        <path v-if="step >= 7" d="M1010 188H1270m-24-12 24 12-24 12" />
        <g :class="{ 'is-present': step >= 7 }" class="recovery-fixed">
          <path d="M1350 80h130l44 44v172h-174zM1480 80v44h44M1386 162h99m-99 39h99m-99 39h66" />
          <path d="m1370 334 22 22 48-51" />
        </g>
        <path v-if="step >= 5" class="checkout-path" d="M870 320C870 490 470 490 378 280" />
        <path v-if="step >= 5" d="M399 297 378 280 377 307" />
      </g>
      <text x="270" y="34" text-anchor="middle">{{ step >= 2 ? 'Saved working state' : 'Working website' }}</text>
      <text v-if="step >= 1" x="270" y="425" text-anchor="middle">{{ step === 1 ? 'git add' : 'git commit' }}</text>
      <text v-if="step >= 3" x="875" y="34" text-anchor="middle">{{ step >= 6 ? 'Recovered source' : 'Changed source' }}</text>
      <text v-if="step >= 4 && step < 5" x="875" y="405" text-anchor="middle">Bug report</text>
      <text v-if="step >= 5" x="875" y="492" text-anchor="middle">git checkout</text>
      <text v-if="step >= 7" x="1440" y="34" text-anchor="middle">Fix the bug</text>
      <text v-if="step >= 8" x="1440" y="425" text-anchor="middle">Working again</text>
    </svg>
    <p class="scene-caption">{{ captions[step] || captions[8] }}</p>
  </div>
</template>

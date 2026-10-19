<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'
const props = defineProps<{ mode: 'problem' | 'solution' | 'workflow' }>()
const { $clicks } = useSlideContext()
const step = computed(() => $clicks.value)
const captions = computed(() => ({
  problem: [
    'The project lives on a shared server.',
    'Team member 1 works on the shared project.',
    'Team member 2 works on the same project.',
    'Team member 1 saves a change.',
    'Team member 2 saves. The earlier change is overwritten.',
    'Panic! One person’s work has disappeared.',
  ],
  solution: [
    'The shared project is now a Git repository.',
    'Team member 1 has a local Git repository.',
    'Team member 2 has a local Git repository.',
    'Team member 1 commits and pushes a change.',
    'Team member 2’s push is rejected: the remote has changed.',
    'Team member 2 pulls and adapts the change.',
    'Commit and push the reconciled change.',
  ],
  workflow: [
    'A shared repository. Two computers without a local copy.',
    'Clone the repository onto team member 1’s computer.',
    'Clone the repository onto team member 2’s computer.',
    'Team member 1 changes a file.',
    'Team member 1 commits the change locally.',
    'Team member 1 pushes the commit to GitHub.',
    'The shared repository now includes the new commit.',
    'Team member 2 pulls the new commit.',
    'Both local repositories now have the shared change.',
  ],
}[props.mode]))
const caption = computed(() => captions.value[Math.min(step.value, captions.value.length - 1)])
const firstVisible = computed(() => props.mode === 'workflow' || step.value >= 1)
const secondVisible = computed(() => props.mode === 'workflow' || step.value >= 2)
const firstRepo = computed(() => props.mode === 'solution' || props.mode === 'workflow' && step.value >= 1)
const secondRepo = computed(() => props.mode === 'solution' || props.mode === 'workflow' && step.value >= 2)
const incomingOne = computed(() => props.mode === 'workflow' && step.value >= 1 && step.value < 3)
const incomingTwo = computed(() => props.mode === 'workflow' && (step.value >= 2 && step.value < 3 || step.value >= 7) || props.mode === 'solution' && step.value === 5)
const outgoingOne = computed(() => props.mode !== 'workflow' ? step.value >= 3 : step.value >= 5)
const outgoingTwo = computed(() => props.mode === 'problem' && step.value >= 4 || props.mode === 'solution' && (step.value === 4 || step.value >= 6))
const alert = computed(() => props.mode === 'solution' && step.value === 4)

// All connection states share endpoints outside the computer and server outlines.
type Point = readonly [number, number]
function connection(client: Point, server: Point) {
  const line = (from: Point, to: Point) => `M${from[0]} ${from[1]}L${to[0]} ${to[1]}`
  const head = (from: Point, to: Point) => {
    const length = Math.hypot(to[0] - from[0], to[1] - from[1])
    const dx = (to[0] - from[0]) / length
    const dy = (to[1] - from[1]) / length
    const x = to[0] - 24 * dx
    const y = to[1] - 24 * dy
    return `M${x - 12 * dy} ${y + 12 * dx}L${to[0]} ${to[1]}L${x + 12 * dy} ${y - 12 * dx}`
  }
  return { toServer: line(client, server), toClient: line(server, client), atServer: head(client, server), atClient: head(server, client) }
}
const connections = {
  left: connection([500, 290], [735, 138]),
  right: connection([1306, 290], [1071, 138]),
}
</script>

<template>
  <div class="course-scene network-scene">
    <svg class="network-graph diagram" viewBox="0 0 1806 550" role="img" :aria-label="caption">
      <defs>
        <g :id="`computer-${mode}`"><path d="M-150-72h300V80h-300zM-32 80v38m-52 0H84" /></g>
        <g :id="`repo-${mode}`"><path d="M-39-29h54l20 20v73h-74zM15-29v20h20M-22 10h37m-37 20h37" /></g>
      </defs>
      <g class="diagram-lines">
        <path v-if="firstVisible" class="connection-base" :d="connections.left.toServer" />
        <path v-if="secondVisible" class="connection-base" :d="connections.right.toServer" />
        <path v-if="outgoingOne" class="transfer-path" :d="connections.left.toServer" />
        <path v-if="outgoingTwo" class="transfer-path" :class="{ 'rejected-path': alert }" :d="connections.right.toServer" />
        <path v-if="incomingOne" class="transfer-path" :d="connections.left.toClient" />
        <path v-if="incomingTwo" class="transfer-path" :d="connections.right.toClient" />
        <path v-if="outgoingOne" class="connection-head" :d="connections.left.atServer" />
        <path v-if="outgoingTwo" class="connection-head" :d="connections.right.atServer" />
        <path v-if="incomingOne" class="connection-head" :d="connections.left.atClient" />
        <path v-if="incomingTwo" class="connection-head" :d="connections.right.atClient" />
        <g class="network-server" transform="translate(903 65)"><path d="M-144-45h288v140h-288zM-110-14h58m-58 34h58m-58 34h58" /><use v-if="mode !== 'problem'" :href="`#repo-${mode}`" transform="translate(60 0)" /><path v-else :d="step >= 4 ? 'M35-10l48 28-48 30 48 18' : 'M32-10h61m-61 31h61m-61 31h44'" /></g>
        <g class="network-actor" :class="{ 'is-present': firstVisible }" transform="translate(330 380)">
          <use :href="`#computer-${mode}`" />
          <g v-if="firstRepo" class="repository-copy"><use :href="`#repo-${mode}`" transform="translate(-35 -7)" /><path v-if="mode === 'workflow' && step >= 3" :d="step === 3 ? 'M28-8l50 13-50 24 50 10' : 'M28-8h50m-50 24h50m-50 24h34'" /></g>
          <path v-else-if="mode === 'problem'" class="shared-source" d="M-70-25h130m-130 35h130m-130 35h75" />
        </g>
        <g class="network-actor" :class="{ 'is-present': secondVisible }" transform="translate(1476 380)">
          <use :href="`#computer-${mode}`" />
          <g v-if="secondRepo" class="repository-copy"><use :href="`#repo-${mode}`" transform="translate(-35 -7)" /><path v-if="mode === 'workflow' && step >= 7" d="M28-8h50m-50 24h50m-50 24h34" /></g>
          <path v-else-if="mode === 'problem'" class="shared-source" d="m-70-20 130 15-130 30 130 20" />
        </g>
        <g v-if="alert" class="rejection-mark"><path d="m1105 216 38 38m0-38-38 38" /></g>
        <g v-if="mode === 'solution' && step >= 5" class="reconciled"><path d="m1430 353 22 22 47-49" /></g>
      </g>
      <text x="903" y="219" text-anchor="middle">{{ mode === 'problem' ? 'Shared source files' : 'GitHub repository' }}</text>
      <text v-if="firstVisible" x="330" y="548" text-anchor="middle">Team member 1</text>
      <text v-if="secondVisible" x="1476" y="548" text-anchor="middle">Team member 2</text>
      <text v-if="mode === 'problem' && step >= 3" x="435" y="217" text-anchor="middle">Save</text>
      <text v-if="mode === 'problem' && step >= 4" x="1370" y="217" text-anchor="middle">Save</text>
      <text v-if="mode === 'solution' && step >= 3" x="435" y="217" text-anchor="middle">Push</text>
      <text v-if="mode === 'solution' && step === 4" x="1370" y="230" text-anchor="middle">Rejected</text>
      <text v-if="mode === 'solution' && step >= 5" x="1370" y="217" text-anchor="middle">{{ step >= 6 ? 'Push' : 'Pull + adapt' }}</text>
      <text v-if="mode === 'workflow' && step >= 1" x="435" y="217" text-anchor="middle">{{ step < 3 ? 'Clone' : step === 3 ? 'Change' : step === 4 ? 'Commit' : 'Push' }}</text>
      <text v-if="mode === 'workflow' && step >= 2" x="1370" y="217" text-anchor="middle">{{ step < 7 ? 'Clone' : 'Pull' }}</text>
    </svg>
    <p class="scene-caption" :class="{ 'panic-caption': mode === 'problem' && step >= 5 }">{{ caption }}</p>
  </div>
</template>

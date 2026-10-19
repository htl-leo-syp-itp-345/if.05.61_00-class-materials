<script setup lang="ts">
import cafeDetail from '../assets/cafe-detail.svg'
withDefaults(defineProps<{ state?: 'working' | 'broken' }>(), { state: 'working' })
</script>

<template>
  <div class="website-preview" :class="`website-${state}`" :aria-label="state === 'broken' ? 'Example café website after a feature breaks its fonts and layout' : 'Working example café website with imagery and navigation'">
    <p class="site-brand">Campus Café</p>
    <nav class="site-nav" aria-label="Example website navigation">
      <span>Menu</span><span>Visit</span><span>Contact</span><span v-if="state === 'broken'">Reservations</span>
    </nav>
    <p class="site-headline">Fresh coffee.<br>Time to recharge.</p>
    <p class="site-description">{{ state === 'broken' ? 'Menu unavailable.' : 'Lunch between classes.' }}</p>
    <img class="site-image" :src="cafeDetail" alt="Coffee beside an open café menu" />
  </div>
</template>

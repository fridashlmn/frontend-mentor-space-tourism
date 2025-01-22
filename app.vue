<template>
  <div
    :class="`${backgroundImage} max-w-screen min-h-screen w-screen bg-cover`"
  >
    <AppHeader />
    <main>
      <NuxtPage />
    </main>
  </div>
</template>
<script setup lang="ts">
import AppHeader from '~/components/AppHeader.vue'
const route = useRoute()

const backgroundImage = computed(() => {
  if (route.name === 'destination') {
    return 'bg-[url(~/assets/images/background-destination-mobile.jpg)] md:bg-[url(~/assets/images/background-destination-tablet.jpg)] lg:bg-[url(~/assets/images/background-destination-desktop.jpg)]'
  }
  if (route.name === 'crew') {
    return 'bg-[url(~/assets/images/background-crew-mobile.jpg)] md:bg-[url(~/assets/images/background-crew-tablet.jpg)] lg:bg-[url(~/assets/images/background-crew-desktop.jpg)]'
  }
  if (route.name === 'technology') {
    return 'bg-[url(~/assets/images/background-technology-mobile.jpg)] md:bg-[url(~/assets/images/background-technology-tablet.jpg)] lg:bg-[url(~/assets/images/background-technology-desktop.jpg)]'
  }
  return 'bg-[url(~/assets/images/background-home-mobile.jpg)] md:bg-[url(~/assets/images/background-home-tablet.jpg)] lg:bg-[url(~/assets/images/background-home-desktop.jpg)] '
})
</script>

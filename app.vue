<template>
  <div
    id="myElement"
    class="myElement max-w-screen min-h-screen h-screen w-screen md:bg-cover"
    :class="`${backgroundImage}`"
  >
    <AppHeader />
    <main><NuxtPage /></main>
  </div>
</template>
<script setup lang="ts">
import AppHeader from '~/components/AppHeader.vue'
const route = useRoute()

const backgroundImage = computed(() => {
  if (route.name === 'destination') {
    return 'before:bg-[url(~/assets/images/destination/background-destination-desktop.jpg)] lg:bg-[url(~/assets/images/destination/background-destination-desktop.jpg)]'
  }
  if (route.name === 'crew') {
    return 'before:bg-[url(~/assets/images/crew/background-crew-desktop.jpg)] lg:bg-[url(~/assets/images/crew/background-crew-desktop.jpg)]'
  }
  if (route.name === 'technology') {
    return 'before:bg-[url(~/assets/images/technology/background-technology-desktop.jpg)] lg:bg-[url(~/assets/images/technology/background-technology-desktop.jpg)]'
  }
  return 'before:bg-[url(~/assets/images/home/background-home-desktop.jpg)] md:bg-[url(~/assets/images/home/background-home-desktop.jpg)]'
})
</script>
<style>
.myElement {
  position: relative;
  overflow: hidden;
}

@media screen and (max-width: 320px) {
  .myElement::before {
    content: '';
    position: absolute;
    width: 265%;
    height: 265%;
    top: -82%;
    left: -105%;
    z-index: -1;
    background-size: contain;
    transform: rotate(90deg);
  }
}

@media screen and (min-width: 321px) and (max-width: 424px) {
  .myElement::before {
    content: '';
    position: absolute;
    width: 300%;
    height: 300%;
    top: -100%;
    left: 0;
    z-index: -1;
    background-size: contain;
    transform: rotate(90deg);
  }
}

@media screen and (min-width: 425px) and (max-width: 572px) {
  .myElement::before {
    content: '';
    position: absolute;
    width: 240%;
    height: 240%;
    top: -77%;
    left: 25%;
    z-index: -1;
    background-size: contain;
    transform: rotate(90deg);
  }
}

@media screen and (min-width: 573px) and (max-width: 641px) {
  .myElement::before {
    content: '';
    position: absolute;
    width: 190%;
    height: 190%;
    top: -44%;
    left: -135%;
    z-index: -1;
    background-size: contain;
    transform: rotate(90deg);
  }
}

@media screen and (min-width: 641px) and (max-width: 768px) {
  .myElement::before {
    content: '';
    position: absolute;
    width: 180%;
    height: 180%;
    top: -47%;
    left: -80%;
    z-index: -1;
    background-size: contain;
    transform: rotate(90deg);
  }
}
</style>

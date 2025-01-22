<template>
  <div
    class="flex flex-col md:items-baseline items-center text-white xl:px-40 lg:px-12 px-10 pb-12"
  >
    <div class="lg:py-6 pb-16 uppercase lg:text-2xl text-[1.25rem]">
      <span class="opacity-25 mr-6">02</span>
      <span>meet your crew</span>
    </div>
    <TabsWrapper variant="dot">
      <template #image="slotProps">
        <div class="imageContainer lg:mt-0 mt-6">
          <img
            :src="useAsset(slotProps.activeHashTab)"
            alt="crew member"
            class="lg:max-h-[65vh] max-h-[21.25]"
          />
        </div>
      </template>
      <template #content>
        <TabContent :name="crew[0].name">
          <CrewDetails
            :role="crew[0].role"
            :name="crew[0].name"
            :bio="crew[0].bio"
          />
        </TabContent>
        <TabContent :name="crew[1].name">
          <CrewDetails
            :role="crew[1].role"
            :name="crew[1].name"
            :bio="crew[1].bio"
          />
        </TabContent>
        <TabContent :name="crew[2].name">
          <CrewDetails
            :role="crew[2].role"
            :name="crew[2].name"
            :bio="crew[2].bio"
          />
        </TabContent>
        <TabContent :name="crew[3].name">
          <CrewDetails
            :role="crew[3].role"
            :name="crew[3].name"
            :bio="crew[3].bio"
          />
        </TabContent>
      </template>
    </TabsWrapper>
  </div>
</template>
<script setup lang="ts">
import TabContent from '~/components/TabContent.vue'
import { crew } from '~/content/data.json'

const useAsset = (path: string): string => {
  const pathName = path.replace('#', '')
  return `_nuxt/assets/images/image-${pathName}.webp`
}
</script>
<style scoped>
.imageContainer {
  overflow: hidden;
  position: relative;
  z-index: 2;
}
.imageContainer:before {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  height: 5rem;
  width: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #0c0e17 100%);
  pointer-events: none;
  z-index: 3;
}
</style>

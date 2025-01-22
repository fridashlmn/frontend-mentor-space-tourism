<template>
  <div
    class="flex flex-col md:items-baseline items-center text-white xl:pl-40 xl:pr-0 lg:pr-0 lg:pl-12 md:px-10 pb-12"
  >
    <div
      class="lg:py-6 pb-16 uppercase lg:text-2xl md:text-[1.25rem] text-base"
    >
      <span class="opacity-25 mr-6">03</span>
      <span>space launch 101</span>
    </div>
    <TabsWrapper variant="number">
      <template #image="slotProps">
        <img
          :src="useAsset(slotProps.activeHashTab)"
          alt="crew member"
          class="lg:max-w-[37.5rem] w-screen max-w-none lg:ml-8"
        />
      </template>
      <template #content>
        <TabContent :name="technology[0].name">
          <TechnologyDetails
            :name="technology[0].name"
            :description="technology[0].description"
          />
        </TabContent>
        <TabContent :name="technology[1].name">
          <TechnologyDetails
            :name="technology[1].name"
            :description="technology[1].description"
          />
        </TabContent>
        <TabContent :name="technology[2].name">
          <TechnologyDetails
            :name="technology[2].name"
            :description="technology[2].description"
          />
        </TabContent>
      </template>
    </TabsWrapper>
  </div>
</template>
<script setup lang="ts">
import TabContent from '~/components/TabContent.vue'
import { technology } from '~/content/data.json'
import TechnologyDetails from '~/components/TechnologyDetails.vue'

const viewport = useViewport()

const useAsset = (path: string): string => {
  const pathName = path.replace('#', '')
  if (viewport.isGreaterThan('tablet')) {
    return `_nuxt/assets/images/image-${pathName}-portrait.jpg`
  }
  return `_nuxt/assets/images/image-${pathName}-landscape.jpg`
}
</script>

<template>
  <div
    class="flex flex-col md:items-baseline items-center text-white xl:px-40 lg:px-12 px-10 pb-12"
  >
    <div class="py-6 uppercase lg:text-2xl text-[1.25rem]">
      <span class="opacity-25 mr-6">02</span>
      <span>meet your crew</span>
    </div>
    <TabsWrapper variant="dot">
      <template #image="slotProps">
        <img
          :src="useAsset(slotProps.activeHashTab)"
          alt="crew member"
          class="max-w-[42.25rem]"
        />
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
            :role="crew[2].role"
            :name="crew[2].name"
            :bio="crew[2].bio"
          />
        </TabContent>
        <TabContent :name="crew[2].name">
          <CrewDetails
            :role="crew[1].role"
            :name="crew[1].name"
            :bio="crew[1].bio"
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
  return `_nuxt/assets/images/image-${pathName}.png`
}
</script>

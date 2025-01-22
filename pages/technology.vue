<template>
  <SubSiteContainer title="space launch 101" number="03" class="xl:pr-0 lg:pr-0 p-0">
    <TabsWrapper variant="number">
      <template #image="slotProps">
        <img
          :src="useAsset(slotProps.activeHashTab)"
          alt="crew member"
          class="lg:max-w-[37.5rem] w-screen max-w-none lg:ml-8 lg:mt-0 md:mt-20"
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
  </SubSiteContainer>
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

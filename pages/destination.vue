<template>
  <SubSiteContainer title="pick your destination" number="01">
    <TabsWrapper variant="name">
      <template #image="slotProps">
        <img
          :src="useAsset(slotProps.activeHashTab)"
          alt="planet"
          class="lg:h-[30rem] lg:w-[30rem] md:h-[18.75rem] md:w-[18.75rem] h-[9.375rem] w-[9.375rem] md:m-16 m-8"
        />
      </template>
      <template #content>
        <TabContent :name="destinations[0].name">
          <PlanetDetails
            :distance="destinations[0].distance"
            :name="destinations[0].name"
            :description="destinations[0].description"
            :travel="destinations[0].travel"
          />
        </TabContent>
        <TabContent :name="destinations[1].name">
          <PlanetDetails
            :distance="destinations[1].distance"
            :name="destinations[1].name"
            :description="destinations[1].description"
            :travel="destinations[1].travel"
          />
        </TabContent>
        <TabContent :name="destinations[2].name">
          <PlanetDetails
            :distance="destinations[2].distance"
            :name="destinations[2].name"
            :description="destinations[2].description"
            :travel="destinations[2].travel"
          />
        </TabContent>
        <TabContent :name="destinations[3].name">
          <PlanetDetails
            :distance="destinations[3].distance"
            :name="destinations[3].name"
            :description="destinations[3].description"
            :travel="destinations[3].travel"
          />
        </TabContent>
      </template>
    </TabsWrapper>
  </SubSiteContainer>
</template>
<script setup lang="ts">
import { destinations } from '~/content/data.json'
import TabContent from '~/components/TabContent.vue'

const useAsset = (path: string): string => {
  const pathName = path.replace('#', '')
  return `_nuxt/assets/images/image-${pathName}.png`
}
</script>

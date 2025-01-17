<template>
  <div
    class="flex flex-col items-center text-white xl:px-40 lg:px-12 px-10 pb-12"
  >
    <div class="py-6 uppercase lg:text-2xl text-[1.25rem]">
      <span class="opacity-25 mr-6">01</span>
      <span>pick your destination</span>
    </div>
    <TabsWrapper
      variant="name"
    >
      <template #image>
        <img
            src="~/assets/images/destination/image-moon.png"
            alt="moon"
            class="lg:h-[30rem] lg:w-[30rem] md:h-[18.75rem] md:w-[18.75rem] h-[9.375rem] w-[9.375rem] m-6"
        />
      </template>
      <template #content>
      <TabContent
        :name="destinations[0].name"
      >
        <PlanetDetails
          :distance="destinations[0].distance"
          :name="destinations[0].name"
          :description="destinations[0].description"
          :travel="destinations[0].travel"
          img-src=""
        />
      </TabContent>
      <TabContent :name="destinations[1].name">
        <PlanetDetails
            :distance="destinations[1].distance"
            :name="destinations[1].name"
            :description="destinations[1].description"
            :travel="destinations[1].travel"
            img-src=""
        />
      </TabContent>
      <TabContent :name="destinations[2].name">
        <PlanetDetails
            :distance="destinations[2].distance"
            :name="destinations[2].name"
            :description="destinations[2].description"
            :travel="destinations[2].travel"
            img-src=""
        />
      </TabContent>
      <TabContent :name="destinations[3].name">
        <PlanetDetails
            :distance="destinations[3].distance"
            :name="destinations[3].name"
            :description="destinations[3].description"
            :travel="destinations[3].travel"
            img-src=""
        />
      </TabContent>
      </template>
    </TabsWrapper>
  </div>
</template>
<script setup lang="ts">
import { destinations } from '~/content/data.json'
import TabContent from '~/components/TabContent.vue'
</script>

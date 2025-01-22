<template>
  <SubSiteContainer title="meet your crew" number="02">
    <TabsWrapper variant="dot">
      <template #image="slotProps">
        <div class="imageOverlay my-0 mx-auto">
          <img
            :src="useAsset(slotProps.activeHashTab)"
            alt="crew member"
            class="lg:max-h-[42.5rem] md:max-h-[35rem] max-h-[21.25rem]"
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
  </SubSiteContainer>
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
.imageOverlay {
  overflow: hidden;
  position: relative;
  z-index: 2;
}
.imageOverlay:before {
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

<template>
  <div
    class="flex flex-col md:items-baseline items-center text-white xl:px-40 lg:pt-0 lg:px-12 md:p-10 p-6"
  >
    <SubSiteHeader :title="title" :number="number" />
    <slot />
  </div>
</template>
<script setup lang="ts">
import SubSiteHeader from '~/components/SubSiteHeader.vue'

defineProps<{
  title: string
  number: string
}>()
</script>

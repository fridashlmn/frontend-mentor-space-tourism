<template>
  <div
    class="lg:py-6 md:p-0 pb-16 uppercase lg:text-2xl md:text-[1.25rem] text-base"
  >
    <span class="opacity-25 mr-6">{{ number }}</span>
    <span>{{ title }}</span>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  title: string
  number: string
}>()
</script>

<template>
  <NuxtLink
    :to="link"
    class="group relative h-10 flex items-center lg:mr-12 mr-8"
  >
    <hr
      :class="cssClass"
      class="group-hover:absolute group-hover:z-10 group-hover:-bottom-[69%] group-hover:w-full group-hover:border group-hover:border-white group-hover:border-opacity-50"
    />
    <span class="font-bold mr-2">{{ labelPrefix }}</span>
    <span>{{ label }}</span>
  </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
  link: string
  cssClass: string
  labelPrefix: string
  label: string
}
defineProps<Props>()
</script>

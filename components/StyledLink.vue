<template>
  <NuxtLink
    :to="link"
    class="group relative h-10 flex items-center lg:mr-12 mr-8"
    @click="$emit('click')"
  >
    <hr
      :class="cssClass"
      class="group-hover:absolute group-hover:z-10 md:group-hover:-bottom-[69%] md:group-hover:w-full group-hover:border group-hover:border-white md:group-hover:border-opacity-50"
    >
    <span class="font-bold mr-2">{{ labelPrefix }}</span>
    <span>{{ label }}</span>
  </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
  link: string
  label: string
  labelPrefix: string
  cssClass: string
}
defineProps<Props>()
defineEmits(['click'])
</script>

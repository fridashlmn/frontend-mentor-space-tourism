<template>
  <div
    class="flex lg:flex-row flex-col items-center justify-between lg:pt-16 my-0 mx-auto lg:w-full lg:max-w-none md:max-w-[32.125rem]"
  >
    <slot name="image" :active-hash-tab="activeTabHash" />
    <div class="flex flex-col lg:items-baseline items-center">
      <ul :class="cssClasses" class="font-['Barlow_Condensed']">
        <li
          v-for="tab in tabs"
          :key="tab.name"
          :class="cssListClasses"
          class="cursor-pointer"
          @click="activeTabHash = tab.hash"
        >
          {{ tab.name }}
        </li>
      </ul>
      <slot name="content" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, type ComputedRef } from 'vue'
const activeTabHash = ref<string>('')
const tabs = ref([])

const props = defineProps<{
  variant: 'name' | 'dot'
}>()

const cssClasses: ComputedRef<string> = computed(() => {
  if (props.variant === 'name') {
    return 'flex flex-row justify-between max-w-[18.75rem] w-full md:pt-8 text-base uppercase'
  }
  return ''
})

const cssListClasses: ComputedRef<string> = computed(() => {
  if (props.variant === 'name') {
    return 'hover:underline underline-offset-8'
  }
  return ''
})

provide('addTab', (tab) => {
  const count: number = tabs.value.push(tab)
  if (count === 1) {
    activeTabHash.value = tab.hash
  }
})
provide('activeTabHash', activeTabHash)
</script>

<template>
  <div :class="cssOuterClass">
    <slot
      v-if="variant === 'name'"
      name="image"
      :active-hash-tab="activeTabHash"
    />
    <div :class="cssInnerClass">
      <ul
        v-if="variant === 'name'"
        :class="cssListClass"
        class="font-['Barlow_Condensed']"
      >
        <li
          v-for="tab in tabs"
          :key="tab.name"
          :class="cssListItemClass"
          class="cursor-pointer"
          @click="activeTabHash = tab.hash"
        >
          {{ tab.name }}
        </li>
      </ul>
      <slot name="content" />
      <ul v-if="variant === 'dot'" class="font-['Barlow_Condensed']">
        <li
          v-for="tab in tabs"
          :key="tab.name"
          :class="cssListItemClass"
          class="cursor-pointer"
          @click="activeTabHash = tab.hash"
        >
          _
        </li>
      </ul>
    </div>
    <slot
      v-if="variant === 'dot'"
      name="image"
      :active-hash-tab="activeTabHash"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, provide, type ComputedRef } from 'vue'
const activeTabHash = ref<string>('')
const tabs = ref([])

const props = defineProps<{
  variant: 'name' | 'dot'
}>()

const cssOuterClass: ComputedRef<string> = computed(() => {
  if (props.variant === 'name') {
    return 'flex lg:flex-row flex-col items-center justify-between lg:pt-16 my-0 mx-auto lg:w-full lg:max-w-none md:max-w-[32.125rem]'
  }
  if (props.variant === 'dot') {
    return 'flex lg:flex-row flex-col items-center justify-between lg:pt-16 my-0 mx-auto lg:w-full lg:max-w-none md:max-w-[32.125rem]'
  }
  return ''
})

const cssInnerClass: ComputedRef<string> = computed(() => {
  if (props.variant === 'name') {
    return 'flex flex-col lg:items-baseline items-center'
  }
  if (props.variant === 'dot') {
    return 'flex flex-col lg:items-baseline items-center'
  }
  return ''
})

const cssListClass: ComputedRef<string> = computed(() => {
  if (props.variant === 'name') {
    return 'flex flex-row justify-between max-w-[18.75rem] w-full md:pt-8 text-base uppercase'
  }
  return ''
})

const cssListItemClass: ComputedRef<string> = computed(() => {
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

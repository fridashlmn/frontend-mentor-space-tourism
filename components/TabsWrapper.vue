<template>
  <div :class="cssOuterClass">
    <slot
      v-if="variant === 'name' || variant === 'number'"
      name="image"
      :active-hash-tab="activeTabHash"
    />
    <div :class="cssInnerClass">
      <ul
        v-if="variant === 'name'"
        class="font-['Barlow_Condensed'] flex flex-row justify-between max-w-[18.75rem] w-full md:pt-8 text-base uppercase"
      >
        <li
          v-for="tab in tabs"
          :key="tab.name"
          class="hover:underline underline-offset-8 cursor-pointer"
          @click="activeTabHash = tab.hash"
        >
          {{ tab.name }}
        </li>
      </ul>
      <ul
        v-if="variant === 'number'"
        class="lg:my-0 my-8 font-['Barlow_Condensed'] flex lg:flex-col flex-row justify-between text-base uppercase"
      >
        <li
          v-for="(tab, index) in tabs"
          :key="tab.name"
          :class="
            activeTabHash === tab.hash
              ? 'bg-white text-blue-900'
              : 'bg-transparent'
          "
          class="lg:my-4 lg:ml-0 lg:mr-16 mx-3 flex items-center justify-center lg:h-20 lg:w-20 md:h-14 md:w-14 h-10 w-10 border border-white border-opacity-25 rounded-full lg:text-3xl md:text-[1.5rem] text-lg aspect-square cursor-pointer hover:bg-white hover:text-blue-900"
          @click="activeTabHash = tab.hash"
        >
          {{ index + 1 }}
        </li>
      </ul>
      <slot name="content" />
      <ul
        v-if="variant === 'dot'"
        class="font-['Barlow_Condensed'] flex flex-row items-center lg:mt-24 mt-16"
      >
        <li
          v-for="tab in tabs"
          :key="tab.name"
          class="lg:mr-10 mr-6 cursor-pointer"
          @click="activeTabHash = tab.hash"
        >
          <span
            :class="activeTabHash === tab.hash ? 'opacity-100' : 'opacity-15'"
            class="inline-block lg:h-4 lg:w-4 h-3 w-3 bg-white hover:opacity-50 rounded-[50%]"
          />
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
  variant: 'name' | 'dot' | 'number'
}>()

const cssOuterClass: ComputedRef<string> = computed(() => {
  if (props.variant === 'name') {
    return 'flex lg:flex-row flex-col items-center justify-between lg:pt-16 my-0 mx-auto lg:w-full lg:max-w-none md:max-w-[32.125rem]'
  }
  if (props.variant === 'dot') {
    return 'flex lg:flex-row flex-col items-start justify-between my-0 mx-auto lg:w-full lg:max-w-none md:max-w-[32.125rem]'
  }
  if (props.variant === 'number') {
    return 'flex lg:flex-row order flex-col items-center justify-between lg:pt-16 my-0 mx-auto lg:w-full lg:max-w-none md:max-w-[32.125rem]'
  }
  return ''
})

const cssInnerClass: ComputedRef<string> = computed(() => {
  if (props.variant === 'name') {
    return 'flex flex-col lg:items-baseline items-center'
  }
  if (props.variant === 'dot') {
    return 'flex flex-col lg:items-baseline self-center items-center'
  }
  if (props.variant === 'number') {
    return 'md:p-0 px-6 flex lg:flex-row flex-col lg:order-first items-center'
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

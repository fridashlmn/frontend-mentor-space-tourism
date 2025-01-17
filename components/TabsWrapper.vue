<template>
  <div class="flex lg:flex-row flex-col items-center xl:pt-24 lg:pt-16 my-0 mx-auto"
  >
    <slot v-if="viewport.isLessOrEquals('tablet')" name="image" />
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
    <slot v-if="viewport.isGreaterThan('tablet')" name="image" />
    <slot name="content" />
  </div>
</template>

<script setup lang="ts">
import { ref, provide, type ComputedRef } from 'vue'
const activeTabHash = ref<string>('')
const tabs = ref([])

const props = defineProps<{
  variant: 'name' | 'dot'
}>()

const viewport = useViewport()

const cssClasses: ComputedRef<string> = computed(() => {
  if (props.variant === 'name') {
    return 'flex flex-row justify-between w-full text-base uppercase'
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

<template>
  <div v-show="isActive">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { inject, ref, onBeforeMount, watch } from 'vue'

const addTab = inject('addTab')
const activeTabHash = inject('activeTabHash') as string

const props = defineProps<{
  name: string
}>()

const hash = ref('')
const isActive = ref(false)

onBeforeMount(() => {
  hash.value = `#${props.name.toLowerCase().replace(/ /g, '-')}`
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  addTab({
    name: props.name,
    hash: hash.value,
  })
})

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
watch(activeTabHash, () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  isActive.value = activeTabHash.value === hash.value
})
</script>

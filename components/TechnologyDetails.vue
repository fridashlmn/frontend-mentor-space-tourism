<template>
  <div class="lg:max-w-[33.688rem]">
    <h4
      class="font-['Bellefair'] md:text-3xl text-lg lg:pt-0 py-4 uppercase lg:text-left text-center opacity-50"
    >
      the terminology...
    </h4>
    <h3
      class="font-['Bellefair'] md:text-4xl text-xl pb-6 uppercase lg:text-left text-center"
    >
      {{ name }}
    </h3>
    <p
      class="font-['Barlow'] md:text-lg text-[16px] lg:text-left text-base text-center tracking-normal text-blue-300"
    >
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string
  description: string
}
defineProps<Props>()
</script>

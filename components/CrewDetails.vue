<template>
  <div class="lg:max-w-[33.688rem]">
    <h4
      class="font-['Bellefair'] md:text-3xl text-lg md:pt-10 pb-4 uppercase lg:text-left text-center opacity-50"
    >
      {{ role }}
    </h4>
    <h3
      class="font-['Bellefair'] md:text-4xl text-xl md:pt-8 pb-8 uppercase lg:text-left text-center"
    >
      {{ name }}
    </h3>
    <p
      class="font-['Barlow'] md:text-lg text-[16px] lg:text-left text-base text-center tracking-normal text-blue-300"
    >
      {{ bio }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  role: string
  name: string
  bio: string
}
defineProps<Props>()
</script>

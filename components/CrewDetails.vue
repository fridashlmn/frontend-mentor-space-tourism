<template>
  <div class="lg:max-w-[27.813rem]">
    <h4
      class="font-['Bellefair'] text-3xl md:pt-10 pt-7 pb-4 uppercase lg:text-left text-center"
    >
      {{ role }}
    </h4>
    <h3
      class="font-['Bellefair'] lg:text-4xl text-3xl pb-6 uppercase lg:text-left text-center"
    >
      {{ name }}
    </h3>
    <p
      class="font-['Barlow'] lg:text-lg text-[16px] lg:text-left text-base text-center tracking-normal"
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

<template>
  <div class="lg:max-w-[27.813rem]">
    <h3
      class="font-['Bellefair'] lg:text-5xl text-4xl md:pt-10 pt-7 pb-5 uppercase lg:text-left text-center"
    >
      {{ name }}
    </h3>
    <p
      class="font-['Barlow'] lg:text-lg text-[16px] lg:text-left text-base text-center tracking-normal"
    >
      {{ description }}
    </p>
    <hr
      class="w-[100%] lg:my-10 mt-4 mb-6 border border-white border-opacity-25"
    />
    <div
      class="flex md:flex-row flex-col md:items-baseline items-center lg:justify-start justify-center lg:text-left text-center"
    >
      <div class="md:mr-24 pb-10">
        <p
          class="font-['Barlow_Condensed'] text-sm uppercase md:pb-10 pb-8 text-blue-300"
        >
          avg. distance
        </p>
        <p class="font-['Bellefair'] text-xl uppercase">{{ distance }}</p>
      </div>
      <div>
        <p
          class="font-['Barlow_Condensed'] text-sm uppercase md:pb-10 pb-8 text-blue-300"
        >
          est. travel time
        </p>
        <p class="font-['Bellefair'] text-xl uppercase">{{ travel }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string
  description: string
  distance: string
  travel: string
}
defineProps<Props>()
</script>

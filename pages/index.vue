<template>
  <div
    class="lg:h-[83vh] flex lg:flex-row flex-col items-center lg:justify-between justify-start xl:px-40 md:pt-32 p-6 text-white"
  >
    <div class="flex flex-col lg:items-baseline items-center sm:m-0 mb-20">
      <h4 class="md:text-xl text-base md:tracking-widest uppercase">
        so, you want to travel to
      </h4>
      <h1 class="md:text-6xl text-[5rem] leading-snug uppercase">space</h1>
      <p
        class="font-['Barlow'] md:text-lg text-base lg:text-left text-center max-w-[540px] tracking-wide"
      >
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </div>
    <DisplayButton @click="router.push('/destination')">Explore</DisplayButton>
  </div>
</template>
<script setup lang="ts">
const router = useRouter()
</script>

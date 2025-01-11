<template>
  <div
    class="flex lg:flex-row h-screen flex-col items-center lg:justify-between justify-start xl:px-40 sm:px-10 px-6 pb-32 pt-16 text-white"
  >
    <div class="flex flex-col items-center sm:m-0 mb-20">
      <h4 class="sm:text-2xl text-base uppercase">so, you want to travel to</h4>
      <h1 class="sm:text-6xl text-6xl text-[5rem] uppercase">space</h1>
      <p class="sm:text-lg max-w-[540px] text-center">
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

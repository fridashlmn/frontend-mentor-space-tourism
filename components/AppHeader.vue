<template>
  <div
    class="font-['Barlow_Condensed'] lg:py-10 p-6 relative flex flex-row justify-between items-center text-white text-base uppercase"
  >
    <LogoIcon class="lg:ml-16" />
    <div
      v-if="viewport.isGreaterThan('mobileWide')"
      class="lg:pl-40 pl-12 lg:pr-12 z-20 flex items-center h-24 bg-white bg-opacity-5 backdrop-blur-lg"
    >
      <hr
        v-if="viewport.isGreaterThan('desktop')"
        class="absolute z-10 -left-[51%] w-[55%] border border-white border-opacity-10"
      />
      <StyledLink
        :css-class="activeRoute('index')"
        label-prefix="00"
        label="Home"
        link="/"
      />
      <StyledLink
        :css-class="activeRoute('destination')"
        label-prefix="01"
        label="Destination"
        link="/destination"
      />
      <StyledLink
        :css-class="activeRoute('crew')"
        label-prefix="02"
        label="Crew"
        link="/crew"
      />
      <StyledLink
        :css-class="activeRoute('technology')"
        label-prefix="03"
        label="Technology"
        link="/technology"
      />
    </div>
    <div v-else>
      <MenuIcon v-if="!showMobileMenu" class="relative z-10 my-2" @click="toggleMobileMenu" />
      <CloseIcon v-else class="relative z-10 my-2" @click="toggleMobileMenu" />
      <div v-if="showMobileMenu" class="z-0 absolute flex flex-col h-screen w-64 right-0 top-0 px-8 py-28 bg-blue-900 bg-opacity-25 backdrop-blur-lg">
        <StyledLink
            :css-class="activeRoute('index')"
            label-prefix="00"
            label="Home"
            link="/"
        />
        <StyledLink
            :css-class="activeRoute('destination')"
            label-prefix="01"
            label="Destination"
            link="/destination"
        />
        <StyledLink
            :css-class="activeRoute('crew')"
            label-prefix="02"
            label="Crew"
            link="/crew"
        />
        <StyledLink
            :css-class="activeRoute('technology')"
            label-prefix="03"
            label="Technology"
            link="/technology"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import LogoIcon from '~/assets/images/shared/logo.svg?component'
import MenuIcon from '~/assets/images/shared/icon-hamburger.svg?component'
import CloseIcon from '~/assets/images/shared/icon-close.svg?component'

const viewport = useViewport()
const router = useRouter()
const showMobileMenu= ref<boolean>(false)

function activeRoute(value: string): string {
  if (value === router.currentRoute.value.name) {
    return 'absolute z-10 -bottom-[69%] w-full border border-white border-opacity-100'
  }
  return ''
}

function toggleMobileMenu(){
  showMobileMenu.value = !showMobileMenu.value
}

</script>

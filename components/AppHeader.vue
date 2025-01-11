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
      >
      <StyledLink
        v-for="item in navigationItems"
        :key="item.link"
        :link="item.link"
        :label="item.label"
        :label-prefix="item.labelPrefix"
        :css-class="item.cssClass"
      />
    </div>
    <div v-else>
      <MenuIcon
        v-if="!showMobileMenu"
        class="relative z-10 my-2"
        @click="toggleMobileMenu"
      />
      <CloseIcon v-else class="relative z-10 my-2" @click="toggleMobileMenu" />
      <div
        v-if="showMobileMenu"
        class="z-0 absolute flex flex-col h-screen w-64 right-0 top-0 px-8 py-28 bg-blue-900 bg-opacity-25 backdrop-blur-lg"
      >
        <StyledLink
          v-for="item in navigationItems"
          :key="item.link"
          :link="item.link"
          :label="item.label"
          :label-prefix="item.labelPrefix"
          :css-class="item.cssClass"
          @click="toggleMobileMenu"
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
const showMobileMenu = ref<boolean>(false)

const navigationItems = computed(() => [
  {
    link: '/',
    label: 'Home',
    labelPrefix: '00',
    cssClass: activeRoute('index'),
  },
  {
    link: '/destination',
    label: 'Destination',
    labelPrefix: '01',
    cssClass: activeRoute('destination'),
  },
  {
    link: '/crew',
    label: 'Crew',
    labelPrefix: '02',
    cssClass: activeRoute('crew'),
  },
  {
    link: '/technology',
    label: 'Technology',
    labelPrefix: '03',
    cssClass: activeRoute('technology'),
  },
])

function activeRoute(value: string): string {
  if (value === router.currentRoute.value.name) {
    return 'absolute z-10 md:top-[164%] md:right-0 md:w-full border border-white border-opacity-100 md:rotate-0 rotate-90 -right-[44%] top-[45%] w-[18px]'
  }
  return ''
}

function toggleMobileMenu() {
  showMobileMenu.value = !showMobileMenu.value
}
</script>

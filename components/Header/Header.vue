<template>
  <div
    class="relative flex justify-between items-center px-[40px] py-[35px] text-main-black bg-white"
  >
    <NuxtLink to="/">
      <NuxtImg src="/logo.svg" class="h-[25px]" />
    </NuxtLink>
    <div class="w-[40%] flex justify-between">
      <div class="flex items-center gap-[48px]">
        <NuxtLink>Works</NuxtLink>
        <NuxtLink>About</NuxtLink>
      </div>
      <div class="flex items-center gap-[16px]">
        <!-- component lang -->
        <!-- <NuxtImg src="/imgs/uk-logo.svg" /> -->
        <button
          class="rounded-full text-[1.25rem] text-white p-[16px_32px] bg-main-black hover:bg-main-gray active:bg-main-black active:opacity-75"
        >
          Let's work
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>

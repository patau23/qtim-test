<script setup lang="ts"></script>

<template>
  <Header class="default-font" />
  <article class="default-font text-main-black bg-white pt-[120px] pb-[140px]">
    <slot />
  </article>
  <Footer class="default-font" />
</template>

<style>
@import url(../public/fonts/_fonts.css);
.default-font {
  font-family: "TTCommons", sans-serif;
}
</style>

<template>
  <div class="group relative hover:absolute hover:-bottom-[10px]">
    <div class="flex flex-col items-end gap-[24px]">
      <NuxtImg :src="article.image" class="w-full h-[280px] object-cover" />
      <h2 class="h-[100px] text-[20px] truncate-3">
        {{ article.preview }}
      </h2>
    </div>
    <NuxtLink :to="`/article/${article.id}`" class="cursor-pointer">
      <button class="text-[20px] hidden text-main-pink group-hover:block">
        read more
      </button>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { Article } from "~/types";

const { article } = defineProps<{ article: Article }>();
</script>

<style scoped></style>

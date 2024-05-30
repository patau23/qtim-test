<template>
  <section class="container flex flex-col gap-[80px] text-[16px]">
    <div>
      <h1 class="text-[5.25em]">{{ article?.title }}</h1>
    </div>
    <div>
      <NuxtImg :src="article?.image" class="w-full h-[700px] object-cover" />
      <span class="text-[1.8em]">{{ article?.createdAt }}</span>
    </div>
    <div class="w-[75%]">
      <span class="text-[1em]">About</span>
      <p class="text-[2.25em]">
        {{ article?.description }}
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { API_URL } from "@/app.constants";
import type { Article } from "~/types";

const { id } = useRoute().params;
const { data: article } = await useFetch<Article>(API_URL + `/posts/${id}`);
</script>

<style scoped></style>

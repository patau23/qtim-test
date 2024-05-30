<template>
  <section class="container text-[16px]">
    <div>
      <h1 class="text-[5.25em]">Articles</h1>
    </div>
    <div v-if="articles" class="grid grid-cols-4 gap-[32px] mt-[60px]">
      <div
        class="relative w-full h-full bg-white"
        v-for="(item, index) in pagedArticles"
        :key="index"
      >
        <Card :article="item" />
      </div>
    </div>
    <div class="flex gap-[8px] leading-3 mt-[50px]">
      <button
        v-if="current !== 1"
        class="flex justify-center items-center rounded-[12px] p-[16px_19px] border border-light-gray text-main-gray bg-white hover:bg-main-gray"
        @click="changePage(current - 1)"
      >
        >
      </button>
      <button
        v-for="(item, index) in onlyFive"
        :key="index"
        :class="[
          'flex justify-center items-center rounded-[12px] p-[16px_19px] text-main-black bg-light-gray hover:bg-main-gray hover:text-white active:bg-main-black active:text-white',
          {
            '!text-white !bg-main-black': current == item,
          },
        ]"
        @click="changePage(item)"
      >
        <span class="text-[16px]">
          {{ item }}
        </span>
      </button>
      <button
        v-if="current < total"
        class="flex justify-center items-center rounded-[12px] p-[16px_19px] border border-light-gray text-main-gray bg-white hover:bg-main-gray"
        @click="changePage(current + 1)"
      >
        >
      </button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { API_URL } from "@/app.constants";
import type { Article } from "~/types";

const current = ref<number>(1);
const amount = ref<number>(8);

const { data: articles } = await useFetch<Article[]>(API_URL + "/posts");

const total = computed<number>(() => {
  if (articles.value) return Math.ceil(articles.value.length / amount.value);
  else return 0;
});

const onlyFive = computed<number[]>(() => {
  const res = current.value + 5;
  const arr: number[] = [];
  if (res > total.value) {
    for (let i = total.value - 4; i <= total.value; i++) {
      arr.push(i);
    }
  } else {
    for (let i = current.value; i < current.value + 5; i++) {
      arr.push(i);
    }
  }
  return arr;
});

const pagedArticles = computed<Article[] | undefined>(() => {
  return articles.value?.reverse().slice(
    (current.value - 1) * amount.value,
    (current.value - 1) * amount.value + amount.value
  );
});

// methods
const changePage = (page: number) => {
  if (page > total.value || page < 1) return;
  current.value = page;
};
</script>

<style scoped></style>

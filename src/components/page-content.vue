<script setup>
import { ref, computed } from 'vue';
import { useFetch } from '../hooks/fetch.js';
import data from './data.json';
import { useStorage } from '@vueuse/core';
import RepoCard from './repo-card.vue';
import RepoTopic from './repo-topic.vue';

const CACHE_KEY = 'repo-guide-cache';

const API_REPOS =
  'https://api.github.com/search/repositories?q=user:mewcoder topics:>0';

// const { data } = useFetch(API_REPOS);

const state = useStorage(CACHE_KEY, {});

const curRepo = ref('');

const repoList = computed(() => {
  const list = getRepoList(state.value);
  return curRepo.value
    ? list.filter((item) => item.topics.includes(curRepo.value))
    : list;
});

function getRepoList(data) {
  return data.items.map((item) => ({
    name: item.name,
    description: item.description,
    url: item.html_url,
    stars: item.stargazers_count,
    topics: item.topics
    // language: item.language,
    // forks: item.forks_count,
  }));
}

function handleChange(val) {
  curRepo.value = val;
}
</script>

<template>
  <repo-topic @change="handleChange" />
  <div class="flex p-4">
    <RepoCard
      cl
      v-for="item in repoList"
      :key="item.name"
      :data="item"
      class="m-2"
    />
  </div>
</template>

<style scoped></style>

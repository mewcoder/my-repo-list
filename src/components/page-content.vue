<script setup>
import { ref, computed } from 'vue';
import state from '../hooks/store';
import { fetchRepoList } from '../hooks/fetch';
import RepoCard from './repo-card.vue';
import RepoTopic from './repo-topic.vue';

fetchRepoList(true);

const curRepo = ref('');

const curRepoList = computed(() => {
  return curRepo.value && curRepo.value !== 'all'
    ? state.repoList.filter((item) => item.topics.includes(curRepo.value))
    : state.repoList;
});

function handleChange(val) {
  curRepo.value = val;
}
</script>

<template>
  <repo-topic @change="handleChange" />
  <div class="p-2 grid gap-x-2 gap-y-2 grid-cols-4">
    <RepoCard
      v-for="item in curRepoList"
      :key="item.name"
      :data="item"
      class="m-2"
    />
  </div>
</template>

<style scoped></style>

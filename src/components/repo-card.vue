<script setup>
defineProps({
  data: {
    type: Object,
    required: true
  }
});

const handleClick = (url) => {
  window.open(url, '_blank');
};
</script>

<template>
  <div class="repo-card" @click="handleClick(data.url)">
    <div class="text-lg">{{ data.name }}</div>
    <div class="my-2 truncate" :title="data.description">
      {{ data.description }}
    </div>
    <div class="inline-flex items-center">
      <div class="i-carbon-star"></div>
      <div class="ml-1">{{ data.stars }}</div>
    </div>
  </div>
</template>

<style scoped>
.repo-card {
  @apply py-3 px-4 rounded-lg cursor-pointer bg-white transition duration-200;
  @apply shadow-md  hover:shadow-xl;
  @apply dark:bg-dark-100  dark:text-gray-200 dark:hover:shadow-gray-800;
}
</style>

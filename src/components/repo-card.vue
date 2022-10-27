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
  <div
    class="py-3 px-4 w-1/4 border border-light-500 rounded shadow cursor-pointer hover:shadow-lg transition duration-200 dark:bg-dark-100 dark:border-dark-100 dark:text-gray-200 dark:hover:shadow-gray-800"
    @click="handleClick(data.url)"
  >
    <div class="text-lg">{{ data.name }}</div>
    <div class="my-2 truncate">{{ data.description }}</div>
    <div class="inline-flex items-center">
      <div class="i-carbon-star"></div>
      <div class="ml-1">{{ data.stars }}</div>
    </div>
  </div>
</template>

<style scoped></style>

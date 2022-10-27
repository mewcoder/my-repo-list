<script setup>
import PageHeader from './components/page-header.vue';
import PageContent from './components/page-content.vue';
</script>

<template>
  <page-header />
  <page-content />
</template>

<style>
body {
  @apply bg-white text-gray-900;
}
.dark body {
  @apply bg-dark-800 text-white;
}
</style>

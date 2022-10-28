<script setup>
import { useDark, useToggle } from '@vueuse/core';
import { fetchRepoList } from '../hooks/fetch';
const isDark = useDark();
const toggleDark = useToggle(isDark);

const refresh = () => {
  fetchRepoList();
};
</script>

<template>
  <header class="font-mono px-6 flex justify-between">
    <h2 class="text-indigo-500 text-4xl font-extrabold">My Repo List</h2>
    <div class="py-6 flex space-x-2">
      <button
        class="i-carbon-rotate-360 dark:i-carbon-rotate-360 text-2xl dark:text-white cursor-pointer"
        title="reload repos data"
        @click="refresh()"
      />

      <button
        class="i-carbon-logo-github text-2xl dark:text-white cursor-pointer"
        href="https://github.com/mewcoder"
        target="_blank"
      ></button>

      <button
        class="i-carbon-sun dark:i-carbon-moon text-2xl dark:text-white cursor-pointer"
        @click="toggleDark()"
      />
    </div>
  </header>
</template>

<style scoped></style>

<script setup>
import state from '../hooks/store';
import { useDark, useToggle } from '@vueuse/core';
import { fetchRepoList } from '../hooks/fetch';
import { user } from '../../config';

const isDark = useDark();
const toggleDark = useToggle(isDark);

const refresh = () => {
  fetchRepoList();
};
</script>

<template>
  <header class="font-mono px-6 flex justify-between">
    <a
      class="text-indigo-500 text-4xl py-4 font-extrabold cursor-pointer no-underline"
      :href="`https://github.com/${user}?tab=/repositories`"
      target="_blank"
      >My Repo List</a
    >
    <div class="py-6 flex space-x-2">
      <button
        class="i-carbon-rotate-360 dark:i-carbon-rotate-360 text-2xl dark:text-white cursor-pointer"
        :class="{ 'animate-spin': state.loading }"
        title="reload repos data"
        @click="refresh()"
      />
      <button
        class="i-carbon-sun dark:i-carbon-moon text-2xl dark:text-white cursor-pointer"
        @click="toggleDark()"
      />
      <a
        class="i-carbon-logo-github text-2xl text-gray-900 dark:text-white cursor-pointer"
        :href="`https://github.com/${user}`"
        target="_blank"
      ></a>
    </div>
  </header>
</template>

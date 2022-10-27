<script setup>
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <header class="font-mono px-6 flex justify-between text-indigo-500">
    <h2 class="text-4xl font-extrabold">My Github Repos</h2>
    <div>
      <button
        class="i-carbon-sun dark:i-carbon-moon text-2xl dark:text-white cursor-pointer"
        @click="toggleDark()"
      />
    </div>
  </header>
</template>

<style scoped></style>

<script setup>
import { ref } from 'vue';
import { topics } from '../../config';

const emit = defineEmits(['change']);

const tabs = ['all', ...topics];
const curTab = ref('all');

const handleClick = (val) => {
  curTab.value = val;
  emit('change', val);
};
</script>

<template>
  <nav class="flex space-x-8 border-b border-gray-200 dark:border-gray-600">
    <span
      v-for="tab in tabs"
      :key="tab"
      :class="[
        curTab === tab
          ? 'border-indigo-500 text-indigo-500'
          : 'border-transparent hover:border-gray-300',
        'whitespace-nowrap py-2 px-10 border-b-2 cursor-pointer '
      ]"
      @click="handleClick(tab)"
    >
      {{ tab }}
    </span>
  </nav>
</template>

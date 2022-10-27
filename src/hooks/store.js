import { reactive } from 'vue';

export function useStore() {
  const state = reactive({});
  return state;
}

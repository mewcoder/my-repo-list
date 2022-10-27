import { unref, shallowRef } from 'vue';

export function useFetch(url) {
  const data = shallowRef(null);
  const error = shallowRef(null);
  fetch(unref(url))
    .then((r) => r.json())
    .then((r) => (data.value = r))
    .catch((e) => (error.value = e));

  return {
    data,
    error
  };
}

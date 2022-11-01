import { user } from '../../config';
import state from './store.js';

const CACHE_KEY = 'my-repo-list-cache';

const getListUrl = (name) =>
  `https://api.github.com/search/repositories?q=user:${name} topics:>0`;

export function fetchRepoList(useCache = false) {
  const cacheStr = localStorage.getItem(CACHE_KEY);
  if (useCache && cacheStr) {
    try {
      const cachelist = JSON.parse(cacheStr);
      if (Array.isArray(cachelist)) {
        state.repoList = cachelist;
        return;
      }
    } catch (e) {
      console.warn('get my-repo-list-cache error:', e);
    }
  }
  state.loading = true;
  fetch(getListUrl(user))
    .then((r) => r.json())
    .then((r) => {
      const list = r.items.map((item) => ({
        name: item.name,
        description: item.description,
        url: item.html_url,
        stars: item.stargazers_count,
        topics: item.topics,
        homepage: item.homepage
        // language: item.language,
        // forks: item.forks_count,
      }));
      state.repoList = list;
      state.loading = false;
      localStorage.setItem(CACHE_KEY, JSON.stringify(list));
    })
    .catch((e) => {
      console.error('fetch repo list error:', e);
      state.loading = false;
      state.repoList = [];
    });
}

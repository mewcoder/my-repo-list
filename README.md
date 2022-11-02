# 🧭 my-repo-list 
> Github仓库导航页

![image](https://user-images.githubusercontent.com/26575685/199268754-e7237994-9396-497a-8c43-fe296a7bbdaa.png)
> 默认会优先使用缓存数据，可手动点击右上角刷新数据


- 由于github仓库太多无法分类管理和查找，本项目通过仓库的标签`topics`进行分类整理和展示。
- 本项目基于Vue3+Vite开发，使用`https://api.github.com/search/repositories?q=user:${name} topics:>0`查询repositories数据
- 欢迎 fork 使用，修改`/config.js`文件配置用户名和标签导航
```js
export const user = 'mewcoder';
export const topics = ['open','demo','study','backup'];
```



> 自用标签说明：
> - open 开源
> - demo 练习
> - study 学习
> - backup 备份

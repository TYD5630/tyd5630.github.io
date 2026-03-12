---
title: 'Astro 博客搭建指南'
description: '从零开始使用 Astro + Tailwind CSS 搭建个人博客'
pubDate: 2026-03-12
heroImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200'
tags: ['Astro', '教程', '前端']
---

# Astro 博客搭建指南

## 为什么选择 Astro？

Astro 是一个专注于内容驱动的静态站点生成器，具有以下优势：

1. **零 JS 默认** - 只在需要时使用 JavaScript
2. **组件化** - 支持 React、Vue、Svelte 等多种框架
3. **内容集合** - 强大的内容管理和类型安全
4. **性能优先** - 自动优化图片和静态资源

## 快速开始

```bash
# 创建新项目
npm create astro@latest my-blog

# 选择模板
- Empty
- Minimal
- Blog

# 启动开发服务器
cd my-blog
npm run dev
```

## 添加 Tailwind

```bash
npx astro add tailwind
```

## 项目结构

```
my-blog/
├── src/
│   ├── content/
│   │   └── blog/
│   │       └── your-post.md
│   ├── layouts/
│   ├── components/
│   └── pages/
├── public/
└── astro.config.mjs
```

## 部署到 GitHub Pages

创建 `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist
```

## 总结

Astro 为博客提供了一个高性能、易扩展的基础，是现代静态网站的理想选择。

Happy coding! 🚀

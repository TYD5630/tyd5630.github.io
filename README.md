# TYD Blog 🚀

基于 [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com) 构建的现代化个人博客。

## ✨ 特性

- 🌙 深色/浅色主题切换
- 🔍 全文搜索 (Fuse.js)
- 📰 RSS 订阅
- 🗺️ 网站地图 (SEO)
- 🏷️ 标签分类
- 💬 Giscus 评论
- 📱 响应式设计

## 🛠️ 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 🚀 部署到 GitHub Pages

### 方式一：GitHub Actions (推荐)

1. 创建一个新的 GitHub 仓库 (例如 `blog`)
2. 推送代码到仓库：
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   gh repo create blog --public --source=. --push
   ```
3. 仓库已配置 GitHub Actions，会自动部署

4. 在仓库设置中启用 GitHub Pages：
   - Settings → Pages → Source: GitHub Actions

5. 访问 `https://tyd5630.github.io/blog`

### 方式二：手动部署

```bash
npm run build
# 将 dist 目录内容推送到 gh-pages 分支
npx gh-pages -d dist
```

## 📝 写新文章

在 `src/content/blog/` 目录下创建 `.md` 文件：

```markdown
---
title: '文章标题'
description: '文章描述'
pubDate: 2026-03-12
heroImage: 'https://example.com/image.jpg'
tags: ['标签1', '标签2']
---

# 内容
```

## ⚙️ 配置 Giscus 评论

1. 前往 https://giscus.app
2. 授权并选择你的 GitHub 仓库
3. 获取 `repo-id` 和 `category-id`
4. 修改 `src/layouts/BlogPost.astro` 中的配置

## 📄 许可证

MIT License

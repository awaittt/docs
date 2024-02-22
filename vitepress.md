# 快速开始 {#getting-started}

## 安装 {#installation}

### 前置准备 {#prerequisites}

- [Node.js](https://nodejs.org/) 18 及以上版本。
- 通过命令行界面 (CLI) 访问 VitePress 的终端。
- 支持 [Markdown](https://en.wikipedia.org/wiki/Markdown) 语法的编辑器。
  - 推荐 [VSCode](https://code.visualstudio.com/) 及其[官方 Vue 扩展](https://marketplace.visualstudio.com/items?itemName=Vue.volar)。

VitePress 可以单独使用，也可以安装到现有项目中。在这两种情况下，都可以使用以下方式安装它：

::: code-group

```sh [npm]
$ npm add -D vitepress
```

```sh [pnpm]
$ pnpm add -D vitepress
```

```sh [yarn]
$ yarn add -D vitepress
```

```sh [bun]
$ bun add -D vitepress
```

:::

### 安装向导 {#setup-wizard}

VitePress 附带一个命令行设置向导，可以帮助你构建一个基本项目。安装后，通过运行以下命令启动向导：

::: code-group

```sh [npm]
$ npx vitepress init
```

```sh [pnpm]
$ pnpm vitepress init
```

```sh [bun]
$ bunx vitepress init
```

:::

## 配置自定义index {#custom-index}

```
---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

title: 个人小栈 //站点名称
titleTemplate: 不知名前端攻城狮的随想、学习记录//站点名称

hero:
  name: "个人小栈" //标题配置
  text: "不知名前端攻城狮的随想、学习记录" //概要
  tagline: 搞钱要紧，可以没有爱，不能没有钱 //描述
  actions://操作栏配置
    - theme: brand
      text: 阮一峰的个人网站
      link: https://www.ruanyifeng.com/
    - theme: alt
      text: 文摘
      link: /books/index

  image:
    src: /background.webp
    alt: 背景图片

features: //多个卡片描述
  - title: 好学
    details: 不上班如何赚大钱
  - title: 好人
    details: 没什么野心，只想发财
  - title: 终生学习？
    details: 如果终生学习是唯一的就业出路，对于大多数人来说，那就是没有出路
   
---

```
## 站点配置 {#site-config}

```
import { defineConfig, type DefaultTheme } from "vitepress";
//@ts-ignore
import fs from "fs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/docs/",//部署到giuhub需要指定base
  head: [//站点名称的图标
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/docs/logo.png",
      },
    ],
  ],
  rewrites: { "/docs": "/" },
  title: "个人小栈",
  description: "生活点滴记录文档",
  themeConfig: {
    logo: "/logo.png",
    nav: nav(),//导航栏设置
    sidebar: {导航栏里面的细分内容
      
    },
    socialLinks: [//外部链接
      { icon: "github", link: "https://github.com/awaittt" },
      {
        icon: {
          svg: fs.readFileSync("public/svg/bilibili.svg", "utf8"),
        },
        link: "https://space.bilibili.com/12294760?spm_id_from=333.1007.0.0",
        ariaLabel: "bilibili",
      },
      {
        icon: {
          svg: fs.readFileSync("public/svg/douyin.svg", "utf8"),
        },
        link: "https://www.douyin.com/user/self",
        ariaLabel: "抖音",
      },
    ],
    footer: {//页脚
      copyright: "时遭不遇，只宜安贫守份；心若不欺，必然扬眉吐气。初贫君子，天然骨骼生成；乍富小人，不脱贫寒肌体。",
    },
    outline: {//子页面的导航标题
      label: "页面导航",
    },
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },
    editLink: {
      pattern: "https://www.douyin.com/",
      text: "🐂🍺",
    },
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: "首页", link: "/" },
    {
      text: "前端",
      items: [
        { text: "React", link: "/" },
        { text: "Vue", link: "/" },
        { text: "微信小程序", link: "/" },
        { text: "鸿蒙os", link: "/" },
      ],
    },
    {
      text: "其他",
      items: [
        {
          text: "vitepress",
          link: "/vitepress.md",
        },
      ],
    },
  ];
}

function sidebarVitepressGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "简介",
      collapsed: false,
      items: [
        { text: "什么是 VitePress？", link: "what-is-vitepress" },
        { text: "快速开始", link: "getting-started" },
        { text: "路由", link: "routing" },
        { text: "部署", link: "deploy" },
      ],
    },
    {
      text: "写作",
      collapsed: false,
      items: [
        { text: "Markdown 拓展", link: "markdown" },
        { text: "资源处理", link: "asset-handling" },
        { text: "frontmatter", link: "frontmatter" },
        { text: "在 Markdown 使用 Vue", link: "using-vue" },
        { text: "国际化", link: "i18n" },
      ],
    },
    {
      text: "自定义",
      collapsed: false,
      items: [
        { text: "自定义主题", link: "custom-theme" },
        { text: "拓展默认主题", link: "extending-default-theme" },
        { text: "构建时数据加载", link: "data-loading" },
        { text: "SSR 兼容性", link: "ssr-compat" },
        { text: "连接 CMS", link: "cms" },
      ],
    },
    {
      text: "实验性功能",
      collapsed: false,
      items: [
        { text: "MPA 模式", link: "mpa-mode" },
        { text: "sitemap", link: "sitemap-generation" },
      ],
    },
    {
      text: "配置和 API 参考",
      base: "vitepress/reference/",
      link: "site-config",
    },
  ];
}

function sidebarVitepressReference(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "API 参考",
      collapsed: false,
      items: [
        { text: "vitepress", link: "api/vitepress" },
        { text: "theme", link: "api/theme" },
      ],
    },
  ];
}

```

## 部署到github {#deploy}

### 创建git仓库，添加.gitignore文件

```
node_modules
.DS_Store
dist
dist-ssr
cache
.cache
.temp
*.local
```

### 选择github actions
- setting-》pages-》sorouce-》github-action

![An image](/action.png)

- action->setyour workflow

![An image](/action2.png)

 - 添加deploy.yml文件

```
name: Deploy VitePress site to Pages

on:
  push:
    branches: [main]

# 设置tokenn访问权限
permissions:
  contents: read
  pages: write
  id-token: write

# 只允许同时进行一次部署，跳过正在运行和最新队列之间的运行队列
# 但是，不要取消正在进行的运行，因为我们希望允许这些生产部署完成
concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  # 构建工作
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0 # 如果未启用 lastUpdated，则不需要
      - name: Setup pnpm
        uses: pnpm/action-setup@v2 # 安装pnpm并添加到环境变量
        with:
          version: 8.6.12 # 指定需要的 pnpm 版本
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: pnpm # 设置缓存
      - name: Setup Pages
        uses: actions/configure-pages@v3  # 在工作流程自动配置GithubPages
      - name: Install dependencies
        run: pnpm install # 安装依赖
      - name: Build with VitePress
        run: |
          pnpm run docs:build # 启动项目
          touch .nojekyll  # 通知githubpages不要使用Jekyll处理这个站点，不知道为啥不生效，就手动搞了
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2  # 上传构建产物
        with:
          path: .vitepress/dist # 指定上传的路径，当前是根目录，如果是docs需要加docs/的前缀

  # 部署工作
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }} # 从后续的输出中获取部署后的页面URL
    needs: build    # 在build后面完成
    runs-on: ubuntu-latest  # 运行在最新版本的ubuntu系统上
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment  # 指定id
        uses: actions/deploy-pages@v2 # 将之前的构建产物部署到github pages中

```

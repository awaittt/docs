import { defineConfig, type DefaultTheme } from "vitepress";
//@ts-ignore
import fs from "fs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/docs/",
  head: [
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
  rewrites: { "/docs": "/wirte" },
  title: "个人小栈",
  description: "生活点滴记录文档",
  themeConfig: {
    logo: "/logo.png",
    nav: nav(),
    sidebar: {
      "/decorate/practice/": {
        base: "/decorate/practice/",
        items: decoratePractice(),
      },
      "/decorate/vue/": {
        base: "/decorate/vue/",
        items: decorateVue(),
      },
    },
        socialLinks: [
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
    footer: {
      copyright:
        "时遭不遇，只宜安贫守份；心若不欺，必然扬眉吐气。初贫君子，天然骨骼生成；乍富小人，不脱贫寒肌体。",
    },
    outline: {
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
        // { text: "React", link: "/" },
        { text: "Vue", link: "/decorate/vue/mvvm" },
        // { text: "微信小程序", link: "/" },
        // { text: "鸿蒙os", link: "/" },
        { text: "八股文", link: "/decorate/practice/html" },
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

function decoratePractice(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "简介",
      collapsed: false,
      items: [
        { text: "HTML", link: "HTML" },
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

function decorateVue(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "vue2基础知识",
      collapsed: false,
      items: [
        { text: "mvvm", link: "mvvm" },
      ],
    },
  ];
}

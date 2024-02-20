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
  rewrites: { "/docs": "/write" },
  title: "个人小屋",
  description: "生活点滴记录文档",
  themeConfig: {
    logo: "/logo.png",
    nav: nav(),
    sidebar: {
      
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
      copyright: "烂车才需要备胎，闲人才养鱼",
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

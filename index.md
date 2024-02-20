---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

title: 个人小栈
titleTemplate: 不知名前端攻城狮的随想、学习记录

hero:
  name: "个人小栈"
  text: "不知名前端攻城狮的随想、学习记录"
  tagline: 搞钱要紧，可以没有爱，不能没有钱
  actions:
    - theme: brand
      text: 阮一峰的个人网站
      link: https://www.ruanyifeng.com/
    - theme: alt
      text: 文摘
      link: /books/index

  image:
    src: /background.webp
    alt: 背景图片

features:
  - title: 好学
    details: 不上班如何赚大钱
  - title: 好人
    details: 没什么野心，只想发财
  - title: 终生学习？
    details: 如果终生学习是唯一的就业出路，对于大多数人来说，那就是没有出路
---


<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
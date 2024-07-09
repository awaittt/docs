# 全局变量

如何在 nodejs 定义全局变量呢？
在 nodejs 中使用 global 定义全局变量，定义的变量，可以在引入的文件中也可以访问到该变量，例如 a.js global.xxx = 'xxx' require('xxx.js') xxx.js 也可以访问到该变量，在浏览器中我们定义的全局变量都在 window,nodejs 在 global，不同的环境还需要判断，于是在 ECMAScript 2020 出现了一个 globalThis 全局变量，在 nodejs 环境会自动切换成 global ，浏览器环境自动切换 window 非常方便

## 1.nodejs 内置全局 API

- __dirname
  它表示当前模块的所在目录的绝对路径

- __filename
  它表示当前模块文件的绝对路径，包括文件名和文件扩展名


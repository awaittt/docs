# 模块化

Nodejs 模块化规范遵循两套一 套 CommonJS 规范另一套 esm 规范

## 1.CommonJS 规范

引入模块（require）支持四种格式

支持引入内置模块例如 http os fs child_process 等 nodejs 内置模块
支持引入第三方模块 express md5 koa 等
支持引入自己编写的模块 ./ ../ 等
支持引入 addon C++扩展模块 .node 文件

```js
const fs = require("node:fs"); // 导入核心模块
const express = require("express"); // 导入 node_modules 目录下的模块
const myModule = require("./myModule.js"); // 导入相对路径下的模块
const nodeModule = require("./myModule.node"); // 导入扩展模块
```

## 2.ESM 模块规范

引入模块 import 必须写在头部

注意使用 ESM 模块的时候必须开启一个选项
打开 package.json 设置 type:module

```js
import fs from "node:fs";
```

如果要引入 json 文件需要特殊处理 需要增加断言并且指定类型 json node 低版本不支持

```js
import data from "./data.json" assert { type: "json" };
console.log(data);
```

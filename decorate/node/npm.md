# 2.npm

## 1.初始化包

package.json
npm init -y #默认直接生成

## 2.下载包

- 全局安装 在任意命令行下使用

npm i http-server -g

> 可以在命令中使用
> /usr/local/bin/http-server -> /usr/local/lib/node modules/http-server/bin/http-server/usr/local/bin/hs-> /usr/local/lib/node modules/http-server/bin/http-server
> 我要写一个全局包，npm link 链接,创建快捷方式指向我的文件

```
"bin": {
"lesson-zf":"./bin/www"
"しz" :"./bin/ww"}
```

- 本地安装

npm i http-server

默认不给--save 表示安装到当前的 dependencies 表示是上线和开发的时候都需要 devDependencies 开发依赖上线的时候不需要

## 3.npm install 的时候发生了什么

首先安装的依赖都会存放在根目录的 node_modules,默认采用扁平化的方式安装，并且排序规则.bin 第一个然后@系列，再然后按照首字母排序 abcd 等，并且使用的算法是广度优先遍历，在遍历依赖树时，npm 会首先处理项目根目录下的依赖，然后逐层处理每个依赖包的依赖，直到所有依赖都被处理完毕。在处理每个依赖时，npm 会检查该依赖的版本号是否符合依赖树中其他依赖的版本要求，如果不符合，则会尝试安装适合的版本

## 4.package-lock.json 的作用

很多朋友只知道这个东西可以锁定版本记录依赖树详细信息

version 该参数指定了当前包的版本号
resolved 该参数指定了当前包的下载地址
integrity 用于验证包的完整性
dev 该参数指定了当前包是一个开发依赖包
bin 该参数指定了当前包中可执行文件的路径和名称
engines 该参数指定了当前包所依赖的 Node.js 版本范围

知识点来了，package-lock.json 帮我们做了缓存，他会通过 name + version + integrity 信息生成一个唯一的 key，这个 key 能找到对应的 index-v5 下的缓存记录 也就是 npm cache 文件夹下的
如果发现有缓存记录，就会找到 tar 包的 hash 值，然后将对应的二进制文件解压到 node_modeules

## 5.npm run 原理

按照下面的例子 npm run dev 举例过程中发生了什么

读取 package json 的 scripts 对应的脚本命令(dev:vite),vite 是个可执行脚本，他的查找规则是：

先从当前项目的 node_modules/.bin 去查找可执行命令 vite
如果没找到就去全局的 node_modules 去找可执行命令 vite
如果还没找到就去环境变量查找
再找不到就进行报错

如果成功找到会发现有三个文件

.sh 文件是给 Linux unix Macos 使用
.cmd 给 windows 的 cmd 使用
.ps1 给 windows 的 powerShell 使用

## 6.npm 生命周期

没想到吧 npm 执行命令也有生命周期！！！
json 复制代码 "predev": "node prev.js",
"dev": "node index.js",
"postdev": "node post.js"

执行 npm run dev 命令的时候 predev 会自动执行 他的生命周期是在 dev 之前执行，然后执行 dev 命令，再然后执行 postdev，也就是 dev 之后执行
运用场景例如 npm run build 可以在打包之后删除 dist 目录等等
post 例如你编写完一个工具发布 npm，那就可以在之后写一个 ci 脚本顺便帮你推送到 git 等等

## 7.npx 是什么

npx 是一个命令行工具，它是 npm 5.2.0 版本中新增的功能。它允许用户在不安装全局包的情况下，运行已安装在本地项目中的包或者远程仓库中的包。
npx 的作用是在命令行中运行 node 包中的可执行文件，而不需要全局安装这些包。这可以使开发人员更轻松地管理包的依赖关系，并且可以避免全局污染的问题。它还可以帮助开发人员在项目中使用不同版本的包，而不会出现版本冲突的问题。

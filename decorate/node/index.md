## process 进程 开启很多个线程

Buffer 缓存区 我们 node 读取文件 内存中的数据 都是二进制 数据 16 进制// clearInterval setInterval
clearTimeout setTimeout
clearImmediate setImmediate 宏任务
命令 window 的目录 mac 的目录不一样的 
console.log(process.platform);//window=> win32 mac => 'darwin'
argv 代表用户传递的参数 默认前两个参数 没有实际意义
执行 node node + 文件名执行
只能通过 命令 + 文件名 后面是参数 process.argv.slice(2)
commander 命令行的管家 帮你提供--help，必须先安装
const program = require('commander');
解析用户的参数 默认提供-helpprogram.parse(process.argv)
chdir cwd()current working directory
env 环境变量
nextTicknode 中的微任务

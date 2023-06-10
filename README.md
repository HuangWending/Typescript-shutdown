# Typescript-shutdown
Typescript关机程序
import { exec } from 'child_process';：使用Node.js的child_process模块中的exec函数来执行系统命令。通过这个导入语句，我们可以在TypeScript中使用exec函数来执行关机命令。

function shutdown(): void：定义一个名为shutdown的函数，它没有返回值（void）。

let command: string = '';：声明一个名为command的变量，用于存储关机命令。

const os: string = process.platform;：使用process.platform获取当前操作系统的类型，并将其存储在名为os的常量中。

if (os === 'win32') { ... } else if (os === 'darwin' || os === 'linux') { ... } else { ... }：根据操作系统类型选择相应的关机命令。在Windows上使用shutdown /s /t 0命令，而在macOS和Linux上使用shutdown -h now命令。如果操作系统类型不受支持，则输出不支持的操作系统消息并返回。

exec(command, (error) => { ... });：使用exec函数执行关机命令。该函数接受两个参数：要执行的命令和一个回调函数。回调函数在命令执行完毕后被调用，它接收一个error参数，用于处理执行过程中的错误。

if (error) { ... } else { ... }：根据关机命令执行的结果，在回调函数中处理成功或失败的情况。如果执行过程中出现错误，输出错误消息；否则，输出关机成功的消息。

shutdown();：调用shutdown函数，开始执行关机操作。

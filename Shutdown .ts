import { exec } from 'child_process';

function shutdown(): void {
  let command: string = '';
  const os: string = process.platform;

  if (os === 'win32') {
    command = 'shutdown /s /t 0'; // Windows关机命令
  } else if (os === 'darwin' || os === 'linux') {
    command = 'shutdown -h now'; // macOS和Linux关机命令
  } else {
    console.log('Unsupported operating system.');
    return;
  }

  exec(command, (error) => {
    if (error) {
      console.error(`Shutdown failed with error: ${error.message}`);
    } else {
      console.log('Shutdown successful.');
    }
  });
}

// 调用关机方法
shutdown();

import os from 'os';
import fs from 'fs';
import path from 'path';

const systemInfo = {
    osType: os.type(),
    totalMemory: `${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB`,
    freeMemory: `${(os.freemem() / (1024 ** 3)).toFixed(2)} GB`,
    cpuModel: os.cpus()[0].model,
    cpuCores: os.cpus().length,
    uptime: `${(os.uptime() / 3600).toFixed(2)} hours`
};

console.log("Collected System Info:", systemInfo);

const logData = `System Information:\nOS Type: ${systemInfo.osType}\nTotal Memory: ${systemInfo.totalMemory}\nFree Memory: ${systemInfo.freeMemory}\nCPU Model: ${systemInfo.cpuModel}\nCPU Cores: ${systemInfo.cpuCores}\nSystem Uptime: ${systemInfo.uptime}\n`;

const logDir = path.join(process.cwd(), 'logs');
const logFilePath = path.join(logDir, 'system-info.txt');

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
}

fs.writeFileSync(logFilePath, logData, 'utf8');

console.log(`System information saved to ${logFilePath}`);

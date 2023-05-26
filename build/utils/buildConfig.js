import 'dotenv/config';
import fs from "fs";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
async function buildConfig(devMode = false) {
    console.log('__start__', devMode);
    const args = process.argv.slice(2);
    if (!global.__dirname || !global.__filename) {
        global.__filename = fileURLToPath(import.meta.url);
        global.__dirname = dirname(global.__filename);
    }
    let argsVersion = null;
    args && args.forEach((item) => {
        if (item && item.indexOf('version') == 0) {
            argsVersion = item.slice(8);
        }
    });
    const version = argsVersion || process.env.VERSION || '1';
    const appName = (process.env.GANA) ? "gana" : "most";
    const networkType = (process.env.TESTNET) ? "testnet" : "mainnet";
    const base = (devMode)
        ? global.__dirname + `/../../configs/${appName}/${networkType}/`
        : global.__dirname + `/../configs/${appName}/${networkType}/`;
    let errCount = 0;
    let data;
    let url = base + `assets/a${version}.json`;
    let assetConfig = null;
    try {
        data = await fs.promises.readFile(url);
        assetConfig = JSON.parse(data);
    }
    catch (err) {
        errCount++;
        assetConfig = ':: ERROR with file :: ' + url;
        console.log(':: err :: ', err);
        console.log(':: ERROR with file :: ' + url);
    }
    url = base + `services/s${version}.json`;
    let apiConfig = null;
    try {
        data = await fs.promises.readFile(url);
        apiConfig = JSON.parse(data);
    }
    catch (err) {
        errCount++;
        apiConfig = ':: ERROR with file :: ' + url;
        console.log(':: ERROR with file :: ' + url);
    }
    url = base + `tunein/t${version}.json`;
    let tuneinConfig = null;
    try {
        data = await fs.promises.readFile(url);
        tuneinConfig = JSON.parse(data);
    }
    catch (err) {
        errCount++;
        tuneinConfig = ':: ERROR with file :: ' + url;
        console.log(':: ERROR with file :: ' + url);
    }
    if (errCount == 0) {
        const config = {
            "version": version,
            "tunein": tuneinConfig,
            "api": apiConfig,
            "assets": assetConfig
        };
        data = JSON.stringify(config, null, 2);
        if (devMode) {
            await fs.promises.writeFile(global.__dirname + `/../../configs/v${version}.json`, data);
            await fs.promises.writeFile(global.__dirname + `/../../src/public/configs/v${version}.json`, data);
            await fs.promises.writeFile(global.__dirname + `/../../build/public/configs/v${version}.json`, data);
        }
        else {
            await fs.promises.writeFile(global.__dirname + `/../configs/v${version}.json`, data);
            await fs.promises.writeFile(global.__dirname + `/public/configs/v${version}.json`, data);
        }
    }
    const last = {
        "timestamp": Date.now(),
        "version": version,
        "appName": appName,
        "networkType": networkType,
        "errCount": errCount
    };
    data = JSON.stringify(last, null, 2);
    if (devMode) {
        await fs.promises.writeFile(global.__dirname + `/../../configs/last.json`, data);
        await fs.promises.writeFile(global.__dirname + `/../../src/public/configs/last.json`, data);
        await fs.promises.writeFile(global.__dirname + `/../../build/public/configs/last.json`, data);
    }
    else {
        await fs.promises.writeFile(global.__dirname + `/../configs/last.json`, data);
        await fs.promises.writeFile(global.__dirname + `/public/configs/last.json`, data);
    }
    console.log('__finish__');
}
export { buildConfig };
//# sourceMappingURL=buildConfig.js.map
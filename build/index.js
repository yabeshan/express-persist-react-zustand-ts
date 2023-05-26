import express from "express";
import fs from "fs";
import "dotenv/config";
import { buildConfig } from "./utils/buildConfig.js";
import router from "./routes.js";
import fileDirName from "./utils/file-dir-name.js";
if (!global.__dirname || global.__filename) {
    fileDirName(import.meta);
}
let config = null;
try {
    let data = await fs.promises.readFile(global.__dirname + `/public/configs/last.json`);
    const last = JSON.parse(data.toString());
    const version = last.version;
    data = await fs.promises.readFile(global.__dirname + `/public/configs/v${version}.json`);
    config = JSON.parse(data.toString());
    console.log('_________config res______');
}
catch (err) {
    console.log('_________config err______', err);
    config = undefined;
}
if (!config) {
    await buildConfig();
}
const app = express();
app.use(express.json());
app.use(router);
const port = process.env.PORT || 3000;
const start = async () => {
    try {
        app.listen(port, () => console.log('____start App port____', port));
    }
    catch (err) {
        console.log('____start App error____', err.message);
        process.exit(1);
    }
};
start();
//# sourceMappingURL=index.js.map
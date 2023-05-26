import express, { Router } from "express";
import path from "path";
import fs from "fs";
import { getVersion, versionIncrement, versionDecrement, getConfig, saveConfig, getLogs, } from './controllers/dashboard.js';
import fileDirName from "./utils/file-dir-name.js";
if (!global.__dirname || global.__filename) {
    fileDirName(import.meta);
}
const router = Router();
router.post("/api/config", getConfig);
router.post("/api/logs", getLogs);
if (process.env.ADMIN) {
    router.post("/api/version", getVersion);
    router.post("/api/version/increment", versionIncrement);
    router.post("/api/version/decrement", versionDecrement);
    router.post("/api/config/save", saveConfig);
    const frontendRoutes = ['/', '/dashboard'];
    frontendRoutes.forEach((route) => {
        router.get(route, (_, res) => {
            fs.readFile(global.__dirname + '/index.html', 'utf8', (_, text) => {
                res.send(text);
            });
        });
    });
    router.get('/static', (_, res) => {
        fs.readFile(global.__dirname + '/public/static.html', 'utf8', (_, text) => {
            res.send(text);
        });
    });
    router.get('*', express.static(path.join(global.__dirname, 'public')));
}
export default router;
//# sourceMappingURL=routes.js.map
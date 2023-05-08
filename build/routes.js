import express, { Router } from "express";
import path from "path";
import fs from "fs";
import { getVersion, versionIncrement, versionDecrement, getConfig, saveConfig, getLogs, } from './controllers/dashboard.js';
import fileDirName from './utils/file-dir-name.js';
const { __dirname, __filename } = fileDirName(import.meta);
global.__dirname = __dirname;
global.__filename = __filename;
const router = Router();
router.post("/api/version", getVersion);
router.post("/api/version/increment", versionIncrement);
router.post("/api/version/decrement", versionDecrement);
router.post("/api/config", getConfig);
router.post("/api/config/save", saveConfig);
router.post("/api/logs", getLogs);
const frontendRoutes = ['/', '/dashboard'];
frontendRoutes.forEach((route) => {
    router.get(route, (_, res) => {
        fs.readFile(__dirname + '/index.html', 'utf8', (_, text) => {
            res.send(text);
        });
    });
});
router.get('/static', (_, res) => {
    fs.readFile(__dirname + '/public/static.html', 'utf8', (_, text) => {
        res.send(text);
    });
});
router.get('*', express.static(path.join(__dirname, 'public')));
export default router;
//# sourceMappingURL=routes.js.map
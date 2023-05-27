import express, { Router } from "express";
import path from "path";
import fs from "fs";

import { 
  getVersion, 
  versionIncrement, 
  versionDecrement,
  getConfig,
  getLast,
  saveConfig,
  getLogs,
} from './controllers/dashboard.js'

import fileDirName from "./utils/file-dir-name.js"
if (!global.__dirname || global.__filename) {
  fileDirName(import.meta);
}


const router = Router();

router.post("/api/config", getConfig);
router.post("/api/last", getLast);
router.post("/api/logs", getLogs);



if (process.env.ADMIN) {

  // =========== ADMIN API ============
  router.post("/api/version", getVersion);
  router.post("/api/version/increment", versionIncrement);
  router.post("/api/version/decrement", versionDecrement);
  router.post("/api/config/save", saveConfig);

  // =========== ADMIN DASHBOARD ============
  const frontendRoutes = ['/', '/dashboard']
  frontendRoutes.forEach((route) => {
    router.get(route, (_, res) => {
      fs.readFile(global.__dirname + '/index.html', 'utf8', (_, text) => {
        res.send(text)
      })
    })
  })

  // =========== STATIC ============
  router.get('/static', (_, res) => {
    fs.readFile(global.__dirname + '/public/static.html', 'utf8', (_, text) => {
      res.send(text)
    })
  }) 
  router.get('*', express.static(path.join(global.__dirname, 'public')))
}

export default router;
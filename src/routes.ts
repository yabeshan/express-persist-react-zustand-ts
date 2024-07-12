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

import { 
  getNextVersion, 
  versionNextIncrement, 
  versionNextDecrement,
  getNextConfig,
  getNextLast,
  saveNextConfig,
  getNextLogs,
} from './controllers/dashboardNext.js'

import {
  getSwapConfig,
} from './controllers/dashboardSwap.js'

import fileDirName from "./utils/file-dir-name.js"
if (!global.__dirname || global.__filename) {
  fileDirName(import.meta);
}


const router = Router();

router.post("/api/config", getConfig);
router.post("/api/last", getLast);
router.post("/api/logs", getLogs);

router.post("/api/next/config", getNextConfig);
router.post("/api/next/last", getNextLast);
router.post("/api/next/logs", getNextLogs);

router.get("/api/swap/config", getSwapConfig);
router.post("/api/swap/config", getSwapConfig);

router.get("/configs/swap", (_, res) => {
  fs.readFile(global.__dirname + '/public/configs/swap/config.json', 'utf8', (_, text) => {
    res.send(text) 
  })
}) 


if (process.env.ADMIN) {

  // =========== ADMIN API ============
  router.post("/api/version", getVersion);
  router.post("/api/version/increment", versionIncrement);
  router.post("/api/version/decrement", versionDecrement);
  router.post("/api/config/save", saveConfig);

  router.post("/api/next/version", getNextVersion);
  router.post("/api/next/version/increment", versionNextIncrement);
  router.post("/api/next/version/decrement", versionNextDecrement);
  router.post("/api/next/config/save", saveNextConfig);

  // =========== ADMIN DASHBOARD ============
  const frontendRoutes = ['/', '/dashboard', '/dashboardNext', '/dashboardSwap']
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
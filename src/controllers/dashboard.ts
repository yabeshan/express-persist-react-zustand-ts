import { Response, Request, NextFunction } from "express";
import fs from "fs";

import { 
  getVers, 
  setVers,
  getErrorFlag,
  setErrorFlag,
  incrementVers, 
  decrementVers,
  getAllLogs, 
  addLog,
} from "../db/dashboardDB.js"

export const getVersion = async (
  req: Request, 
  res: Response
) => {
  try {
    const v = await getVers();
    return res.status(200).json({
      "version": v
    });  
  } catch (err: any) {
    console.log('__dirname__err=', err)
    res.status(500).json({
      message: "controllers-api-getVersion error message :: " + err.message
    })
  }
}

export const versionIncrement = async (
  req: Request, 
  res: Response
) => {
  try {
    const v = await incrementVers();
    return res.status(200).json({
      "version": v
    });  
  } catch (err: any) {
    res.status(500).json({
      message: "controllers-api-versionIncrement error message :: " + err.message
    })
  }
}

export const versionDecrement = async (
  req: Request, 
  res: Response
) => {
  try {
    const v = await decrementVers();
    return res.status(200).json({
      "version": v
    });  
  } catch (err: any) {
    res.status(500).json({
      message: "controllers-api-versionDecrement error message :: " + err.message
    })
  }
}

export const getConfig = async (
  req: Request, 
  res: Response
) => {
  try {
    const errorFlag = await getErrorFlag();
    if (errorFlag) {
      addLog(req.body, '404 - not found')
      return res.status(404).send('404 - not found');  
    }

    const v = await getVers();

    if (req.body.version && req.body.version>v) {
      addLog(req.body, 'Update application')
      return res.status(200).json({
        "message":'Update application'
      });  
    }

    if (req.body.version && req.body.version==v) {
      addLog(req.body, 'Correct version')
      return res.status(200).json({});  
    }
    
    const data: any = await fs.promises.readFile(global.__dirname + `/public/configs/v${v}.json`)
    const config = JSON.parse(data);
    // console.log('____getConfig___', v, JSON.stringify(config) )
    if (!req.body.log || req.body.log != 'disabled' ) {
      addLog(req.body, config)
    }
    return res.status(200).json( config );  
  } catch (err: any) {
    res.status(500).json({
      message: "controllers-api-getConfig error message :: " + err.message
    })
  }
}

export const saveConfig = async (
  req: Request, 
  res: Response
) => {
  try {
    const { version, assets, api, errorFlag } = req.body;
    await setVers(version)
    await setErrorFlag(errorFlag)
    // console.log('__start save config__', req.body, version, assets, api )
    let data: any = await fs.promises.readFile(global.__dirname + `/public/configs/assets/a${assets}.json`)
    const assetConfig = JSON.parse(data);
    data = await fs.promises.readFile(global.__dirname + `/public/configs/services/s${api}.json`)
    const apiConfig = JSON.parse(data);
    
    const config = {
      "version": version,
      "assets": assetConfig,
      "api": apiConfig
    }
    data = JSON.stringify(config, null, 2);
    await fs.promises.writeFile(global.__dirname + `/public/configs/v${version}.json`, data)

    if (errorFlag) {
      return res.status(404).send('404 - not found');  
    }
    return res.status(200).json(data); 
  } catch (err: any) {
    console.log('_____save error____', err )
    res.status(500).json({
      message: "controllers-api-saveConfig error message :: " + err.message
    })
  }
}

export const getLogs = async (
  req: Request, 
  res: Response
) => {
  try {
    const l = await getAllLogs();
    return res.status(200).json(l);  
  } catch (err: any) {
    res.status(500).json({
      message: "controllers-api-getConfig error message :: " + err.message
    })
  }
}

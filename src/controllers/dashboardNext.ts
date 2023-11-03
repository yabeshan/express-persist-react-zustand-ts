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
  getFixBuildNumber,
  setFixBuildNumber,
  getStartEnabledAssetsId,
  setStartEnabledAssetsId,
  getForceVisibleAssetsId,
  setForceVisibleAssetsId,
  getForceUnvisibleAssetsId,
  setForceUnvisibleAssetsId,
} from "../db/dashboardNextDB.js"


export const getNextVersion = async (
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

export const versionNextIncrement = async (
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

export const versionNextDecrement = async (
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

export const getNextLast = async (
  req: Request, 
  res: Response
) => {
  try {
    const data: any = await fs.promises.readFile(global.__dirname + `/public/configs/next/mainnet/last.json`)
    const config = JSON.parse(data);
    return res.status(200).json( config );  
  } catch (err: any) {
    res.status(500).json({
      message: "controllers-api-getConfig error message :: " + err.message
    })
  }
}

export const getNextConfig = async (
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

    const data: any = await fs.promises.readFile(global.__dirname + `/public/configs/next/mainnet/v${v}.json`)
    const config = JSON.parse(data);

    const buildNumber = await getFixBuildNumber();
    if (Number(buildNumber)>0) {
      if ( Number(buildNumber) < Number(req.body.buildNumber) ) {
        const startEnabledAssetsId = await getStartEnabledAssetsId()
        const forceVisibleAssetsId = await getForceVisibleAssetsId()
        const forceUnvisibleAssetsId = await getForceUnvisibleAssetsId()

        config.assets.config.startEnabledAssetsId = startEnabledAssetsId;
        config.assets.config.forceVisibleAssetsId = forceVisibleAssetsId;
        config.assets.config.forceUnvisibleAssetsId = forceUnvisibleAssetsId;
            
        return res.status(200).json( config );  
      } else {
        return res.status(200).json({});  
      }
    }

    if (!req.body.log || req.body.log != 'disabled' ) {
      addLog(req.body, config)
    }
    return res.status(200).json( config );  
  } catch (err: any) {
    addLog(req.body, "500 backend error :: " + err.message)
    res.status(500).json({
      message: "controllers-api-getConfig error message :: " + err.message
    })
  }
}

export const saveNextConfig = async (
  req: Request, 
  res: Response
) => {
  try {
    const { 
      version, assets, api, tunein, errorFlag, configFixBuildNumber,
      startEnabledAssetsId, forceVisibleAssetsId, forceUnvisibleAssetsId
    } = req.body;
    await setVers(version)
    await setErrorFlag(errorFlag)
    await setFixBuildNumber(configFixBuildNumber)
    await setStartEnabledAssetsId(startEnabledAssetsId)
    await setForceVisibleAssetsId(forceVisibleAssetsId)
    await setForceUnvisibleAssetsId(forceUnvisibleAssetsId)
    // console.log('__start save config__', req.body, version, assets, api, configFixBuildNumber )
    let data: any = await fs.promises.readFile(global.__dirname + `/public/configs/next/mainnet/assets/a${assets}.json`)
    const assetConfig = JSON.parse(data);
    assetConfig.config.startEnabledAssetsId = startEnabledAssetsId
    assetConfig.config.forceVisibleAssetsId = forceVisibleAssetsId
    assetConfig.config.forceUnvisibleAssetsId = forceUnvisibleAssetsId
    data = await fs.promises.readFile(global.__dirname + `/public/configs/next/mainnet/services/s${api}.json`)
    const apiConfig = JSON.parse(data);
    data = await fs.promises.readFile(global.__dirname + `/public/configs/next/mainnet/tunein/t${tunein}.json`)
    const tuneinConfig = JSON.parse(data);
    
    const config = {
      "version": version,
      "tunein": tuneinConfig,
      "api": apiConfig,
      "assets": assetConfig
    }
    data = JSON.stringify(config, null, 2);
    await fs.promises.writeFile(global.__dirname + `/public/configs/next/mainnet/v${version}.json`, data)

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

export const getNextLogs = async (
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

import fs from "fs";
import { getVers, setVers, getErrorFlag, setErrorFlag, incrementVers, decrementVers, getAllLogs, addLog, } from "../db/dashboardDB.js";
export const getVersion = async (req, res) => {
    try {
        const v = await getVers();
        return res.status(200).json({
            "version": v
        });
    }
    catch (err) {
        console.log('__dirname__err=', err);
        res.status(500).json({
            message: "controllers-api-getVersion error message :: " + err.message
        });
    }
};
export const versionIncrement = async (req, res) => {
    try {
        const v = await incrementVers();
        return res.status(200).json({
            "version": v
        });
    }
    catch (err) {
        res.status(500).json({
            message: "controllers-api-versionIncrement error message :: " + err.message
        });
    }
};
export const versionDecrement = async (req, res) => {
    try {
        const v = await decrementVers();
        return res.status(200).json({
            "version": v
        });
    }
    catch (err) {
        res.status(500).json({
            message: "controllers-api-versionDecrement error message :: " + err.message
        });
    }
};
export const getConfig = async (req, res) => {
    try {
        const errorFlag = await getErrorFlag();
        if (errorFlag) {
            addLog(req.body, '404 - not found');
            return res.status(404).send('404 - not found');
        }
        const v = await getVers();
        if (req.body.version && req.body.version > v) {
            addLog(req.body, 'Update application');
            return res.status(200).json({
                "message": 'Update application'
            });
        }
        if (req.body.version && req.body.version == v) {
            addLog(req.body, 'Correct version');
            return res.status(200).json({});
        }
        const data = await fs.promises.readFile(global.__dirname + `/public/configs/v${v}.json`);
        const config = JSON.parse(data);
        if (!req.body.log || req.body.log != 'disabled') {
            addLog(req.body, config);
        }
        return res.status(200).json(config);
    }
    catch (err) {
        addLog(req.body, "500 backend error :: " + err.message);
        res.status(500).json({
            message: "controllers-api-getConfig error message :: " + err.message
        });
    }
};
export const saveConfig = async (req, res) => {
    try {
        const { version, assets, api, tunein, errorFlag } = req.body;
        await setVers(version);
        await setErrorFlag(errorFlag);
        let data = await fs.promises.readFile(global.__dirname + `/public/configs/assets/a${assets}.json`);
        const assetConfig = JSON.parse(data);
        data = await fs.promises.readFile(global.__dirname + `/public/configs/services/s${api}.json`);
        const apiConfig = JSON.parse(data);
        data = await fs.promises.readFile(global.__dirname + `/public/configs/tunein/t${tunein}.json`);
        const tuneinConfig = JSON.parse(data);
        const config = {
            "version": version,
            "tunein": tuneinConfig,
            "api": apiConfig,
            "assets": assetConfig
        };
        data = JSON.stringify(config, null, 2);
        await fs.promises.writeFile(global.__dirname + `/public/configs/v${version}.json`, data);
        if (errorFlag) {
            return res.status(404).send('404 - not found');
        }
        return res.status(200).json(data);
    }
    catch (err) {
        console.log('_____save error____', err);
        res.status(500).json({
            message: "controllers-api-saveConfig error message :: " + err.message
        });
    }
};
export const getLogs = async (req, res) => {
    try {
        const l = await getAllLogs();
        return res.status(200).json(l);
    }
    catch (err) {
        res.status(500).json({
            message: "controllers-api-getConfig error message :: " + err.message
        });
    }
};
//# sourceMappingURL=dashboard.js.map
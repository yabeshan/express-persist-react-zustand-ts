import storage from 'node-persist';
const MIN_VERSION = Number(process.env.VERSION) || 1;
const MAX_LOGS = 5;
await storage.init();
await storage.setItem('version', MIN_VERSION);
await storage.setItem('logs', []);
await storage.setItem('errorFlag', false);
await storage.setItem('configFixBuildNumber', 0);
await storage.setItem('startEnabledAssetsId', []);
await storage.setItem('forceVisibleAssetsId', []);
await storage.setItem('forceUnvisibleAssetsId', []);
export const getErrorFlag = async () => {
    const flag = await storage.getItem('errorFlag');
    return flag;
};
export const setErrorFlag = async (v) => {
    await storage.setItem('errorFlag', v);
    return v;
};
export const getVers = async () => {
    const version = await storage.getItem('version');
    return version;
};
export const setVers = async (v) => {
    await storage.setItem('version', v);
    return v;
};
export const incrementVers = async () => {
    let version = await storage.getItem('version');
    const val = Number(version) + 1;
    await storage.setItem('version', val);
    return await storage.getItem('version');
};
export const decrementVers = async () => {
    let version = await storage.getItem('version');
    const val = Number(version) - 1;
    await storage.setItem('version', (val < MIN_VERSION) ? MIN_VERSION : val);
    return await storage.getItem('version');
};
export const getAllLogs = async () => {
    const logs = await storage.getItem('logs');
    return logs;
};
export const addLog = async (req, res) => {
    let logs = await storage.getItem('logs');
    logs.unshift({
        time: Date.now(),
        req: req,
        res: res
    });
    if (logs.length > MAX_LOGS) {
        logs.pop();
    }
    await storage.setItem('logs', logs);
};
export const getFixBuildNumber = async () => {
    const build = await storage.getItem('configFixBuildNumber');
    return build;
};
export const setFixBuildNumber = async (v) => {
    await storage.setItem('configFixBuildNumber', v);
    return v;
};
export const getStartEnabledAssetsId = async () => {
    const build = await storage.getItem('startEnabledAssetsId');
    return build;
};
export const setStartEnabledAssetsId = async (v) => {
    await storage.setItem('startEnabledAssetsId', v);
    return v;
};
export const getForceVisibleAssetsId = async () => {
    const build = await storage.getItem('forceVisibleAssetsId');
    return build;
};
export const setForceVisibleAssetsId = async (v) => {
    await storage.setItem('forceVisibleAssetsId', v);
    return v;
};
export const getForceUnvisibleAssetsId = async () => {
    const build = await storage.getItem('forceUnvisibleAssetsId');
    return build;
};
export const setForceUnvisibleAssetsId = async (v) => {
    await storage.setItem('forceUnvisibleAssetsId', v);
    return v;
};
//# sourceMappingURL=dashboardNextDB.js.map
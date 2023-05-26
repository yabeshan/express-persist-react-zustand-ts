import storage from 'node-persist';

const MIN_VERSION = Number(process.env.VERSION) || 1;
const MAX_LOGS = 5;

await storage.init();
await storage.setItem('version', MIN_VERSION)
await storage.setItem('logs', [])
await storage.setItem('errorFlag', false)

export const getErrorFlag = async () => {
  const flag = await storage.getItem('errorFlag')
  return flag
}

export const setErrorFlag = async (v: any) => {
  await storage.setItem('errorFlag', v)
  return v
}

export const getVers = async () => {
  const version = await storage.getItem('version')
  return version
}

export const setVers = async (v: any) => {
  await storage.setItem('version', v)
  return v
}

export const incrementVers = async () => {
  let version = await storage.getItem('version')
  const val = Number(version) + 1;
  await storage.setItem('version', val)
  return await storage.getItem('version')
}

export const decrementVers = async () => {
  let version = await storage.getItem('version')
  const val = Number(version) - 1;
  await storage.setItem('version', (val < MIN_VERSION) ? MIN_VERSION : val)
  return await storage.getItem('version')
}

export const getAllLogs = async () => {
  const logs = await storage.getItem('logs')
  return logs
}

export const addLog = async (req: any, res: any) => {
  let logs = await storage.getItem('logs')
  logs.unshift({
    time: Date.now(),
    req: req,
    res: res
  })
  if (logs.length>MAX_LOGS) {
    logs.pop()
  }
  await storage.setItem('logs', logs)
}
import axios from 'axios'
import { create } from 'zustand'

type TAppStore = {
  version: string
  logs: []
  config: string
  configAssetSelected: number
  configApiSelected: number
  configTuneinSelected: number
  configErrorFlag: boolean
  configFixBuildNumber: number
  startEnabledAssetsId: any
  forceVisibleAssetsId: any
  forceUnvisibleAssetsId: any

  init(): void
  getVersion(): void
  incrementVers(): void
  decrementVers(): void
  getLogs(): void
  getConfig(): void
  saveConfig(): void
  updateAsset(data: any): void
  updateApi(data: any): void
  updateTunein(data: any): void
  updateErrorFlag(data: any): void
  updateFixBuildNumber(data: any): void
  updateStartEnabledAssetsId(data: any): void
  updateForceVisibleAssetsId(data: any): void
  updateForceUnvisibleAssetsId(data: any): void
}

export const appStore = create<TAppStore>((set, get) => ({
  version: '0',
  logs: [],
  config: 'config',
  configAssetSelected: 1,
  configApiSelected: 1,
  configTuneinSelected: 1,
  configErrorFlag: false,
  configFixBuildNumber: 0,
  startEnabledAssetsId: [],
  forceVisibleAssetsId: [],
  forceUnvisibleAssetsId: [],

  init: async () => {
    get().getVersion()
    get().getLogs()
    get().getConfig()
  },
  
  getVersion: async () => {
    try {
      const res = await axios.post('/api/next/version')
      console.log('___store api/next/version res___', res.data )
      set({ 
        version: res.data.version
      })
    } catch (err) {
      set({ 
        version: 'error'
      })
    }
  },

  incrementVers: async () => {
    try {
      const res = await axios.post('/api/next/version/increment')
      console.log('___store next incrementVers/increment res___', res.data )
      set({ 
        version: res.data.version
      })
    } catch (err) {
      set({ 
        version: 'error'
      })
    }
  },

  decrementVers: async () => {
    try {
      const res = await axios.post('/api/next/version/decrement')
      console.log('___store next/ api/version/decrement res___', res.data )
      set({ 
        version: res.data.version
      })
    } catch (err) {
      set({ 
        version: 'error'
      })
    }
  },

  getLogs: async () => {
    try {
      const res = await axios.post('/api/next/logs')
      console.log('___store api/next/logs res___', res.data )
      set({ 
        logs: res.data
      })
    } catch (err) {}
  },

  getConfig: async () => {
    try {
      const config = {
        "log": "disabled"
      }
      const res = await axios.post('/api/next/config', config)
      console.log('___store next/ api/getConfig res___', res.data )
      set({ 
        config: JSON.stringify(res.data) 
      })
    } catch (err) {}
  },

  saveConfig: async () => {
    try {
      const config = {
        "version": get().version,
        "assets": get().configAssetSelected,
        "api": get().configApiSelected,
        "tunein": get().configTuneinSelected,
        "errorFlag": get().configErrorFlag,
        "configFixBuildNumber": get().configFixBuildNumber,
        "startEnabledAssetsId": get().startEnabledAssetsId,
        "forceVisibleAssetsId": get().forceVisibleAssetsId,
        "forceUnvisibleAssetsId": get().forceUnvisibleAssetsId,
      }
      const res = await axios.post('/api/next/config/save', config)
      console.log('___store next/ api/saveConfig res___', res.data, res )
      set({ 
        config: (res.status==200) ? res.data : "error"
      })
    } catch (err) {
      set({ 
        config: "error"
      })
    }
  },

  updateAsset: (data) => {
    set({ 
      configAssetSelected: data.target.value
    })
  },

  updateApi: (data) => {
    set({ 
      configApiSelected: data.target.value
    })
  },

  updateTunein: (data) => {
    set({ 
      configTuneinSelected: data.target.value
    })
  },

  updateErrorFlag: (data) => {
    set({ 
      configErrorFlag: data.target.value==2
    })
  },

  updateFixBuildNumber: (data) => {
    set({
      configFixBuildNumber: data.target.value
    })
  },

  updateStartEnabledAssetsId: (data) => {
    set({
      startEnabledAssetsId: data.target.value==0 ? [] : ['bitcoin', 'binancecoin', 'mgpbsc', 'most-global', 'amper', 'usdc-bsc', 'tether', 'binance-usd', 'pancakeswap-token', 'dai', 'ethereum', 'tron', 'tether-trc20' ]
    })
  },

  updateForceVisibleAssetsId: (data) => {
    set({
      forceVisibleAssetsId: data.target.value==0 ? [] : ['mgpbsc']
    })
  },

  updateForceUnvisibleAssetsId: (data) => {
    set({
      forceUnvisibleAssetsId: data.target.value==0 ? [] : ['mgpbsc']
    })
  }

}))

export default appStore
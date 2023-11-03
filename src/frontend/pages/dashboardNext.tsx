import React, { useEffect } from "react";

import appStore from '../stores/appNextStore'

export default function Page() {
  const store = appStore()
  let timer: any = {}
  
  useEffect(() => {
    store.getLogs()
    timer = setInterval(()=>{
      store.getLogs() 
    }, 2000)
    
    return ()=>{
      clearInterval( timer )
    }
  }, [])

  return <div>
    <h1>App :: Dashboard NEXT page</h1>
    <div style={{backgroundColor:'#CCCCCC', padding:10, float:"left", width: '30%', minHeight:500}}>
      <h3>Config</h3>
      <div style={{padding:5}}>
        <b>version = &nbsp; </b>
        <button onClick={store.decrementVers}>-</button> &nbsp; 
        {store.version} &nbsp; 
        <button onClick={store.incrementVers}>+</button> &nbsp; 
      </div>
      <div onChange={store.updateFixBuildNumber} style={{padding:5}}>
        <b>Minimal build number = &nbsp;</b>
        <label>
          <input type="radio" value="0" name="buildNumber" defaultChecked /> 0
        </label>
        <label>
          <input type="radio" value="555" name="buildNumber" /> 555
        </label>
      </div>

      <div onChange={store.updateStartEnabledAssetsId} style={{padding:5}}>
        <b>startEnabledAssetsId = &nbsp;</b>
        <label>
          <input type="radio" value="0" name="StartEnabledAssetsId" defaultChecked /> []
        </label>
        <label>
          <input type="radio" value="1" name="StartEnabledAssetsId" /> MGP
        </label>
      </div>
      <div onChange={store.updateForceVisibleAssetsId} style={{padding:5}}>
        <b>forceVisibleAssetsId  = &nbsp;</b>
        <label>
          <input type="radio" value="0" name="ForceVisibleAssetsId" defaultChecked /> []
        </label>
        <label>
          <input type="radio" value="1" name="ForceVisibleAssetsId" /> MGP
        </label>
      </div>
      <div onChange={store.updateForceUnvisibleAssetsId} style={{padding:5}}>
        <b>forceUnvisibleAssetsId = &nbsp;</b>
        <label>
          <input type="radio" value="0" name="ForceUnvisibleAssetsId" defaultChecked /> []
        </label>
        <label>
          <input type="radio" value="1" name="ForceUnvisibleAssetsId" /> MGP
        </label>
      </div>

      {/* <div onChange={store.updateAsset} style={{padding:5}}>
        <b>Assets = &nbsp;</b>
        <label>
          <input type="radio" value="1" name="assets" defaultChecked /> all asset testnet (27)
        </label>
        <label>
          <input type="radio" value="2" name="assets" /> ETH asset testnet (6)
        </label>
      </div> */}
      {/* <div onChange={store.updateApi} style={{padding:5}}>
        <b>API = &nbsp;</b>
        <label>
          <input type="radio" value="1" name="api" defaultChecked /> api ETH goerli
        </label>
        <label>
          <input type="radio" value="2" name="api" /> api ETH sepolia
        </label>
      </div> */}
      <div onChange={store.updateTunein} style={{padding:5}}>
        <b>API = &nbsp;</b>
        <label>
          <input type="radio" value="1" name="tunein" defaultChecked /> 2 tabs
        </label>
        <label>
          <input type="radio" value="2" name="tunein" /> 3 tabs (add notificationTab)
        </label>
      </div>
      <div onChange={store.updateErrorFlag} style={{padding:5}}>
        <b>errorFlag = &nbsp;</b>
        <label>
          <input type="radio" value="1" name="errorFlag" defaultChecked /> false
        </label>
        <label>
          <input type="radio" value="2" name="errorFlag" /> true
        </label>
      </div>
      <button onClick={store.saveConfig}>Save config</button>
      <p>{store.config}</p>
    </div>

    <div style={{margin:10, backgroundColor:'#FFCCCC'}}>
      <h3>LOGS ( {store.logs.length} )</h3>
      <div>
        {store.logs.map(({time, req, res}, id) => {
          return (
            <div key={'key-log-'+ id }> 
              <div>{ new Date(time).toLocaleString("en-US") }</div>
              <div><b>&gt;&gt;&gt; </b>{ JSON.stringify(req) }</div>
              <div><b>&lt;&lt;&lt; </b>{ JSON.stringify(res) }</div>
              <div style={{marginTop:5, height:2, width:'100%', backgroundColor:'#666666'}}></div>
            </div>
          )
        } )}
      </div>
    </div>
    
  </div>;
}
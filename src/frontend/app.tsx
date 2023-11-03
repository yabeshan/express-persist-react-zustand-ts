import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import Dashboard from './pages/dashboard'
import DashboardNext from './pages/dashboardNext'
import appStore from './stores/appStore'
import appNextStore from './stores/appNextStore'

function App() {
  const store = appStore()
  const storeNext = appNextStore()

  useEffect(() => {
    store.init()
    storeNext.init()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboardNext" element={<DashboardNext />} />
      </Routes>
    </BrowserRouter>
  )
}

const rootNode = document.getElementById('app')

if (rootNode) {
  const root = ReactDOM.createRoot(rootNode)
  root.render(<App />)
}
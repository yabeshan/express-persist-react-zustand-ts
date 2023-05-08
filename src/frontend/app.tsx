import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import Dashboard from './pages/dashboard'
import appStore from './stores/appStore'

function App() {
  const store = appStore()

  useEffect(() => {
    store.init()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

const rootNode = document.getElementById('app')

if (rootNode) {
  const root = ReactDOM.createRoot(rootNode)
  root.render(<App />)
}
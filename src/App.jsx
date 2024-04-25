import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from './Components/index.js'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, [])


  return (
    <div className={`app-container ${loading ? 'loading' : ''}`}>
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    </div>
  )
}

export default App


import React from 'react'
import { Routes, Route, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import BeaFitPage from './pages/Beanfit.jsx'
import ProffePage from './pages/Proffe.jsx'

function BrandNav() {
  return (
    <nav className="brand-switcher">
      <div className="switcher-inner">
        <span className="switcher-label">Select Brand</span>
        <div className="switcher-tabs">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'tab-btn active' : 'tab-btn'}>
            <span className="tab-dot beanfit-dot" />
            The Beanfit
          </NavLink>
          <NavLink to="/proffe" className={({ isActive }) => isActive ? 'tab-btn active' : 'tab-btn'}>
            <span className="tab-dot proffe-dot" />
            PROFFE
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default function App() {
  const location = useLocation()
  return (
    <>
      <BrandNav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<BeaFitPage />} />
          <Route path="/proffe" element={<ProffePage />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

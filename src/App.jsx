import React from 'react'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Houses from './components/Houses/Houses'
import Header from './components/Header/Header'
import './App.css'

export default function App() {
  return (
    <div className='App'>
      <Header />
     <About />
      <Houses />
      <Footer />
    </div>
  )
}

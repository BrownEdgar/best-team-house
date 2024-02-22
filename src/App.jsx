import './App.css'
import Houses from './components/Houses/Houses'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Sliders from './components/Sliders'

export default function App() {
  return (
    <div className='App'>
      <Header />
      <About />
      <Houses />
      <Sliders />
      <Footer />

    </div>
  )
}

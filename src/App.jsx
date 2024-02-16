import './App.css'
import Houses from './components/Houses/Houses'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import About from './components/About/About'

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

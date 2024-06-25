// import { useState } from 'react'
import './App.css'
import About from './components/about/about'
import Details from './components/details/details'
import Experiences from './components/experiences/experiences'
import Footer from './components/footer/footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Details/>
      <About/>
      <Experiences/>
      <Footer/>
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import NavBar from './assets/components/navbar/navbar'
import Banner from './assets/components/banner/banner'
import Skills from './assets/components/skills/skills'
import Projects from './assets/components/projects/projects'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
    </div>
  )
}

export default App

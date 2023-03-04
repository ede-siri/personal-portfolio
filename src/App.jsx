import { useState } from 'react'
import './App.css'
import NavBar from './assets/components/navbar/navbar'
import Banner from './assets/components/banner/banner'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar/>
      <Banner/>
    </div>
  )
}

export default App

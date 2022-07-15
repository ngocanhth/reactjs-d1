import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import MainRoutes from './Routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Header/>
        <MainRoutes/>
    </div>
  )
}

export default App

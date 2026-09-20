import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Headeṛ, Sidebar, Footer } from './components/5.5 - Xuất và nhập component theo tên'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>chào mừng bạn đén vói react</h1>
      < Headeṛ />
      < Sidebar />
      < Footer />
    </>

  )
}

export default App

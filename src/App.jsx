import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
// import './App.css'
import './components/Userprofile.css'
import { Headeṛ, Sidebar, Footer } from './components/5.5 - Xuất và nhập component theo tên'
import { Userprofile } from './components/5.6 - 3 quy tắc tạo giao diện trong component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>react</h3>
      <Userprofile />
    </>

  )
}

export default App

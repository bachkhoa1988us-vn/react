import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
// import './App.css'
import './components/Userprofile.css'
import { Headeṛ, Sidebar, Footer } from './components/5.5 - Xuất và nhập component theo tên'
// import { Userprofile } from './components/5.6 - 3 quy tắc tạo giao diện trong component'
import { Userprofiles } from './components/5.7 - Đổ dữ liệu động vào components'
import { Child } from './components/child'

function App() {
  // const [count, setCount] = useState(0)
  const userprofile = { name: "khoa", birthday: "2001", state: "florida" }
  return (
    <>

      < Child user={userprofile} />
    </>

  )
}

export default App

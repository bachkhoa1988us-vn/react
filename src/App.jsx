import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
function Welcome() {
  //tham so
  return (
    <>
      <h3>jacksonville</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus autem quasi quo! Cupiditate vero sunt vitae non totam quod dolor rem ad quaerat, laboriosam eligendi eaque. Nesciunt, quo? Sequi, nihil?</p>
    </>
  )
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>chào mừng bạn đén vói react</h1>
      <Welcome />
    </>
  )
}

export default App

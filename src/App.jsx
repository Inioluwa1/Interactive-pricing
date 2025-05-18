import { useState } from 'react'
import './App.css'
import MainPage from '../Pages/MainPage'
import BorderPage from '../Pages/BorderPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BorderPage />
      <MainPage />
    </div>
  )
}

export default App

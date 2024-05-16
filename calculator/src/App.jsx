import { useState } from 'react'
import './App.css'
import ButtonSection from './components/Buttons'
import View from './components/view'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <View value='123456789000' result={true} />
      <ButtonSection/>
    </>
  )
}

export default App

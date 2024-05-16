import { useState } from 'react'
import './App.css'
import ButtonSection from './components/Buttons'
import View from './components/view'

function App() {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState(false)
  const [calculate, setCalculate] = useState('');

  const handleEqualClick = () => {
      setResult(true)
      try {
          setDisplay(eval(calculate)); // eval is used here for simplicity, be cautious using it in production
      } catch (error) {
          setResult('Error');
      }
  };

  const handleNumberClick = (number) => {
      let negative = ''
      if (number === '⁺/₋') {
          if (actualDisplay[0] !== '-') {
              negative = '-'
          }
          number = ''
      }
      setDisplay(prevDisplay => negative + prevDisplay + number)
    };
  
    const handleOperatorClick = (operator) => {
      if (operator === '=') {
          handleEqualClick()
      } else {
          setDisplay('');
          setCalculate(actualDisplay + ' ' + operator + ' ');
      }
    };


  return (
    <>
      <View value= {display} result={result} />
      <ButtonSection handleNumberClick={handleNumberClick} handleOperatorClick={handleOperatorClick}/>
    </>
  )
}

export default App

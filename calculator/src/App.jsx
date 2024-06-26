import { useState, useEffect } from 'react'
import './App.css'
import ButtonSection from './components/Buttons'
import View from './components/view'

function App() {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState(false)
  const [complete, setComplete] = useState(false)
  const [calculate, setCalculate] = useState('');

  useEffect(() => {
    if (result) {
      handleEqualClick();
    }
  }, [result && complete]);

  const handleEqualClick = () => {
      try {
        const result = eval(calculate);
        setDisplay(result.toString());
        setCalculate(result.toString())
        console.log(calculate)
      } catch (error) {
          setDisplay('1000000000')
      }
      setComplete(false)
  };

  const handleNumberClick = (number) => {
      let negative = ''
      if (number === '⁺/₋') {
          if (display[0] !== '-') {
              negative = '-'
          }
          number = ''
      } else if (number === '.' && display.includes('.')){
        number = ''
      }
      setDisplay(prevDisplay => negative + prevDisplay + number)
  };

  const handleOperatorClick = (operator) => {      
    if (calculate === '') {
      setCalculate(prevCalculate => prevCalculate + display)  
    }
    if (operator === '=') {
      setCalculate(prevCalculate => prevCalculate + display)
      setResult(true)
      setComplete(true)
    } else {
        setCalculate(prevCalculate => prevCalculate + ' ' + operator + ' ');
        setDisplay('');
        
    }
  };

  const handleDelete = () => {
    setDisplay('');
    setCalculate('')
    setResult(false)
  }


  return (
    <div className='container'>
      <View value= {display} result={result} />
      <ButtonSection handleNumberClick={handleNumberClick} handleOperatorClick={handleOperatorClick}/>
      <button className='deleteButton' onClick={() => handleDelete()}>ERASE ALL</button>
    </div>
  )
}

export default App

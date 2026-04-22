import { useState } from 'react'
import { BotonCalcular } from './components/BotonCalcular';   


function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  return (
    <div className="container">
      <h1>Calculadora </h1>
      
      <div className="input-group">
        <input 
          type="number" 
          placeholder="Número 1" 
          value={num1}
          onChange={(e) => setNum1(e.target.value)} 
        />
        
        <input 
          type="number" 
          placeholder="Número 2" 
          value={num2}
          onChange={(e) => setNum2(e.target.value)} 
        />
      </div>

      <BotonCalcular n1={num1} n2={num2} />
    </div>
  )
}

export default App
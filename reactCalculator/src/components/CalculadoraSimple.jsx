import { useState } from 'react';

function CalculadoraSimple() {
  const [n1, setN1] = useState('');
  const [n2, setN2] = useState('');
  const [res, setRes] = useState('');


  return (
    <div>
      <h2>Calculadora Simple</h2>
      
      <input type="number" value={n1} onChange={(e) => setN1(e.target.value)} placeholder="Número 1" />
      <input type="number" value={n2} onChange={(e) => setN2(e.target.value)} placeholder="Número 2" />
      
      <br /><br />

      <button onClick={() => setRes(Number(n1) + Number(n2))}>Sumar (+)</button>
      

      <h3>Resultado: {res}</h3>
    </div>
  );
}

export default CalculadoraSimple;
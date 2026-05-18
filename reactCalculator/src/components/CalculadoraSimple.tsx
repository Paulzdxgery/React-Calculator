import { useState } from 'react';

type Operacion = 'sumar' | 'restar' | 'multiplicar' | 'dividir';

function CalculadoraSimple() {
  const [n1, setN1] = useState<string>('');
  const [n2, setN2] = useState<string>('');
  const [res, setRes] = useState<string | number>('');

  const calcular = (operacion: Operacion) => {
    if (n1 === '' || n2 === '') {
      setRes('Ingresa ambos números');
      return;
    }

    const num1 = Number(n1);
    const num2 = Number(n2);

    switch (operacion) {
      case 'sumar': setRes(num1 + num2); break;
      case 'restar': setRes(num1 - num2); break;
      case 'multiplicar': setRes(num1 * num2); break;
      case 'dividir':
        if (num2 === 0) setRes('Error: División por cero');
        else setRes(num1 / num2);
        break;
    }
  };

  return (
    <div>
      <h2>Calculadora Simple</h2>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '20px' }}>
        <input type="number" value={n1} onChange={(e) => setN1(e.target.value)} placeholder="Número 1" />
        <input type="number" value={n2} onChange={(e) => setN2(e.target.value)} placeholder="Número 2" />
      </div>
      
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button onClick={() => calcular('sumar')}>Sumar (+)</button>
        <button onClick={() => calcular('restar')}>Restar (-)</button>
        <button onClick={() => calcular('multiplicar')}>Multiplicar (*)</button>
        <button onClick={() => calcular('dividir')}>Dividir (/)</button>
      </div>

      <h3>Resultado: {res}</h3>
    </div>
  );
}

export default CalculadoraSimple;
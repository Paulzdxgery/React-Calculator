import { useState } from 'react';

function CalculadoraCompleta() {
  const [pantalla, setPantalla] = useState<string>('');

  const presionar = (valor: string) => {
    setPantalla((prev) => prev + valor);
  };

  const calcular = () => {
    try {
      // Validación estricta para evitar inyección de código
      if (/^[0-9+\-*/.]+$/.test(pantalla)) {
        const resultado = new Function('return ' + pantalla)();
        setPantalla(String(resultado));
      } else {
        setPantalla('Error');
      }
    } catch (error) {
      setPantalla('Error');
    }
  };

  const limpiar = () => setPantalla('');

  const botones = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
  ];

  return (
    <div>
      <h2>Calculadora Completa</h2>
      <input 
        type="text" 
        value={pantalla} 
        readOnly 
        style={{ fontSize: '24px', marginBottom: '10px', width: '200px', textAlign: 'right' }} 
      />
      <br />
      
      {/* Sugerencia: En tu CSS, convierte este contenedor en un display: grid; grid-template-columns: repeat(4, 1fr); */}
      <div style={{ display: 'inline-block', maxWidth: '220px' }}>
        {botones.map((btn) => (
          <button 
            key={btn} 
            onClick={() => btn === '=' ? calcular() : presionar(btn)}
            style={{ padding: '15px', margin: '2px', width: '45px' }}
          >
            {btn}
          </button>
        ))}
      </div>
      
      <br /><br />
      <button onClick={limpiar}>Borrar Todo</button>
    </div>
  );
}

export default CalculadoraCompleta;
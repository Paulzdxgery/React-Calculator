import { useState } from 'react';

function CalculadoraCompleta() {
  const [pantalla, setPantalla] = useState('');

  // Función para ir agregando números o símbolos a la pantalla
  const presionar = (valor) => {
    setPantalla(pantalla + valor);
  };

  // Función que resuelve la operación escrita
  const calcular = () => {
    try {
      setPantalla(eval(pantalla).toString());
    } catch (error) {
      setPantalla('Error');
    }
  };

  const limpiar = () => {
    setPantalla('');
  };

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

      {/* Fila 1 */}
      <button onClick={() => presionar('7')} style={{ padding: '15px' }}>7</button>
      <button onClick={() => presionar('8')} style={{ padding: '15px' }}>8</button>
      <button onClick={() => presionar('9')} style={{ padding: '15px' }}>9</button>
      <button onClick={() => presionar('/')} style={{ padding: '15px' }}>/</button>
      <br />

      {/* Fila 2 */}
      <button onClick={() => presionar('4')} style={{ padding: '15px' }}>4</button>
      <button onClick={() => presionar('5')} style={{ padding: '15px' }}>5</button>
      <button onClick={() => presionar('6')} style={{ padding: '15px' }}>6</button>
      <button onClick={() => presionar('*')} style={{ padding: '15px' }}>*</button>
      <br />

      {/* Fila 3 */}
      <button onClick={() => presionar('1')} style={{ padding: '15px' }}>1</button>
      <button onClick={() => presionar('2')} style={{ padding: '15px' }}>2</button>
      <button onClick={() => presionar('3')} style={{ padding: '15px' }}>3</button>
      <button onClick={() => presionar('-')} style={{ padding: '15px' }}>-</button>
      <br />

      {/* Fila 4 */}
      <button onClick={() => presionar('0')} style={{ padding: '15px' }}>0</button>
      <button onClick={() => presionar('.')} style={{ padding: '15px' }}>.</button>
      <button onClick={calcular} style={{ padding: '15px', backgroundColor: '#add8e6' }}>=</button>
      <button onClick={() => presionar('+')} style={{ padding: '15px' }}>+</button>
      <br /><br />

      {/* Botón de borrado general */}
      <button onClick={limpiar}>Borrar Todo</button>
    </div>
  );
}

export default CalculadoraCompleta;
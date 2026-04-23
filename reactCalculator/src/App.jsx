import { useState } from 'react';
import CalculadoraSimple from './components/CalculadoraSimple';
import CalculadoraCompleta from './components/CalculadoraCompleta';

function App() {
  const [seccion, setSeccion] = useState('home');

  const irAlInicio = () => setSeccion('home');
  const irASimple = () => setSeccion('simple');
  const irACompleta = () => setSeccion('completa');

  return (
    <div>
      <h1>Mi Proyecto React</h1>
      <hr />

      {/* RENDERIZADO DEL MENÚ  */}
      {seccion === 'home' && (
        <div>
          <h2>Menú Principal</h2>
          <p>Elige qué calculadora quieres usar:</p>
          <button onClick={irASimple}>
            Calculadora Simple 
          </button>
          <button onClick={irACompleta}>
            Calculadora Completa 
          </button>
        </div>
      )}

      {/* RENDERIZADO DEL BOTÓN VOLVER */}
      {seccion !== 'home' && (
        <div>
          <button onClick={irAlInicio}>
            ⬅ Volver al Menú
          </button>
        </div>
      )}

      {/* RENDERIZADO DE LOS COMPONENTES (Las pantallas) */}
      {seccion === 'simple' && <CalculadoraSimple />}
      {seccion === 'completa' && <CalculadoraCompleta />}
    </div>
  );
}

export default App;
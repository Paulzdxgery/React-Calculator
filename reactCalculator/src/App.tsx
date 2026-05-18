import { useState } from 'react';
import './App.css';
import { TipoSeccion } from './types';

// Importación de Componentes
import Navbar from './components/NavBar';
import HomeMenu from './components/HomeMenu';
import CalculadoraSimple from './components/CalculadoraSimple';
import CalculadoraCompleta from './components/CalculadoraCompleta';
import Buscador from './components/Buscador';

function App() {
  const [seccion, setSeccion] = useState<TipoSeccion>('home');

  return (
    <div className="app-container">
      <Navbar seccionActual={seccion} cambiarSeccion={setSeccion} />

      <main style={{ flex: 1 }}>
        {seccion === 'home' && <HomeMenu cambiarSeccion={setSeccion} />}
        
        {seccion === 'simple' && (
          <div className="home-hero">
            <CalculadoraSimple />
          </div>
        )}
        
        {seccion === 'completa' && (
          <div className="home-hero">
            <CalculadoraCompleta />
          </div>
        )}
        
        {seccion === 'buscador' && (
          <div className="home-hero">
            <Buscador />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
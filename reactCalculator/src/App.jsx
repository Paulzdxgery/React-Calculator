import { useState } from 'react';
import './App.css';
import CalculadoraSimple from './components/CalculadoraSimple';
import CalculadoraCompleta from './components/CalculadoraCompleta';
import Buscador from './components/Buscador';

function App() {
  const [seccion, setSeccion] = useState('home');

  // Funciones de navegación
  const irAlInicio = () => setSeccion('home');
  const irASimple = () => setSeccion('simple');
  const irACompleta = () => setSeccion('completa');
  const irABuscador = () => setSeccion('buscador');

  return (
    <div className="app-container">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo" onClick={irAlInicio} style={{cursor: 'pointer', fontWeight: 800, color: '#ff6b6b'}}>
          Gourmet Suite
        </div>
        <div className="nav-links">
          <button className={`nav-btn ${seccion === 'home' ? 'active' : ''}`} onClick={irAlInicio}>Inicio</button>
        </div>
      </nav>

      <main style={{flex: 1}}>
        
        {/* MENÚ PRINCIPAL DE TARJETAS */}
        {seccion === 'home' && (
          <div className="home-container">
            <h1 className="home-title">Gourmet Suite – Menú Principal</h1>
            <p className="home-subtitle">Selecciona una herramienta culinaria o de gestión:</p>

            <div className="menu-grid">
              
              {/* Tarjeta 1: Calculadora Simple */}
              <div className="menu-card card-simple" onClick={irASimple}>
                <span className="card-icon">➕</span>
                <span className="card-title">Calculadora Simple</span>
              </div>

              {/* Tarjeta 2: Calculadora Completa */}
              <div className="menu-card card-completa" onClick={irACompleta}>
                <span className="card-icon">🔢</span>
                <span className="card-title">Calculadora Completa</span>
              </div>

              {/* Tarjeta 3: Buscador de Recetas */}
              <div className="menu-card card-buscador" onClick={irABuscador}>
                <span className="card-icon">🍳</span>
                <span className="card-title">Buscador de Recetas</span>
              </div>

            </div>
          </div>
        )}

        {/* PANTALLAS DE LAS APLICACIONES */}
        <div className="home-hero">
          {seccion === 'simple' && <CalculadoraSimple />}
          {seccion === 'completa' && <CalculadoraCompleta />}
          {seccion === 'buscador' && <Buscador />}
        </div>

      </main>
    </div>
  );
}

export default App;
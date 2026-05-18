import { TipoSeccion } from '../types';

interface HomeMenuProps {
  cambiarSeccion: (seccion: TipoSeccion) => void;
}

function HomeMenu({ cambiarSeccion }: HomeMenuProps) {
  return (
    <div className="home-container">
      <div className="home-hero">
        <h1>¡Bienvenido!</h1>
        <p></p>
        
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => cambiarSeccion('buscador')}>Explorar Recetas</button>
          <button className="nav-btn" style={{ border: '2px solid #ff6b6b', background: 'transparent' }} onClick={() => cambiarSeccion('completa')}>
            Usar Calculadora
          </button>
        </div>
      </div>

      <h2 className="home-subtitle" style={{ marginTop: '2rem' }}>Selecciona una herramienta culinaria o de gestión:</h2>

      <div className="menu-grid">
        <div className="menu-card card-simple" onClick={() => cambiarSeccion('simple')}>
          <span className="card-icon">➕</span>
          <span className="card-title">Calculadora Simple</span>
        </div>

        <div className="menu-card card-completa" onClick={() => cambiarSeccion('completa')}>
          <span className="card-icon">🔢</span>
          <span className="card-title">Calculadora Completa</span>
        </div>

        <div className="menu-card card-buscador" onClick={() => cambiarSeccion('buscador')}>
          <span className="card-icon">🍳</span>
          <span className="card-title">Buscador de Recetas</span>
        </div>
      </div>
    </div>
  );
}

export default HomeMenu;
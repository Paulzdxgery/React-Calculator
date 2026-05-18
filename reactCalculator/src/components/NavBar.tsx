import { TipoSeccion } from '../types';

interface NavbarProps {
  seccionActual: TipoSeccion;
  cambiarSeccion: (seccion: TipoSeccion) => void;
}

function Navbar({ seccionActual, cambiarSeccion }: NavbarProps) {
  return (
    <nav className="navbar">
      <div 
        className="logo" 
        onClick={() => cambiarSeccion('home')} 
        style={{ cursor: 'pointer', fontWeight: 700, color: '#ff6b6b', fontSize: '1.5rem' }}
      >
        GourmetApp <span style={{ fontSize: '0.8rem', color: '#ccc' }}>v1.0</span>
      </div>
      <div className="nav-links">
        <button className={`nav-btn ${seccionActual === 'home' ? 'active' : ''}`} onClick={() => cambiarSeccion('home')}>Inicio</button>
        <button className={`nav-btn ${seccionActual === 'simple' ? 'active' : ''}`} onClick={() => cambiarSeccion('simple')}>Simple</button>
        <button className={`nav-btn ${seccionActual === 'completa' ? 'active' : ''}`} onClick={() => cambiarSeccion('completa')}>Calculadora</button>
        <button className={`nav-btn ${seccionActual === 'buscador' ? 'active' : ''}`} onClick={() => cambiarSeccion('buscador')}>Recetas</button>
      </div>
    </nav>
  );
}

export default Navbar;
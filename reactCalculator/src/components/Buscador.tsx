import { useState, KeyboardEvent } from 'react';
import { Receta } from '../types';
import TarjetaReceta from './TarjetaReceta';
import DetalleReceta from './DetalleReceta';

function Buscador() {
  const [query, setQuery] = useState<string>('');
  const [recetas, setRecetas] = useState<Receta[]>([]);
  const [platoSeleccionado, setPlatoSeleccionado] = useState<Receta | null>(null);

  const buscarReceta = async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      if (!response.ok) throw new Error('Error en la red');
      const data = await response.json();
      setRecetas(data.meals || []);
    } catch (error) {
      console.error('Error al obtener recetas:', error);
      setRecetas([]);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') buscarReceta();
  };

  if (platoSeleccionado) {
    return <DetalleReceta receta={platoSeleccionado} onVolver={() => setPlatoSeleccionado(null)} />;
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2 style={{ textAlign: 'center' }}>Buscador de Platos</h2>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '30px' }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ej: Chicken, Beef..."
          style={{ padding: '10px', width: '300px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button
          onClick={buscarReceta}
          style={{ padding: '10px 20px', backgroundColor: '#eecb3f', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Buscar
        </button>
      </div>

      <div className="contenedor-tarjetas">
        {recetas.map((meal) => (
          <TarjetaReceta 
            key={meal.idMeal} 
            receta={meal} 
            onSeleccionar={setPlatoSeleccionado} 
          />
        ))}
      </div>
    </div>
  );
}

export default Buscador;
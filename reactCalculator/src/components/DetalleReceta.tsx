import { Receta } from '../types';

interface DetalleRecetaProps {
  receta: Receta;
  onVolver: () => void;
}

function DetalleReceta({ receta, onVolver }: DetalleRecetaProps) {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <button
        onClick={onVolver}
        style={{ padding: '10px 20px', marginBottom: '20px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        ⬅ Volver a la lista
      </button>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img
          src={receta.strMealThumb}
          alt={receta.strMeal}
          style={{ width: '100%', maxWidth: '600px', borderRadius: '10px', objectFit: 'cover' }}
        />
        <h2 style={{ marginTop: '20px', fontSize: '2rem' }}>{receta.strMeal}</h2>
        <p style={{ textAlign: 'justify', lineHeight: '1.8', color: '#444', marginTop: '15px' }}>
          {receta.strInstructions}
        </p>
      </div>
    </div>
  );
}

export default DetalleReceta;
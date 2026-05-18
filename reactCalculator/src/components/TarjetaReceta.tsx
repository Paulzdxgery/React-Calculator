import { Receta } from '../types';

interface TarjetaRecetaProps {
  receta: Receta;
  onSeleccionar: (receta: Receta) => void;
}

function TarjetaReceta({ receta, onSeleccionar }: TarjetaRecetaProps) {
  return (
    <div className="tarjeta">
      <div className="tarjeta-header">
        <div className="cont-img">
          <img className="tarjeta-img" src={receta.strMealThumb} alt={receta.strMeal} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h3 style={{ margin: '0 0 5px 0', fontSize: '1.1rem', color: '#2b2d42' }}>
            {receta.strMeal}
          </h3>
          <div>
            <span className="badge">{receta.strCategory}</span>
            <span className="badge">{receta.strArea}</span>
          </div>
        </div>
      </div>
      <div className="tarjeta-body">
        <p>{receta.strInstructions.substring(0, 90)}...</p>
      </div>
      <div className="tarjeta-footer">
        <button className="btn-primary" onClick={() => onSeleccionar(receta)}>
          Ver Receta
        </button>
      </div>
    </div>
  );
}

export default TarjetaReceta;

import { useState } from 'react';
// IMPORTANTE: Así le decimos a React que aplique los estilos de ese archivo
import '../App.css';

function Buscador() {
    const [query, setQuery] = useState("");
    const [recetas, setRecetas] = useState([]);
    const [platoSeleccionado, setPlatoSeleccionado] = useState(null);

    const BuscarReceta = async () => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const data = await response.json();
        setRecetas(data.meals || []);
    }

    // 1. RENDERIZADO CONDICIONAL: VISTA DE DETALLE
    if (platoSeleccionado) {
        return (
            <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
                <button
                    onClick={() => setPlatoSeleccionado(null)}
                    style={{ padding: '10px 20px', marginBottom: '20px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                >
                    ⬅ Volver a la lista
                </button>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img
                        src={platoSeleccionado.strMealThumb}
                        alt={platoSeleccionado.strMeal}
                        style={{ width: '100%', maxWidth: '600px', borderRadius: '10px', objectFit: 'cover' }}
                    />
                    <h2 style={{ marginTop: '20px', fontSize: '2rem' }}>{platoSeleccionado.strMeal}</h2>
                    <p style={{ textAlign: 'justify', lineHeight: '1.8', color: '#444', marginTop: '15px' }}>
                        {platoSeleccionado.strInstructions}
                    </p>
                </div>
            </div>
        );
    }

    // 2. RENDERIZADO CONDICIONAL: VISTA DE LISTAS
    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h2 style={{ textAlign: 'center' }}>Buscador de Platos (Flexbox)</h2>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '30px' }}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder=" Chicken, Beef"
                    style={{ padding: '10px', width: '300px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
                <button
                    onClick={BuscarReceta}
                    style={{ padding: '10px 20px', backgroundColor: '#eecb3f', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                >
                    Buscar
                </button>
            </div>

            {/* Ya no hay etiqueta <style> aquí. 
                React leerá directamente las clases "contenedor-tarjetas" y "tarjeta" desde tu App.css */}
            <div className="contenedor-tarjetas">
                {recetas.map((meal) => (
                    <div className="tarjeta" key={meal.idMeal}>

                        <div className="tarjeta-header">
                            {/* Contenedor extra para el efecto de zoom de la imagen */}
                            <div className="cont-img">
                                <img className="tarjeta-img" src={meal.strMealThumb} alt={meal.strMeal} />
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <h3 style={{ margin: '0 0 5px 0', fontSize: '1.1rem', color: '#2b2d42' }}>
                                    {meal.strMeal}
                                </h3>
                                {/* Aquí usamos la nueva clase "badge" */}
                                <div>
                                    <span className="badge">{meal.strCategory}</span>
                                    <span className="badge">{meal.strArea}</span>
                                </div>
                            </div>
                        </div>

                        <div className="tarjeta-body">
                            <p>{meal.strInstructions.substring(0, 90)}...</p>
                        </div>

                        <div className="tarjeta-footer">
                            <button className="btn-primary" onClick={() => setPlatoSeleccionado(meal)}>
                                Ver Receta
                            </button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Buscador;
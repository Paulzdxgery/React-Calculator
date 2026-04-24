import { useState } from 'react';

function Buscador() {
    const [query, setQuery ] = useState("");
    const [personajes, setPersonajes ] = useState([]);

    const BuscarPersonaje = async () =>{
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${query}`);
        const data = await response.json();
        setPersonajes(data.results || []);
    }



    return (
        <>
            <h2>Buscador</h2>
            <div class="search-box">
                <input
                    type="text"
                    id="search-input"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button id="search-btn" onClick={BuscarPersonaje}>Buscar</button>
            </div>
            <div>
                {personajes.map((char) => (
                    <div key={char.id}>
                        <img src={char.image} alt={char.name} width="150" />
                        <h3>{char.name}</h3>
                        <p>ID: #{char.id}</p>
                        <p>Especie: {char.species}</p>
                        <p>Fecha de Creacion: {char.created}</p>
                        <p>Genero: {char.gender}</p>

                        <hr />
                    </div>
                ))}
            </div>
            
        </>


    );
}

export default Buscador;

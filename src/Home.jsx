import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import Button from './components/Button';

export default function Home()
{
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() =>
    {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
            .then((res) => res.json())
            .then((pokemons) =>
            {
                const promises = pokemons.results.map(pokemon =>
                {
                    return fetch(pokemon.url)
                        .then((response) => response.json());
                });

                Promise.all(promises)
                    .then((pokeDataArray) => setPokemonList(pokeDataArray));
            });
    }, []);

    return (
        <>

            <div className='w-fit mx-auto my-10 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
            {pokemonList.map((pokemon, idx) => (
                <Card image={pokemon['sprites']['other']['home']['front_default']} name={pokemon['name']} types={pokemon['types']} key={idx} />
            ))}
        </div>

            <Button />
        </>
    );
}

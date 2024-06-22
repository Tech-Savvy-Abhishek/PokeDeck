import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import Button from './components/Button';

export default function Home()
{
    const [pokemonList, setPokemonList] = useState([]);
    const [offset, setOffset] = useState(0);

    useEffect(() =>
    {
        fetchPokemonsData();
        setOffset(offset + 10);
    }, []);

    const fetchPokemonsData = () =>
    {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
            .then((res) => res.json())
            .then((pokemons) =>
            {
                const promises = pokemons.results.map((pokemon) =>
                {
                    return fetch(pokemon.url)
                        .then((response) => response.json());
                });

                Promise.all(promises)
                    .then((pokeDataArray) => setPokemonList((prevList) => [...prevList, ...pokeDataArray]));
            });
    };

    const loadMore = () =>
    {
        setOffset(offset + 10);
        fetchPokemonsData();
        console.log('done');
    }

    return (
        <>

            <div className='w-fit mx-auto my-10 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
            {pokemonList.map((pokemon, idx) => (
                <Card image={pokemon['sprites']['other']['home']['front_default']} name={pokemon['name']} types={pokemon['types']} key={idx} />
            ))}
        </div>

            <Button onClick={loadMore} />
        </>
    );
}

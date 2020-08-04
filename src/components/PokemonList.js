import React from 'react';
import { Row } from 'react-bootstrap';
import Pokemon from './Pokemon'

function PokemonList ({ pokemons, loading, error }) {

    return (  
        <>
            {
                loading && <h1 className="text-center">Loading....</h1>
            }
            <Row md={3} lg={4}>
                {   
                    pokemons && pokemons.map(pokemon => {
                        return (
                            <Pokemon key={pokemon.id} pokemon={pokemon} />
                        )
                    }) 
                }
            </Row>
            {
                error && <h4>{error.message}</h4>
            }
        </>
    );
}
 
export default PokemonList;
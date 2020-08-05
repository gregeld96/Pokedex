import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Pokemon from './Pokemon'

function PokemonList ({ pokemons, error }) {
    return (  
        <>
            <Row md={3} lg={4}>
                
                {   
                    pokemons && pokemons.map(pokemon => {
                        return (
                            <Col>
                                <Pokemon key={pokemon.id} pokemon={pokemon} />
                            </Col>
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
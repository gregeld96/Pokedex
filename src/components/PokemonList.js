import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Pokemon from './Pokemon'

function PokemonList ({ pokemons }) {
    return (  
        <>
            <Row md={3} lg={4}>
                
                {   
                    pokemons && pokemons.map(pokemon => {
                        return (
                            <Col key={pokemon.id}>
                                <Pokemon pokemon={pokemon} />
                            </Col>
                        )
                    }) 
                }
            </Row>
        </>
    );
}
 
export default PokemonList;
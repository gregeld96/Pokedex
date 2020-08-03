import React from 'react';
import { Row, Col, Button, Image} from 'react-bootstrap';

class PokemonList extends React.Component {

    render() { 
        const { pokemons } = this.props

        return (  
            <>
                <Row md={3} lg={4}>
                    {
                        pokemons.map(pokemon => {
                            return (
                                <Col key={pokemon.id}>
                                    <div className="d-flex flex-column mb-5">
                                        <Image src={pokemon.imageUrl} className="pb-2 Card-size mx-auto"/>
                                        <Button className="w-50 mx-auto">Add to favorite</Button>
                                    </div>
                                </Col>
                            )
                        }) 
                    }
                </Row>
            </>
        );
    }
}
 
export default PokemonList;
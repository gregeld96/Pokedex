import React from 'react'
import { Col, Button, Image} from 'react-bootstrap';

function Pokemon ({pokemon}) {
    return (
        <Col>
            <div className="d-flex flex-column mb-5">
                <Image src={pokemon.imageUrl} className="pb-2 Card-size mx-auto"/>
                <Button className="w-50 mx-auto">Add to favorite</Button>
            </div>
        </Col>
    )
}

export default Pokemon
import React from 'react'
import { Col } from 'react-bootstrap'

function OtherDetail ({pokemon}) {
    return (
        <Col className="my-auto mx-5">
            <h1>{pokemon.name}</h1>
            <p>Pokemon Series: {pokemon.series}</p>
            <p>Set: {pokemon.set}</p>
            <p>Rarity: {pokemon.rarity}</p>
            <p>Supertype: {pokemon.supertype}</p>
            <h4>Description</h4>
            <p>{pokemon.text}</p>
        </Col>
    )
}

export default OtherDetail
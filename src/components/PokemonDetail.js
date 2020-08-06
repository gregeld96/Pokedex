import React from 'react'
import { Col, Table } from 'react-bootstrap'
import TableAttack from '../components/TableAttack'

function PokemonDetail ({pokemon}) {
    return (
        <Col className="my-auto mx-5">
            <h1>{pokemon.name}</h1>
            <p>Pokemon Series: {pokemon.series}</p>
            <p>Set: {pokemon.set}</p>
            <p>Rarity: {pokemon.rarity}</p>
            <p>Pokedex: {pokemon.nationalPokedexNumber}</p>
            <h4>Status</h4>
            <p>HP: {pokemon.hp}</p>
            <Table>
                <thead>
                    <th>No</th>
                    <th>Name</th>
                    <th>Power</th>
                    <th>Description</th>
                </thead>
                {
                pokemon.attacks && pokemon.attacks.map((attack, index) => {
                    return(
                        <TableAttack key={index} attack={attack} index={index}></TableAttack>
                    )
                })
                }
            </Table>
        </Col>
    )
}

export default PokemonDetail
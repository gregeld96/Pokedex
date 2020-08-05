import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import Pokemon from '../components/Pokemon'
import PokemonDetail from '../components/PokemonDetail'
import OtherDetail from '../components/OtherDetail'
import { Row } from 'react-bootstrap'

function CardDetail () {
    let { id } = useParams();

    const { data, loading, error } = useFetch(`https://api.pokemontcg.io/v1/cards/${id}`, "id")

    if (loading) return (<h1 className="text-center">Loading....</h1>)
    if (data.supertype === "Energy" || data.supertype === "Trainer") return (
        <>
            <Row className="text-center container mx-auto my-5 border">
                <Pokemon pokemon={data} error={error}/>
                <OtherDetail pokemon={data}/>
            </Row>
        </>
    )
    return (
        <>
            <Row className="text-center container mx-auto my-5 border">
                <Pokemon pokemon={data} error={error}/>
                <PokemonDetail pokemon={data} />
            </Row>
        </>
    )

}

export default CardDetail
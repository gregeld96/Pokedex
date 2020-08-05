import React from 'react'
import { Button, Image} from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addFavouritePokemon } from '../store/actions/pokemonAction'
import { useRouteMatch } from 'react-router-dom'

function Pokemon ({pokemon}) {

    const dispatch = useDispatch()
    const history = useHistory()
    const { url } = useRouteMatch()

    function pokemonDetail (id) {
        history.push(`/pokemons/${id}`)
    }

    function addFavorite (pokemon) {
        dispatch(addFavouritePokemon(pokemon))
    }

    if (url === '/favorites') {
        return (
            <div className="d-flex flex-column my-5">
                <Image src={pokemon.imageUrl} className="pb-2 mx-auto"/>
            </div>
        )
    }

    return (
        <div className="d-flex flex-column my-5">
            <Image src={pokemon.imageUrl} className="pb-2 mx-auto" onClick={() => pokemonDetail(pokemon.id)}/>
            <Button className="w-50 mx-auto" onClick={() => addFavorite(pokemon)}>Favorite</Button>
        </div>
    )
}

export default Pokemon
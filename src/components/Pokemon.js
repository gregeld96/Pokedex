import React, { useContext } from 'react'
import { Button, Image} from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addFavouritePokemon } from '../store/actions/pokemonAction'
import { useRouteMatch } from 'react-router-dom'
import { template } from '../App'

function Pokemon ({pokemon}) {

    const dispatch = useDispatch()
    const history = useHistory()
    const { url } = useRouteMatch()
    const { color, setColor } = useContext(template)

    function pokemonDetail (id) {
        setColor("primary")
        history.push(`/pokemons/${id}`)
    }

    function addFavorite (pokemon) {
        dispatch(addFavouritePokemon(pokemon))
    }

    if (url === '/favorites') {
        return (
            <div className="d-flex flex-column my-5 text-center">
                <Image src={pokemon.imageUrl} className="pb-2 mx-auto"/>
                <h3>{pokemon.name}</h3>
            </div>
        )
    }

    return (
        <div className="d-flex flex-column my-5">
            <Image src={pokemon.imageUrl} className="pb-2 mx-auto" onClick={() => pokemonDetail(pokemon.id)}/>
            <Button variant={`${color}`} className="w-50 mx-auto" onClick={() => addFavorite(pokemon)}>Favorite</Button>
        </div>
    )
}

export default Pokemon
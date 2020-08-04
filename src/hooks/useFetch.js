import { useState, useEffect } from 'react'

function useFetch (component) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    let url = null

    if(isNaN(component)){
        url = "https://api.pokemontcg.io/v1/cards?name="
    } else {
        url = "https://api.pokemontcg.io/v1/cards?page="
    }

    useEffect(() => {
        setLoading(true)
        fetch(url+component)
        .then(res => res.json())
        .then(responseData => {
          setData(responseData.cards)
        })
        .catch(err => setError(err))
        .finally(_ => setLoading(false))
      }, [component])
    
    return {
        data,
        loading,
        error
    }
}

export default useFetch
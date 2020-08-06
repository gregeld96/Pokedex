import { useState, useEffect } from 'react'

function useFetch (url, value) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        fetch(url)
        .then(res => res.json())
        .then(responseData => {
            setData(responseData.card)
        })
        .catch(err => setError(err))
        .finally(_ => setLoading(false))
      }, [value])
    
    return {
        data,
        loading,
        error
    }
}

export default useFetch
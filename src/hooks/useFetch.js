import { useState, useEffect } from 'react'

function useFetch (url, value1, value2, value3) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        fetch(url)
        .then(res => res.json())
        .then(responseData => {
          if (value1 === "id"){
            setData(responseData.card)
          } else {
            setData(responseData.cards)
          }
        })
        .catch(err => setError(err))
        .finally(_ => setLoading(false))
      }, [value1, value2, value3])
    
    return {
        data,
        loading,
        error
    }
}

export default useFetch
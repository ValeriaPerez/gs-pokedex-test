import { useState, useEffect } from 'react'

const useFetchTypes = () => {
  const URL = 'https://pokeapi.co/api/v2/type'
  const [data, setData] = useState<any>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState({})

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(URL)
        const data = await response.json()
        setData(data.results)
      } catch(error) {
        setError(error as object)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTypes().catch(console.error)
  }, [URL]);

  return { data, error, isLoading }
}

export default useFetchTypes
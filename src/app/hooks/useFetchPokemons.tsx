import { useState, useEffect } from 'react'

const useFetchPokemons = (offset: number) => {
  const URL = 'https://pokeapi.co/api/v2/'

  const [data, setData] = useState<any>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState({})
  const [prev, setPrev] = useState(false)
  const [next, setNext] = useState(false)

  useEffect(() => {
    const fetchPokemons = async (limit = 50) => {
      try {
        setIsLoading(true)
        const response = await fetch(`${URL}pokemon?limit=${limit}&offset=${offset}`)
        const data = await response.json()

        setPrev(data.previous.length > 0)
        setNext(data.previous.length > 0)
        const promises = data.results.map(async (pokemon: any) => {
          const res = await fetch(pokemon.url)
          const data = await res.json()
          return data
        })

        const results = await Promise.all(promises)

        setData([...results])
      } catch(error) {
        setError(error as object)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPokemons().catch(console.error)
  }, [offset])

  return { data, error, isLoading, prev, next }
}

export default useFetchPokemons
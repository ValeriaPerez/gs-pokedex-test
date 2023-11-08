import { useState, useEffect } from 'react'

const useFetchPokemonByID = (name: string) => {
  const URL = `https://pokeapi.co/api/v2/pokemon/${name}`

  const [data, setData] = useState<any>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState({})

  useEffect(() => {
    const fetchPokemonByID = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(`${URL}`)
        const data = await response.json()

        setData(data)
      } catch(error) {
        setError(error as object)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPokemonByID().catch(console.error)
  }, [URL])

  return { data, error, isLoading }
}

export default useFetchPokemonByID
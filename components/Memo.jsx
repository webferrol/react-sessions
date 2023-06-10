import PropTypes from 'prop-types'
import { useEffect, useState, memo } from 'react'

async function getData () {
  const response = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=ce841c1c&s=merlin&page=1')
  return await response.json()
}

// Memorizamos el componente para que no se dispare de nuevo si ninguna de sus dependencias se ven afectadas
const MovieItem = memo(({ title }) => {
  console.log('MoviItem :)')
  return (
    <div>{title} - {Math.floor(Date.now() / 1000)} seg</div>
  )
})

// const MovieItem = ({ title }) => {
//   console.log('MoviItem :)')
//   return (
//     <div>{title} - {Math.floor(Date.now() / 1000)} seg</div>
//   )
// }

export function Memo () {
  const [bool, setBool] = useState(true)
  const [state, setState] = useState({
    movies: [],
    isLoading: false,
    errors: ''
  })
  const { movies, isLoading, errors } = state

  const getMovies = async () => {
    setState({ ...state, isLoading: true })
    const clone = structuredClone(state)
    try {
      const { Search: results } = await getData()
      clone.movies = results
      clone.isLoading = false
    } catch (error) {
      clone.errors = error.message
    } finally {
      clone.isLoading = false
      setState(clone)
    }
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div>
      <h1>Ejemplo del método Memo de react</h1>
      <button
        onClick={() => setBool(!bool)}
        className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${
        isLoading ? 'opacity-50 cursor-not-allowed' : ''
      }`}
        disabled={isLoading}
      >
        {JSON.stringify(bool)}
      </button>
      {errors}
      {
        movies?.map(({ imdbID, Title }) => (
          <MovieItem key={imdbID} title={Title} />
        ))
      }

    </div>
  )
}

MovieItem.displayName = 'MovieItem'
MovieItem.propTypes = {
  title: PropTypes.string
}

import './App.css'
import { useMovies } from './customHooks/useMovies'
import { Movies } from './components/Movies'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const { movies: mappedMovies } = useMovies()//custom hook
  const [query, setQuery] = useState()
  const [error, setError] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({query});
  }

  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  useEffect(()=>{
    if (query === undefined) {
      setError('Please introduce a movie name!')
    }else if(query.match(/^\d+$/)){
      setError("Can't use numbers in the movie name!")
    }else if (query.length < 3) {
      setError('Please introduce at least 3 caracters!')
    }
  },[query])
  
  return (
    <div className='page'>
      <header>
        <h1>Buscador Peliculas</h1>
        <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column'}} >
          <label htmlFor="">Movie name</label>
          <input onChange={handleChange} value={query} name='input1' type="text" placeholder='Advengers, Star wars, Lord of the rings' />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{color:'red'}}>{error}</p>}
        <main>
          <Movies movies={mappedMovies}/>
        </main>
      </header>
    </div>
  )
}

export default App

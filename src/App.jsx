import './App.css'
import { useMovies } from './customHooks/useMovies'
import { Movies } from './components/Movies'
import { useState } from 'react'

function App() {
  const { movies: mappedMovies } = useMovies()//custom hook
  const [query, setQuery] = useState()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({query});
  }

  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador Peliculas</h1>
        <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column'}} >
          <label htmlFor="">Movie name</label>
          <input onChange={handleChange} value={query} name='input1' type="text" placeholder='Advengers, Star wars, Lord of the rings' />
          <button type='submit'>Buscar</button>
        </form>
        <main>
          <Movies movies={mappedMovies}/>
        </main>
      </header>
    </div>
  )
}

export default App

import './App.css'
import { useMovies } from './customHooks/useMovies'
import { Movies } from './components/Movies'
import { useRef } from 'react'

function App() {
  const { movies: mappedMovies } = useMovies()//custom hook
  const inputRef = useRef()//hago referencia al input
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const inputvalue = inputRef.current.value
    console.log(inputvalue);
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador Peliculas</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Movie name</label>
          <input ref={inputRef} type="text" placeholder='Advengers, Star wars, Lord of the rings' />
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

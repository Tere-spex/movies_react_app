import './App.css'
import { useMovies } from './customHooks/useMovies'
import { Movies } from './components/Movies'

function App() {
  
  const { movies: mappedMovies } = useMovies()//custom hook
  
  return (
    <div className='page'>
      <header>
        <h1>Buscador Peliculas</h1>
        <form action="">
          <label htmlFor="">Movie name</label>
          <input type="text" placeholder='Advengers, Star wars, Lord of the rings' />
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

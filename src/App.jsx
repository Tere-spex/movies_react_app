import './App.css'
import { useMovies } from './customHooks/useMovies'
import { Movies } from './components/Movies'

function App() {
  const { movies: mappedMovies } = useMovies()//custom hook
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new window.FormData(event.target)
    const query = data.get('query')
    console.log(query);
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador Peliculas</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Movie name</label>
          <input name='query' type="text" placeholder='Advengers, Star wars, Lord of the rings' />
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

import './App.css'
import { useMovies } from './customHooks/useMovies'
import { Movies } from './components/Movies'
import { useSearch } from './customHooks/useSearch'

function App() {
  const { movies } = useMovies()//custom hook
  const {search, updateSearch, error} = useSearch()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({search});
  }

  const handleChange = (event) => {
    updateSearch(event.target.value)
  }

  
  return (
    <div className='page'>
      <header>
        <h1>Buscador Peliculas</h1>
        <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column'}} >
          <label htmlFor="">Movie name</label>
          <input style={{
            border:'1px solid transparent',
            borderColor: error ?'red': 'transparent'
            }}
            onChange={handleChange} value={search} name='input1' type="text" placeholder='Advengers, Star wars...' />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{color:'red'}}>{error}</p>}
        <main>
          <Movies movies={movies}/>
        </main>
      </header>
    </div>
  )
}

export default App

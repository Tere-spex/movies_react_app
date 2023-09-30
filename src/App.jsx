import './App.css'
import withResults from './mocks/with-results.json'
// import withoutResults from './mocks/no-results.json'
import { Movies } from './components/Movies'

function App() {
  const movies = withResults.Search

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
          <Movies movies = {movies}/>
        </main>
      </header>
    </div>
  )
}

export default App

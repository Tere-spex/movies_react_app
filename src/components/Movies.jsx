function ListOfMovies ({ movies }){//paso las movies por props del componente padre que en este caso es la App
    
  return (
      <ul>
        {
            movies.map(movie => (
                <li key={movie.imdbID}>
                    <h3>{movie.title}</h3>
                    <p>{movie.year}</p>
                    <img src={movie.poster} alt={movie.title} />
                </li>
            ))
        }
        </ul>
  )
}

function NoMoviesResult(){
    return(
        <p>No movies result</p>
    )
}


export function Movies({ movies }){
    const hasMovies = movies.length > 0
    return (
        hasMovies
        ? <ListOfMovies movies={movies} />
        : <NoMoviesResult />

    )
}


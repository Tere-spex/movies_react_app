import { useState, useEffect } from "react"

export function useSearch(){
    const [search, updateSearch] = useState('')
    const [error, setError] = useState(null)

    useEffect(()=>{
        if (search === '') {
            setError('Please introduce a movie name!')
            return
        }
        if (search.match(/^\d+$/)){
            setError("Can't use numbers in the movie name!")
            return
        }
        if (search.length < 3) {
            setError('Please introduce at least 3 caracters!')
            return
        }
        setError(null)
  },[search])
  return {search, updateSearch, error}
}

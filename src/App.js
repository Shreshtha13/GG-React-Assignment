import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'



const App = () => {

  const [searchTerm, setSearchTerm] = useState('avengers')
  const [movieList, setMovieList] = useState([])
  const [movie, setMovie] = useState({
    Title: "",
    Year: "",
    imdbID: "",
    Type: "",
    Poster: ""
  })
  const [movieDetails, setMovieDetails] = useState({})

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  useEffect(() => {
    const url = `https://www.omdbapi.com/?apikey=7142622a&s=${searchTerm}`

    const fetchData = async () => {
      const response = await axios.get(url);
      if (response.data.Search !== undefined)
        setMovieList(response.data.Search)
    }

    fetchData()
  }, [searchTerm])

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=7142622a&t=${movie}`)
      if (response !== undefined) {
        setMovieDetails({
          Title: response.data.Title,
          Plot: response.data.Plot,
          Cast: response.data.Actors,
          Year: response.data.Year,
          imdbRating: response.data.imdbRating,
          Poster: response.data.Poster
        })
      }
    }
    fetchDetails()
  }, [movie])


  const displayInfo = (event) => {
    setMovie(event.target.outerText)
    if (movieDetails.Title !== undefined)
      console.log(movieDetails)
  }


  const MoviesList = () => {
    return (
      movieList.map(m => {
        return (
          <div key={m.imdbID + m.Year} className="card">
            <div className='hoverCard'>
              <p key={m.Year} onClick={displayInfo} style={{ cursor: 'pointer' }}>{m.Title} </p>
            </div>
            <img key={m.imdbID} src={m.Poster} alt="Movie Poster" />
          </div>
        )
      })
    )
  }

  if (movieDetails.Title !== undefined) {

  }

  const closeDisplay = () => {
    setMovieDetails({})
  }

  return (
    <div>
      <form>
        <input className='searchBox' type='text' onChange={handleSearchChange} name="search" />
      </form>
      <div className="displayCard" style={{ visibility: movieDetails.Title === undefined ? 'hidden' : 'visible' }}>
        <button onClick={closeDisplay}>Close</button>
        <img src={movieDetails.Poster} alt='movie poster' />
        <p>Title : {movieDetails.Title}</p>
        <p>Year : {movieDetails.Year}</p>
        <p>Cast : {movieDetails.Cast}</p>
        <p>Plot : {movieDetails.Plot}</p>
        <p>imdb Rating : {movieDetails.imdbRating}</p>
      </div>
      <div className="movieCards" style={{ filter: movieDetails.Title !== undefined ? 'blur(10px)' : 'blur(0px)' }}>
        <MoviesList></MoviesList>
      </div>
    </div>
  )
}


export default App;

import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import MoviesList from './comps/MoviesList';


const App = () => {

  const [searchTerm, setSearchTerm] = useState('')
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

  console.log(searchTerm)



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


  const closeDisplay = () => {
    setMovieDetails({})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const url = `https://www.omdbapi.com/?apikey=7142622a&s=${searchTerm}`

    const fetchData = async () => {
      const response = await axios.get(url);
      if (response.data.Search !== undefined)
        setMovieList(response.data.Search)
    }

    fetchData()

  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className='searchBox' type='text' name="search" onChange={handleSearchChange} />
      </form>
      <div className="displayCard" style={{ visibility: movieDetails.Title === undefined ? 'hidden' : 'visible' }}>
        <button onClick={closeDisplay} className='closeDisplay'>Close</button>
        <img src={movieDetails.Poster} alt='movie poster' />
        <p>Title : {movieDetails.Title}</p>
        <p>Year : {movieDetails.Year}</p>
        <p>Cast : {movieDetails.Cast}</p>
        <p>Plot : {movieDetails.Plot}</p>
        <p>imdb Rating : {movieDetails.imdbRating}</p>
      </div>
      <div className="movieCards" style={{ filter: movieDetails.Title !== undefined ? 'blur(10px)' : 'blur(0px)' }}>
        <MoviesList movieList={movieList} displayInfo={displayInfo} ></MoviesList>
      </div>
    </div>
  )
}


export default App;

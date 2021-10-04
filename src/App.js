import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MoviesList from './components/MoviesList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SelectedMovie from './components/SelectedMovie';
import SearchBox from './components/SearchBox';


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
 
  const [isHome, setIsHome] = useState(true)

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)

  }

  const displayInfo = (event) => {
    setIsHome(false)
    setMovie(event.target.outerText)

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


  const DisplaySelectedMovie = () => {
    return (
      <SelectedMovie movie={movie} setIsHome={setIsHome} />
    )
  }

  const searchdialog = () => {
    return (
      <SearchBox handleSubmit={handleSubmit} handleSearchChange={handleSearchChange} />
    )
  }

console.log(isHome)


  return (
    <Router>
      {isHome && searchdialog()}
      <div>
        <Switch>
          <Route path='/movie' component={DisplaySelectedMovie} />
          <div className="movieCards">
            <MoviesList movieList={movieList} displayInfo={displayInfo} isHome={isHome}></MoviesList>
          </div>
        </Switch>
      </div>
    </Router>
  )
}


export default App;

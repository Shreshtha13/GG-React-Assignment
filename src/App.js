import React, { useState } from 'react'
import axios from 'axios'
import MoviesList from './components/MoviesList';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom'
import SelectedMovie from './components/SelectedMovie';
import SearchBox from './components/SearchBox';



const App = () => {

  const [searchTerm, setSearchTerm] = useState('')
  const [movieList, setMovieList] = useState([])

  const [movie, setMovie] = useState('')
  const cm = window.location.pathname
  // console.log(cm)
  // if(cm.length>1){
  //   setMovie(cm.substring(1))
  // }


    


  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)

  }

  const displayInfo = async (event) => {

    const currentMovie = await event.target.children[0].innerHTML;

    if (currentMovie)
      setMovie(currentMovie)
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
      <SelectedMovie movie={movie} setMovie={setMovie} />
    )
  }

  const Searchdialog = () => {
    return (
      <SearchBox handleSubmit={handleSubmit} handleSearchChange={handleSearchChange} />
    )
  }

  

  const List = () => {
    return (
      <div className="movieCards">
        <MoviesList movieList={movieList} displayInfo={displayInfo}></MoviesList>
      </div>
    )
  }

  

  return (
    <Router>
      {Searchdialog()}
      <div>
        <Switch>
          <Route path='/' exact="true" component={List} />
          <Route path={`/:id`} component={DisplaySelectedMovie} />
        </Switch>
      </div>
    </Router>
  )
}


export default App;

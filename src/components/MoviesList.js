import React from 'react'
import { Link } from 'react-router-dom'

const MoviesList = ({ movieList, displayInfo, isHome }) => {
  return (
    movieList.map(m => {
      return (

        <div key={m.Title} className="card" >
          <Link to='/movie' onClick={displayInfo}>
            <div className='hoverCard' key={m.imdbID} style={{ cursor: 'pointer' }}>
              {m.Title}
            </div>
          </Link>
          <img key={m.Year} src={m.Poster} alt="Movie Poster" />
        </div>

      )
    })
  )
}

export default MoviesList
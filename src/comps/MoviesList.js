import React from  'react'

const MoviesList = ({movieList, displayInfo}) => {
    return (
      movieList.map(m => {
        return (
          <div key={m.imdbID} className="card">
            <div className='hoverCard' key={m.Year} onClick={displayInfo} style={{ cursor: 'pointer' }}>
              {m.Title}
            </div>
            <img key={m.imdbID} src={m.Poster} alt="Movie Poster" />
          </div>
        )
      })
    )
  }

  export default MoviesList
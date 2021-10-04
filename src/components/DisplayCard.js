import React from 'react'

const DisplayCard = ({ movieDetails }) => {
    console.log(movieDetails)
    return (
        <div style={{display:'flex'}}>
            <img className='poster' src={movieDetails.Poster} alt='movie/show poster' />
            <div className='text-details'>
                <div>Title : {movieDetails.Title}</div>
                <div>Plot : {movieDetails.Plot}</div>
                <div>Cast : {movieDetails.Actors}</div>
                <div>Year : {movieDetails.Year}</div>
                <div>imdb Rating : {movieDetails.imdbRating}</div>
                <div>Net Gross : {movieDetails.BoxOffice}</div>
                <div>Genre : {movieDetails.Genre}</div>
                <div>Runtime : {movieDetails.Runtime}</div>
                <div>Metascore : {movieDetails.Metascore}</div>
            </div>


        </div>
    )
}

export default DisplayCard
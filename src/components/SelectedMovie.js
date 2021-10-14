import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Link, useParams } from 'react-router-dom'
import DisplayCard from './DisplayCard'


const SelectedMovie = ({ movie, setMovie }) => {

    const [movieDetails, setMovieDetails] = useState({})
    let { movieID } = useParams()
    console.log(movieID);
    useEffect(() => {
        const fetchDetails = async () => {
            const response = await axios.get(`https://www.omdbapi.com/?apikey=7142622a&i=${movie}`)
            if (response.data.Title !== undefined) {
                setMovieDetails(response.data)
            }

        }

        fetchDetails()
    }, [])


    const clearMovieDetail = () => {
        setMovieDetails({})
        setMovie({})

    }

    const disp = () => {
        return (
            <DisplayCard movieDetails={movieDetails} />
        )
    }

    return (
        <div>
            <Link to='/' className="go-to-home" >
                <div onClick={clearMovieDetail}>Home</div>
            </Link>

            {movieDetails.Title !== undefined && disp()}
        </div>
    )
}

export default SelectedMovie
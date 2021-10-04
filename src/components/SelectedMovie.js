import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import DisplayCard from './DisplayCard'


const SelectedMovie = ({ movie, isHome, setIsHome }) => {

    const [movieDetails, setMovieDetails] = useState({})

    useEffect(() => {
        const fetchDetails = async () => {
            const response = await axios.get(`https://www.omdbapi.com/?apikey=7142622a&t=${movie}`)
            if (response.data.Title !== undefined) {
                setMovieDetails(response.data)
            }
            console.log(response.data)
        }

        fetchDetails()
    }, [])


    const clearMovieDetail = () => {
        setIsHome(true)
        setMovieDetails({})
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
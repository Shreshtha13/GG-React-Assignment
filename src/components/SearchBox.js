import React from 'react'

const SearchBox = ({handleSubmit, handleSearchChange}) => {
    return (
        <form onSubmit={handleSubmit}>
            <input className='searchBox' placeholder='Search for a movie or series' type='text' name="search" onChange={handleSearchChange} />
        </form>
    )
}

export default SearchBox
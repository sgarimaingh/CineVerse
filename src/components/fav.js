import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Favorite = () => {
    const [favs, setFavs] = useState([]);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('fav')) || [];
        setFavs(favorites);
    }, []); 

    const unlike = (id) => {
        const updatedFavs = favs.filter((movie) => movie.Id !== id);
        setFavs(updatedFavs); 

        localStorage.setItem('fav', JSON.stringify(updatedFavs)); 
    };

    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <Link to={`/`}><i id="home" className="fa fa-home"></i></Link>
            <p className="favmovie">Your Favorites</p>
            {favs.map((movie) => (
                <div className="favs" key={movie.Id}>
                    <Link to={`/about/${movie.Id}`}><img src={movie.image} width="100" height="120" alt={movie.title} id="fav-img" /></Link>
                    <h4>{movie.title}</h4>
                    <button id = "remove-btn" onClick={() => unlike(movie.Id)}>Remove</button>
                </div>
            ))}
        </div>
    );
};

export default Favorite;

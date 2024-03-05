import { useParams, Link } from 'react-router-dom';
import {useState} from 'react'


const MovieDetails = () => {
    const [movie, updateMovie] = useState({});

    let searchMovie = async (id) => {
        const response = await fetch(`https://omdbapi.com/?apikey=c5b09145&i=${id}`);
        const movie = await response.json(); 
        updateMovie(()=> {
            let movieDetails = {image: movie.Poster, 
                                title: movie.Title,
                                year: movie.Year,
                                genre: movie.Genre,
                                writer: movie.Writer,
                                rating: movie.imdbRating,
                                actors: movie.Actors,
                                plot: movie.Plot,
                                released: movie.Released,
                                language: movie.Language
                            };
            return movieDetails;
        })
    }
    const { id } = useParams();
    searchMovie(id);
    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <span><Link to={`/`}><i id="home" className="fa fa-home"></i></Link><Link to={`/fav`} id ="fav">Favorites</Link></span>
        <div class="moviedetails">
            <img src={movie.image} height="590" width="500"  alt={movie.title}/>
            <div class="details">
                <h2 id="year"><b>Title:</b> <span>{movie.title}</span></h2>
                <h2 id="year"><b>Released on:</b> <span>{movie.released}</span></h2>
                <h2 id="year"><b>Genre:</b> <span>{movie.genre}</span></h2>
                <h2 id="year"><b>Actors:</b> <span>{movie.actors}</span></h2>
                <h2 id="year"><b>Writer:</b> <span>{movie.writer}</span></h2>
                <h2 id="year"><b>Language:</b> <span>{movie.language}</span></h2>
                <h2 id="year"><b>Imdb Rating:</b> <span>{ movie.rating}</span></h2>
                <h2 id="year"><b>Plot:</b> <span>{movie.plot}</span></h2>

            </div>
        </div>
        </div>
    )
}


export default MovieDetails;
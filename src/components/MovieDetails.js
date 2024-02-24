import { useParams } from 'react-router-dom';
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
                                awards: movie.Awards
                            };
            return movieDetails;
        })
    }
    const { id } = useParams();
    searchMovie(id);
    return (
        <div class="moviedetails">
            <img src={movie.image} height="290" width="200"  alt={movie.title}/>
            <div class="details">
                <h2 id="title"><b>Title:</b> <span>{movie.title}</span></h2>
                <h2 id="year"><b>Release year:</b> <span>{movie.year}</span></h2>
                <h2 id="writer"><b>Writer:</b> <span>{movie.writer}</span></h2>
            </div>
        </div>
    )
}


export default MovieDetails;
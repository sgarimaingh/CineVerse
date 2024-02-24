
import {useState,useEffect} from "react";
import {Link} from "react-router-dom";


const Home = () => {

const [movies,setMovies]=useState([]);
const [movie, setMovie] = useState([]);
const [searchValue, setSearchValue] = useState('');

const getMovie = async () => {
    const response = await fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=c5b09145`);
    const data = await response.json();
    if (data.Search) {
        setMovies(data.Search);
    }  

   setMovie(()=> {
    let movie = movies.map((movie)=> {
        return {image: movie.Poster,title: movie.Title, Id: movie.imdbID, type: movie.Type, year: movie.Year, writer:movie.Writer,likedStatus: 'no'}
    })
    return movie;
    });

}

useEffect(() => {
    getMovie(searchValue);
}, [searchValue]);



const markFav = (id) => {
    let m = movie.map((mov)=> {
        return {image: mov.image, Id: mov.Id,  title: mov.title, year:mov.year, writer:mov.writer,type: mov.type};
    });
    m= m.filter((movie) =>{ return movie.Id ===id;});
    m=m[0];
    let existingFav=JSON.parse(localStorage.getItem("fav"));
    if(existingFav==null){
        const newfav = JSON.stringify([m])
        localStorage.setItem("fav", newfav);
    }
    else{
        
        const newfav = JSON.stringify([...existingFav,m])
        localStorage.setItem("fav", newfav);
    }
   
    
};



return (

<div>

<Link to={`/fav`} id="fav"><h2>Favorites</h2></Link>

<div className='search'>
			<input
                className="bar"
				value={searchValue}
				onChange={(e) => setSearchValue(e.target.value)}
				placeholder='Type movie name....'
			></input>
            <span>Search</span>
</div>


<p>
{ movie.map((movie)=> {
    return (

    <div class="mainmovie">
    <div class="row d-flex align-items-center mt-4 mb-4">
    <div className='image-container d-flex justify-content-start m-3'>
    <Link to={`/about/${movie.Id}`}><img src={movie.image} alt={movie.title} /></Link>
   
    </div>
    </div>
    <input type="checkbox" onChange={()=> markFav(movie.Id)} />Add To Favorites
    <h3>{movie.title}</h3>
    
    </div>

)
})}

</p>
</div>
)
}

export default Home;

import {useState,useEffect} from "react";
import {Link} from "react-router-dom";


const Home = () => {

const [movies,setMovies]=useState([]);
const [movie, setMovie] = useState([]);
const [searchValue, setSearchValue] = useState('');

const getMovie = async () => {
    const response = await fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=c5b09145`);
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


function customPopup(message) {
    let popup = document.getElementById('customPopup');
    let popupMessage = document.getElementById('popupMessage');
    popupMessage.innerHTML = message;
    popup.style.display = 'block';

    let closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });
}

const markFav = (id) => {
    let m = movie.map((mov)=> {
        return {image: mov.image, Id: mov.Id,  title: mov.title, year:mov.year, writer:mov.writer,type: mov.type};
    });
    m= m.filter((movie) =>{ return movie.Id ===id;});
    m=m[0];

    let existingFav = JSON.parse(localStorage.getItem("fav")) || [];

    if (existingFav.some((fav) => fav.Id === m.Id)) {
        customPopup("Already in favorites!");
    } else {
        existingFav.push(m);
        localStorage.setItem("fav", JSON.stringify(existingFav));
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
				placeholder='Search movies and shows here....'
			></input>
</div>


<p>
{ movie.map((movie)=> {
    return (

    <div className="mainmovie">
    <div className="row d-flex align-items-center mt-4 mb-4">
    <div className='image-container d-flex m-3'>
    <Link to={`/about/${movie.Id}`}><img src={movie.image} alt={movie.title} /></Link>
   
    </div>
    </div>
    <button id ="fav-btn" onClick={()=> markFav(movie.Id)}>Add To Favorites</button>
    <h3 id = "title">{movie.title}</h3>
    
    </div>

)
})}

</p>
<div id="customPopup" className="popup">
    <div className="popup-content">
        <span className="close">&times;</span>
        <p id="popupMessage"></p>
    </div>
</div>

</div>

)
}

export default Home;
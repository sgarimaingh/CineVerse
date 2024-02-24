import {Link} from 'react-router-dom';

const unlike = (id) => {
    const favs = JSON.parse(localStorage.getItem("fav"));
    favs= favs.filter((movie =>(movie.Id !==id)));
    
    const fav = JSON.parse(localStorage.getItem("fav"));
    const newfav = JSON.stringify([...fav,favs])
    localStorage.setItem("fav", newfav);
  
};
const Favorite = () => {   
  const favs = JSON.parse(localStorage.getItem("fav"));
  return (

    <div>
        <p class="favmovie">Your Favorites</p>
        {
            favs.map((movie)=> {
                return (
                    <div class="favs">
                        <Link to={`/about/${movie.Id}`}><img src={movie.image} width="100" height="120" alt={movie.title} /></Link>
                        {/* <input type="checkbox" onChange={()=> unlike(movie.Id)} />Remove */}
                        <h4>{movie.title}</h4>
                        <h3>{movie.year}</h3>
                    </div>
                )
            })
        }
    </div>
    )   
}

export default Favorite;
import axios from "axios";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const MovieDetail = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get('https://api.themoviedb.org/3/movie/550?api_key=9cf5df2501641d3ad22638837fd4e9d8');
            setMovie(response.data.hits);
        };
        fetch();
    }, []);

    console.log(data);
    
    return(
        <div>
            <h1>{movie.title}</h1>
            <p>Overview: {movie.overview}</p>
            <p>Release date: {movie.release_date}</p>
        </div>
    );
}

export default MovieDetail
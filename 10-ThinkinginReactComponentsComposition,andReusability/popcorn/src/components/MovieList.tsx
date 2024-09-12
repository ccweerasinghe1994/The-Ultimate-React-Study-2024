import {useState} from "react";
import {tempMovieData, TTempMovieData} from "../App";
import Movie from "./Movie";

const MovieList = () => {
    const [movies, setMovies] = useState<TTempMovieData[]>(tempMovieData);
    return (
        <ul className="list">
            {movies?.map((movie) => (
                <Movie key={movie.imdbID} movie={movie}/>
            ))}
        </ul>
    )
}

export default MovieList;
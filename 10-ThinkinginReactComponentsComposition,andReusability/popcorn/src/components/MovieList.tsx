import {FC} from "react";
import {TTempMovieData} from "../App";
import Movie from "./Movie";

const MovieList: FC<PropsMovieList> = ({movies}) => {

    return (
        <ul className="list">
            {movies?.map((movie) => (
                <Movie key={movie.imdbID} movie={movie}/>
            ))}
        </ul>
    )
}

export default MovieList;

type PropsMovieList = {
    movies: TTempMovieData[];
}
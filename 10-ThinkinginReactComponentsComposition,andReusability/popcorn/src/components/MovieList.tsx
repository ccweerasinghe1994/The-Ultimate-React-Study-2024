import {FC} from "react";
import {TTempMovieData} from "../App";
import Movie from "./Movie";

const MovieList: FC<PropsMovieList> = ({movies, setSelectedMovieId}) => {

    return (
        <ul className="list">
            {movies?.map((movie) => (
                <Movie setSelectedMovieId={setSelectedMovieId} key={movie.imdbID} movie={movie}/>
            ))}
        </ul>
    )
}

export default MovieList;

type PropsMovieList = {
    movies: TTempMovieData[];
    setSelectedMovieId: (id: string) => void;
}
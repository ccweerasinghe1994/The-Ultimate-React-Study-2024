import {FC} from "react";
import {TTempMovieData} from "../App";


const Movie: FC<Props> = ({movie}) => {
    return (
        <li>
            <img src={movie.Poster} alt={`${movie.Title} poster`}/>
            <h3>{movie.Title}</h3>
            <div>
                <p>
                    <span>🗓</span>
                    <span>{movie.Year}</span>
                </p>
            </div>
        </li>
    )
}

export default Movie;

type Props = {
    movie: TTempMovieData
}
import {TTempWatchedData} from "../App";
import {FC} from "react";

type PropsWatchedMovie = {
    movie: TTempWatchedData;
    onDelete: (id: string) => void;
}

const WatchedMovie: FC<PropsWatchedMovie> = ({movie, onDelete}) => {
    return <li>
        <img src={movie.Poster} alt={`${movie.Title} poster`}/>
        <h3>{movie.Title}</h3>
        <div>
            <p>
                <span>⭐️</span>
                <span>{movie.imdbRating}</span>
            </p>
            <p>
                <span>🌟</span>
                <span>{movie.userRating}</span>
            </p>
            <p>
                <span>⏳</span>
                <span>{movie.runtime} min</span>
            </p>
            <div className="btn-delete" onClick={() => onDelete(movie.imdbID)}>X</div>
        </div>
    </li>;
}


export default WatchedMovie;
import {TTempWatchedData} from "../App";
import WatchedMovie from "./WatchedMovie";

interface WatchedMovieListProps {
    watched: TTempWatchedData[]
    onDelete: (id: string) => void;
}


const WatchedMovieList = ({watched, onDelete}: WatchedMovieListProps) => {
    return (
        <ul className="list">
            {watched.map((movie) => (
                <WatchedMovie onDelete={onDelete} key={movie.imdbID} movie={movie}/>
            ))}
        </ul>
    )
}

export default WatchedMovieList;
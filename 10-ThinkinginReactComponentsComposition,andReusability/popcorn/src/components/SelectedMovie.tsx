import {FC, useEffect, useState} from "react";
import StarRating from "./StarRating";
import {getMoviesByID} from "../api/api";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import {TTempWatchedData} from "../App";

type PropsSelectedMovie = {
    selectedMovieId: string;
    onClick: () => void;
    onAddToWatchListClicked: (movie: TMovie & { rating: number }) => void;
    watched: TTempWatchedData[];
}

const SelectedMovie: FC<PropsSelectedMovie> = ({
                                                   selectedMovieId,
                                                   onClick,
                                                   onAddToWatchListClicked,
                                                   watched
                                               }) => {

    const [movie, setMovie] = useState<TMovie | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [rating, setRating] = useState<number>(0);

    const handleAddToWatchList = (movie: TMovie) => {
        onAddToWatchListClicked({...movie, rating});
        onClick();
    }

    const canAddUserRating = watched.find((movie) => movie.imdbID === selectedMovieId) === undefined;


    useEffect(() => {
        void getMoviesByID(setMovie, selectedMovieId, setIsLoading, setError);
    }, [selectedMovieId])

    return (
        <div className="details">
            {isLoading && <Loader/>}
            {error && <ErrorMessage error={error}/>}
            {!isLoading && movie && <>
                <header>


                    <button className={'btn-back'} onClick={onClick}>&larr;</button>
                    <img src={movie.Poster} alt=""/>
                    <div className="details-overview">
                        <h2>{movie.Title}</h2>
                        <p>
                            {movie.Released} &bull; {movie.Runtime === 'N/A' ? 0 : movie.Runtime}
                        </p>
                        <p>
                            {movie.Genre}
                        </p>
                        <p>
                            <span>⭐</span>
                            {movie.imdbRating} IMDB Rating
                        </p>
                    </div>
                </header>
                <section>
                    {canAddUserRating && <div className="rating">
                        <StarRating size={24} color={'yellow'} textColor={'yellow'} maxRating={10}
                                    onSetRating={setRating}/>
                        {
                            rating > 0 &&
                            <button onClick={() => handleAddToWatchList(movie)} className={'btn-add'}>Add To Watch
                                list</button>
                        }

                    </div>}
                    <p>
                        <em>{movie.Plot}</em>
                    </p>
                    <p>
                        Starring: {movie.Actors}
                    </p>
                    <p>
                        Directed by: {movie.Director}
                    </p>
                    
                </section>
            </>}
        </div>
    )
}

export default SelectedMovie;

export type TMovie = {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: {
        Source: string;
        Value: string;
    }[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
};

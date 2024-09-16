import NavBar from "./components/NavBar";
import Main from "./page/Main";
import {ReactNode, useEffect, useState} from "react";
import SearchBar from "./components/SearchBar";
import NumResults from "./components/NumResults";
import Box from "./page/Box";
import WatchSummery from "./components/WatchSummery";
import WatchedMovieList from "./components/WatchedMovieList";
import {getMoviesByName} from "./api/api";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import MovieList from "./components/MovieList";
import SelectedMovie, {TMovie} from "./components/SelectedMovie";

export type TTempMovieData = {
    imdbID: string;
    Title: string;
    Year: string;
    Poster: string;
};

export type TTempWatchedData = {
    imdbID: string;
    Title: string;
    Year: string;
    Poster: string;
    runtime: number;
    imdbRating: number;
    userRating: number;
};


export default function App() {
    const [movies, setMovies] = useState<TTempMovieData[]>([]);
    const [watched, setWatched] = useState<TTempWatchedData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [query, setQuery] = useState<string>("matrix");
    const [selectedMovieId, setSelectedMovieId] = useState<string | null>(null);


    const handleSelectMovie = (id: string) => {
        setSelectedMovieId(currentId => id === currentId ? null : id);
    }

    const handleCloseSelectedMovie = () => {
        setSelectedMovieId(null);
    }


    const handleAddToWatchList = (movie: TMovie & { rating: number }) => {

        const watchedMovie: TTempWatchedData = {
            imdbID: movie.imdbID,
            imdbRating: parseFloat(movie.imdbRating),
            Poster: movie.Poster,
            runtime: parseInt(movie.Runtime.split(' ')[0] === 'N/A' ? "0" : movie.Runtime),
            Title: movie.Title,
            userRating: movie.rating,
            Year: movie.Year,
        }

        setWatched((currentWatchedMovies) => [...currentWatchedMovies, watchedMovie]);
    };

    const handleDeleteWatchedMovie = (id: string) => {
        setWatched((currentWatchedMovies) => currentWatchedMovies.filter((movie) => movie.imdbID !== id));
    };


    useEffect(() => {

        if (query.length < 3) {
            setMovies([]);
            setError(null);
            return;
        }

        void getMoviesByName(setMovies, query, setIsLoading, setError);

    }, [query])

    const watchedContent: ReactNode = <>
        <WatchSummery watched={watched}/>
        <WatchedMovieList onDelete={handleDeleteWatchedMovie} watched={watched}/>
    </>;

    const selectedContent: ReactNode = <SelectedMovie watched={watched}
                                                      onAddToWatchListClicked={handleAddToWatchList}
                                                      onClick={handleCloseSelectedMovie}
                                                      selectedMovieId={selectedMovieId!}/>
    return (
        <>
            <NavBar>
                <SearchBar setQuery={setQuery} query={query}/>
                <NumResults movies={movies}/>
            </NavBar>
            <Main>
                <Box>
                    {
                        isLoading && <Loader/>
                    }
                    {
                        error && <ErrorMessage error={error}/>
                    }
                    {
                        !isLoading && !error && <MovieList setSelectedMovieId={handleSelectMovie} movies={movies}/>
                    }
                </Box>
                <Box>
                    {selectedMovieId ? selectedContent : watchedContent}
                </Box>
            </Main>
        </>
    );
}

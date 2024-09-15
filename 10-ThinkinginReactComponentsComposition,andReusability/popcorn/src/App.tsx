import NavBar from "./components/NavBar";
import Main from "./page/Main";
import {useEffect, useState} from "react";
import SearchBar from "./components/SearchBar";
import NumResults from "./components/NumResults";
import Box from "./page/Box";
import WatchSummery from "./components/WatchSummery";
import WatchedMovieList from "./components/WatchedMovieList";
import {getMoviesByName} from "./api/api";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import MovieList from "./components/MovieList";
import SelectedMovie from "./components/SelectedMovie";

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


export const tempWatchedData: TTempWatchedData[] = [
    {
        imdbID: "tt1375666",
        Title: "Inception",
        Year: "2010",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        runtime: 148,
        imdbRating: 8.8,
        userRating: 10,
    },
    {
        imdbID: "tt0088763",
        Title: "Back to the Future",
        Year: "1985",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        runtime: 116,
        imdbRating: 8.5,
        userRating: 9,
    },
];


export default function App() {
    const [movies, setMovies] = useState<TTempMovieData[]>([]);
    const [watched, setWatched] = useState<TTempWatchedData[]>(tempWatchedData);
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

    useEffect(() => {

        if (query.length < 3) {
            setMovies([]);
            setError(null);
            return;
        }

        void getMoviesByName(setMovies, query, setIsLoading, setError);

    }, [query])


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
                    {
                        selectedMovieId ?
                            <SelectedMovie onClick={handleCloseSelectedMovie}
                                           selectedMovieId={selectedMovieId}/> : <>
                                <WatchSummery watched={watched}/>
                                <WatchedMovieList watched={watched}/>
                            </>
                    }

                </Box>
            </Main>
        </>
    );
}

import {Dispatch, SetStateAction} from "react";
import {TTempMovieData} from "../App";
import {TMovie} from "../components/SelectedMovie";

const KEY = "3ce56f7d"
const getMoviesByName = async (
    setMovies: Dispatch<SetStateAction<TTempMovieData[]>>,
    searchTerm: string,
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    setError: Dispatch<SetStateAction<string | null>>
): Promise<void> => {
    try {
        setError(null);
        setIsLoading(true);
        const response = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=$${searchTerm}`);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        if (data.Response === "False") {
            throw new Error(data.Error);
        }
        setMovies(data.Search);

    } catch (error) {
        if (error instanceof Error) {
            setError(error.message);
        } else {
            setError("An unknown error occurred");
        }

    } finally {
        setIsLoading(false);
    }
}

const getMoviesByID = async (
    setMovie: Dispatch<SetStateAction<TMovie | null>>,
    id: string,
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    setError: Dispatch<SetStateAction<string | null>>
): Promise<void> => {
    try {
        setError(null);
        setIsLoading(true);
        const response = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${id}`);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        if (data.Response === "False") {
            throw new Error(data.Error);
        }
        setMovie(data);

    } catch (error) {
        if (error instanceof Error) {
            setError(error.message);
        } else {
            setError("An unknown error occurred");
        }

    } finally {
        setIsLoading(false);
    }
}

export {
    getMoviesByName,
    getMoviesByID
}
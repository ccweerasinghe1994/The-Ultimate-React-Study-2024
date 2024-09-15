import {Dispatch, SetStateAction} from "react";
import {TTempMovieData} from "../App";

const KEY = "3ce56f7d"
const getMovies = async (setMovies: Dispatch<SetStateAction<TTempMovieData[]>>, searchTerm: string, setIsLoading: Dispatch<SetStateAction<boolean>>): Promise<void> => {
    setIsLoading(true);
    const response = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=$${searchTerm}`);
    const data = await response.json();
    setMovies(data.Search);
    setIsLoading(false);
}


export {
    getMovies
}
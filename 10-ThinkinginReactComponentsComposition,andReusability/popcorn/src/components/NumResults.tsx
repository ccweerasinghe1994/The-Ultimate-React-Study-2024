import {TTempMovieData} from "../App";
import {FC} from "react";

const NumResults: FC<PropsNumResults> = ({movies}) => {

    return <p className="num-results">
        Found <strong>{movies.length}</strong> results
    </p>
}

export default NumResults;

type PropsNumResults = {
    movies: TTempMovieData[];

}
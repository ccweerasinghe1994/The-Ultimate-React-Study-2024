import {FC, useState} from "react";
import MovieList from "../components/MovieList";


const ListBox: FC = () => {
    const [isOpen1, setIsOpen1] = useState(true);

    return (
        <div className="box">
            <button
                className="btn-toggle"
                onClick={() => setIsOpen1((open) => !open)}
            >
                {isOpen1 ? "–" : "+"}
            </button>
            {isOpen1 && (
                <MovieList/>
            )}
        </div>
    )
};

export default ListBox;
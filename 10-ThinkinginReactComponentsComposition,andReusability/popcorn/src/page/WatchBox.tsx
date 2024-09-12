import {useState} from "react";
import {tempWatchedData} from "../App";
import WatchSummery from "../components/WatchSummery";
import WatchedMovieList from "../components/WatchedMovieList";


const WatchBox = () => {
    const [isOpen2, setIsOpen2] = useState(true);
    const [watched, setWatched] = useState(tempWatchedData);


    return (
        <div className="box">
            <button
                className="btn-toggle"
                onClick={() => setIsOpen2((open) => !open)}
            >
                {isOpen2 ? "–" : "+"}
            </button>
            {isOpen2 && (
                <>
                    <WatchSummery watched={watched}/>
                    <WatchedMovieList watched={watched}/>
                </>
            )}
        </div>
    )
}

export default WatchBox;
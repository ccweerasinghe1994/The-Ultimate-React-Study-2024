import {FC} from "react";

type PropsSelectedMovie = {
    selectedMovieId: string;
    onClick: () => void;
}

const SelectedMovie: FC<PropsSelectedMovie> = ({selectedMovieId, onClick}) => {

    return (
        <div className="details">
            <button className={'btn-back'} onClick={onClick}>&larr;</button>
            {selectedMovieId}
        </div>
    )
}

export default SelectedMovie;
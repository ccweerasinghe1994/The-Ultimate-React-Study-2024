import {FC} from "react";

const StarContainer = {
    display: "flex",
    gap: "16px",
    alignItems: "center",
};

const StarList = {
    display: "flex",
    gap: "4px",
}

const TextStyle = {
    lineHeight: "1",
    margin: "0",
}

const StarRating: FC<StarRatingProps> = ({maxSize = 10}) => {
    return (
        <div style={StarContainer}>
            <div style={StarList}>
                {
                    Array.from({length: maxSize}, (_, i) => (
                        <span key={i}>★</span>
                    ))
                }
            </div>
            <p style={TextStyle}>10</p>
        </div>
    );

}

export default StarRating;

type StarRatingProps = {
    maxSize?: number;
};
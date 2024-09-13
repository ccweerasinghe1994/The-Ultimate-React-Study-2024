import {FC, useState} from "react";
import Star from "./Star";

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

    const [rating, setRating] = useState<number>();
    const [tempRating, setTempRating] = useState<number>();
    const handleRating = (rate: number) => {
        setRating(rate);
    }

    return (
        <div style={StarContainer}>
            <div style={StarList}>
                {
                    Array.from({length: maxSize}, (_, i) => {
                        return (
                            <Star onHoverIn={() => setTempRating(i + 1)} onHoverOut={() => setTempRating(0)}
                                  filled={tempRating && tempRating >= i + 1 || typeof rating === 'number' && rating >= i + 1}
                                  onRating={() => handleRating(i + 1)} key={i}/>
                        );
                    })
                }
            </div>
            <p style={TextStyle}>{tempRating || rating || ""}</p>
        </div>
    );

}

export default StarRating;

type StarRatingProps = {
    maxSize?: number;
};
import {FC, useState} from "react";
import Star from "./Star";


const StarContainer = {
    display: "flex",
    gap: "6px",
    alignItems: "center",
};

const StarList = {
    display: "flex",
    gap: "4px",
}


const StarRating: FC<StarRatingProps> = ({

                                             color = "#000",
                                             textColor = "#000",
                                             size = 12,
                                             messages = [],
                                             maxRating = 5,
                                             onSetRating,
                                             className = "",
                                             defaultRating = 0
                                         }) => {

    const [rating, setRating] = useState<number>(defaultRating);
    const [tempRating, setTempRating] = useState<number>();
    const handleRating = (rate: number) => {
        setRating(rate);
    }
    const TextStyle = {
        lineHeight: "1",
        margin: "0",
        color: textColor,
        fontSize: `${size}px`,
    }
    return (
        <div style={StarContainer} className={className}>
            <div style={StarList}>
                {
                    Array.from({length: maxRating}, (_, i) => {
                        return (
                            <Star size={size} color={color} onHoverIn={() => setTempRating(i + 1)}
                                  onHoverOut={() => setTempRating(0)}
                                  filled={tempRating && tempRating >= i + 1 || typeof rating === 'number' && rating >= i + 1}
                                  onRating={() => {
                                      handleRating(i + 1)
                                      onSetRating(i + 1)

                                  }} key={i}/>
                        );
                    })
                }
            </div>
            <p style={TextStyle}>{(messages.length === maxRating && messages[tempRating ? tempRating - 1 : rating ? rating - 1 : 0]) || tempRating || rating || ""}</p>
        </div>
    );

}

export default StarRating;

type StarRatingProps = {
    color?: string;
    textColor?: string;
    size?: number;
    messages?: string[];
    maxRating?: number;
    onSetRating: (rating: number) => void;
    className?: string;
    defaultRating?: number;
};
import {StrictMode, useState} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import StarRating from "./components/StarRating";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        {/*<App />*/}
        <Test/>

    </StrictMode>,
)


function Test() {
    const [rating, setRating] = useState<number>(0);

    return (
        <div>
            <StarRating defaultRating={5} className={"test"} onSetRating={setRating} color={"red"} textColor={"red"}
                        messages={["Bad", "Okay", "Good", "Very Good", "Amazing"]} maxRating={5}/>
            <h2>Your App has a rating of {rating} </h2>
        </div>
    )
}
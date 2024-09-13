import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import StarRating from "./components/StarRating";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        {/*<App />*/}
        <StarRating maxSize={5}/>

    </StrictMode>,
)

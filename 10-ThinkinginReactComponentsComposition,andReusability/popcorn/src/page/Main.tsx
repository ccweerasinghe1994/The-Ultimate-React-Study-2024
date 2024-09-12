import {FC} from "react";
import ListBox from "./ListBox";
import WatchBox from "./WatchBox";

type PropsMain = {}


const Main: FC<PropsMain> = () => {


    return (
        <main className="main">
            <ListBox/>
            <WatchBox/>
        </main>
    )
}

export default Main;
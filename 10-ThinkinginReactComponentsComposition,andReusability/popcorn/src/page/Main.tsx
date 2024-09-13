import {FC, ReactNode} from "react";


const Main: FC<PropsMain> = ({children}) => {


    return (
        <main className="main">
            {children}

        </main>
    )
}

export default Main;

type PropsMain = {
    children: ReactNode;
}
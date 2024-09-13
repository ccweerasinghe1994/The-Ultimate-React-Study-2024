import {FC, ReactNode, useState} from "react";


const Box: FC<PropsListBox> = ({children}) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="box">
            <button
                className="btn-toggle"
                onClick={() => setIsOpen((open) => !open)}
            >
                {isOpen ? "–" : "+"}
            </button>
            {isOpen && (children)}
        </div>
    )
};

export default Box;


type PropsListBox = {
    children: ReactNode
}
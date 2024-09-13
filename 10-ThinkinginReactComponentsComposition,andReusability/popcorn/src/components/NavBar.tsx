import {FC, ReactNode} from "react";
import Logo from "./Logo";

const NavBar: FC<PropsNavBar> = ({children}) => {

    return (
        <nav className="nav-bar">
            <Logo/>
            {children}
        </nav>
    )
}

export default NavBar;

type PropsNavBar = {
    children: ReactNode;

}
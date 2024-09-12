import {FC} from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NumResults from "./NumResults";

const NavBar: FC = () => {

    return (
        <nav className="nav-bar">
            <Logo/>
            <SearchBar/>
            <NumResults/>
        </nav>
    )
}

export default NavBar;


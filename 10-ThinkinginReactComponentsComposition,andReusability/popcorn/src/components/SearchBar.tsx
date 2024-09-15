import {FC} from "react";

type PropsSearchBar = {
    query: string;
    setQuery: (query: string) => void;
}

const SearchBar: FC<PropsSearchBar> = ({setQuery, query}) => {


    return <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
    />
}

export default SearchBar;
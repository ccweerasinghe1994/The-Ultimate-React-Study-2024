import {FC} from "react";

type Item = {
    id: number;
    description: string;
    quantity: number;
    packed: boolean;
};


const initialItems: Item[] = [
    {id: 1, description: "Passports", quantity: 2, packed: false},
    {id: 2, description: "Socks", quantity: 12, packed: true},
];

function App() {
    return (
        <div className={'app'}>
            <Logo/>
            <Form/>
            <PackingList/>
            <Stats/>
        </div>
    )
}

const Logo = () => {
    return (
        <h1> 🌴 Far Away 💼</h1>
    )
};
const Form = () => {
    return (
        <div className={'add-form'}>
            <h3>What is you need for your trip ?</h3>
        </div>
    )
};
const PackingList = () => {
    return (
        <div className={'list'}>
            <ul>
                {initialItems.map(item => <Item key={item.id} item={item}/>)}
            </ul>
        </div>
    )
};

type Props = {
    item: Item;
};

const Item: FC<Props> = ({item}) => {
    return (
        <li>
            <span style={item.packed ? {textDecoration: 'line-through'} : {}}>
            {item.quantity} {item.description}
            </span>
            <button>❌</button>
        </li>
    )
}


const Stats = () => {
    return (
        <footer className={'stats'}>
            <em>
                You Have X items on your list, and you already packed X
            </em>
        </footer>
    )
};


export default App

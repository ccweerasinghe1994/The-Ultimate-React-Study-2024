import {FC, FormEvent, useState} from "react";

type Item = {
    id: number;
    description: string;
    quantity: number;
    packed: boolean;
};


type PropsItem = {
    item: Item;
    onDelete: (id: number) => void;
    onChange: (id: number) => void;
};


type PropsForm = {
    onAddItem: (item: Item) => void;
}

type PropsPackagingList = {
    items: Item[];
    onDelete: (id: number) => void;
    onChange: (id: number) => void;

}

type PropsStats = {
    items: Item[]
}


function App() {

    const [items, setItems] = useState<Item[]>([]);

    const handleAddItem = (item: Item) => {
        setItems([...items, item]);
    }
    const handleDeleteItem = (id: number) => {
        setItems(items.filter(item => item.id !== id));
    }

    const handleItemChange = (id: number) => {
        setItems(items.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    packed: !item.packed
                }
            }
            return item;
        }))
    };

    return (
        <div className={'app'}>
            <Logo/>
            <Form onAddItem={handleAddItem}/>
            <PackingList onDelete={handleDeleteItem} items={items} onChange={handleItemChange}/>
            <Stats items={items}/>
        </div>
    )
}

const Logo = () => {
    return (
        <h1> 🌴 Far Away 💼</h1>
    )
};

const Form: FC<PropsForm> = ({onAddItem}) => {

    const [description, setDescription] = useState<string>('');
    const [quantity, setQuantity] = useState<number>(1);


    const reset = () => {
        setDescription('');
        setQuantity(1);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!description) return;

        const newItem: Item = {
            id: new Date().getTime(),
            description,
            quantity,
            packed: false
        }

        onAddItem(newItem);
        reset();

    }

    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        setDescription(e.currentTarget.value);
    }

    return (
        <form onSubmit={handleSubmit} className={'add-form'}>
            <h3>What is you need for your trip ?</h3>
            <select value={quantity} onChange={event => setQuantity(+event.target.value)}>
                {
                    Array.from({length: 20}, (_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))
                }
            </select>
            <input type="text" placeholder={"type a item here"} value={description} onChange={handleChange}/>
            <button>add</button>
        </form>
    )
};


const PackingList: FC<PropsPackagingList> = ({items, onDelete, onChange}) => {
    return (
        <div className={'list'}>
            <ul>
                {items.map(item => <Item onDelete={onDelete} key={item.id} item={item} onChange={onChange}/>)}
            </ul>
        </div>
    )
};


const Item: FC<PropsItem> = ({item, onDelete, onChange}) => {
    return (
        <li>
            <input type="checkbox" value={item.packed.toString()} onChange={() => onChange(item.id)}/>
            <span style={item.packed ? {textDecoration: 'line-through'} : {}}>
            {item.quantity} {item.description}
            </span>
            <button onClick={() => onDelete(item.id)}>❌</button>
        </li>
    )
}


const Stats: FC<PropsStats> = ({items}) => {

    if (!items.length) {
        return <footer className={'stats'}>Start adding items to your packing list 😊 </footer>
    }

    const totalItems = items.length;
    const pickedItems = items.filter(item => item.packed).length;
    const percentage = (pickedItems / totalItems) * 100;
    const completeMessage = "You are ready to go! ✈️";
    const incompleteMessage = `You Have ${totalItems} items on your list, and you already packed ${pickedItems}(${percentage}%)`
    return (
        <footer className={'stats'}>
            <em>
                {
                    percentage === 100 ? completeMessage : incompleteMessage
                }
            </em>
        </footer>
    )
};


export default App

import {useState} from "react";
import Logo from "./Logo.tsx";
import Stats from "./Stats.tsx";
import PackingList from "./PackageList.tsx";
import Form from "./Form.tsx";

export type TItem = {
    id: number;
    description: string;
    quantity: number;
    packed: boolean;
};


function App() {

    const [items, setItems] = useState<TItem[]>([]);

    const handleAddItem = (item: TItem) => {
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
    const onClearPackingList = () => {
        setItems([]);
    }
    return (
        <div className={'app'}>
            <Logo/>
            <Form onAddItem={handleAddItem}/>
            <PackingList handleClearPackingList={onClearPackingList} onDelete={handleDeleteItem} items={items}
                         onChange={handleItemChange}/>
            <Stats items={items}/>
        </div>
    )
}


export default App

import {FC, useState} from "react";
import Items from "./Items.tsx";
import {TItem} from "./App.tsx";

const PackingList: FC<PropsPackagingList> = ({items, onDelete, onChange, handleClearPackingList}) => {

    const [sortBy, setSortBy] = useState<string>('input');

    let sortedItems: TItem[] = [...items];

    if (sortBy === 'description') {
        sortedItems.sort((a, b) => a.description.localeCompare(b.description))
    }

    if (sortBy === 'unpacked') {
        sortedItems.sort((a, b) => Number(b.packed) - Number(a.packed))
    }

    if (sortBy === 'input') {
        sortedItems = items;
    }


    return (
        <div className={'list'}>
            <ul>
                {sortedItems.map(item => <Items onDelete={onDelete} key={item.id} item={item} onChange={onChange}/>)}
            </ul>
            <div className="actions">
                <select name="" id="" value={sortBy} onChange={e => setSortBy(e.target.value)}>
                    <option value="input">input</option>
                    <option value="description">description</option>
                    <option value="unpacked">unpacked</option>
                </select>
                <button onClick={handleClearPackingList}>clear list</button>
            </div>
        </div>
    )
};

export default PackingList;

type PropsPackagingList = {
    items: TItem[];
    onDelete: (id: number) => void;
    onChange: (id: number) => void;
    handleClearPackingList: () => void;
}

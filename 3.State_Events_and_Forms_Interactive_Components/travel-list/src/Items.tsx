import {FC} from "react";
import {TItem} from "./App.tsx";

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
export default Item;


type PropsItem = {
    item: TItem;
    onDelete: (id: number) => void;
    onChange: (id: number) => void;
};
import {FC} from "react";
import {TItem} from "./App.tsx";

type PropsStats = {
    items: TItem[]
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

export default Stats
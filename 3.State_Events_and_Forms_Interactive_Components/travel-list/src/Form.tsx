import {FC, FormEvent, useState} from "react";
import {TItem} from "./App.tsx";

type PropsForm = {
    onAddItem: (item: TItem) => void;
}

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

        const newItem: TItem = {
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
export default Form;
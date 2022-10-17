import { useContext } from "react";
import { useState } from "react";
import ClotheContext from "../../Context/ClothesContext";
import List from "./List";

function Create(){

    const [color, setColor] = useState('#000000');
    const [type, setType] = useState('pants');
    const [price, setPrice] = useState('0');

    const { setSaveData } = useContext(ClotheContext);

    const saveClothing = () =>{
        setSaveData({
            type,
            color,
            price,
        });
        setType('pants');
        setColor('#000000');
        setPrice('');
    }

    return(
        <div className="create">
            <div className="new-clothing-container">
                <h2>Create new clothing</h2>
                <input type='color' value={color} className="input-color" onChange={e => setColor(e.target.value)}></input>
                <input type='text' className='input-text' value={color} disabled></input>
                <select className="input-select" value={type} onChange={e => setType(e.target.value)}>
                    <option value='pants'>Pants</option>
                    <option value='skirt'>Skirt</option>
                </select>
                <input type='text' className='input-text' value={price} onChange={e => setPrice(e.target.value)}></input>
                <input type='file' className="btn file-input"></input>
                <button className='btn' onClick={saveClothing}>Create</button>
            </div>
            <List />
        </div>
    )
}

export default Create;
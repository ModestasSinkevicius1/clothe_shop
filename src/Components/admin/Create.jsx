import { useContext, useRef, useState } from "react";
import ClotheContext from "../../Context/ClothesContext";
import getBase64 from "../../Functions/getBase64";
import ShowNav from "../ShowNav";
import List from "./List";
import { isNumber, checkLength } from "../../Functions/doValid.js";
import delImg from '../../assets/img/x.svg';
import Delete from "../client/Delete";

function Create(){

    const [color, setColor] = useState('#000000');
    const [type, setType] = useState('pants');
    const [price, setPrice] = useState('0');
    const [photoPrint, setPhotoPrint] = useState(null);

    const fileInput = useRef();

    const { setSaveData, types } = useContext(ClotheContext);

    const saveClothing = () =>{
        setSaveData({
            type,
            color,
            price: price === '' ? 0 : parseFloat(price),
            image: photoPrint,
        });
        setType('pants');
        setColor('#000000');
        setPrice('0');
        setPhotoPrint(null);
    }

    const checkInput = (e) => {
        if(!isNumber(e.target.value) && checkLength(e.target.value, 5))
            setPrice(e.target.value);
        return;
    }

    const doPhoto = () => {
        getBase64(fileInput.current.files[0])
        .then(photo => setPhotoPrint(photo))
        .catch(_ => {})
    }

    return(
        <>
            <ShowNav />
            <div className="create">
                <div className="new-clothing-container container">
                    <h2>Create new clothing</h2>
                    <div className="new-clothing-container-inputs">
                        <div className="new-clothing-label-container">
                            <label>Color pick:</label>
                            <div>
                                <input type='color' value={color} className="input-color" onChange={e => setColor(e.target.value)}></input>
                                <input type='text' className='input-text input-text-color' value={color} disabled></input>
                            </div>
                        </div>
                        <div className="new-clothing-label-container">
                            <label>Type:</label>
                            <select className="input-select" value={type} onChange={e => setType(e.target.value)}>
                                {types.map((t, i) => <option key={i} value={t.toLowerCase()}>{t}</option>)}
                            </select>
                        </div>
                        <div className="new-clothing-label-container">
                            <label>Price(&euro;):</label>
                            <input type='text' className='input-text' value={price} onChange={e => checkInput(e)}></input>
                        </div>
                        <div className="new-clothing-label-container">
                            <label>Image pick:</label>
                            <div className="image-control">
                                <input type='file' ref={fileInput} className="btn file-input" onChange={doPhoto}></input>
                                {photoPrint ?
                                <div className="image-preview">
                                    <img className="remove-img" src={delImg} alt='Remove img' onClick={() => setPhotoPrint(null)}></img>
                                    <img src={photoPrint} alt='Preview'></img>
                                </div>
                                : null}
                            </div>
                        </div>
                        <div className="new-clothing-label-container">
                            <button className='btn create-btn' onClick={saveClothing}>Create</button>
                        </div>
                    </div>
                </div>
                <List />
                <Delete />
            </div>
        </>
    )
}

export default Create;
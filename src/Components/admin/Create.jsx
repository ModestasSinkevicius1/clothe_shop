import { useContext, useRef, useState } from "react";
import ClotheContext from "../../Context/ClothesContext";
import getBase64 from "../../Functions/getBase64";
import ShowNav from "../ShowNav";
import List from "./List";

function Create(){

    const [color, setColor] = useState('#000000');
    const [type, setType] = useState('pants');
    const [price, setPrice] = useState('0');
    const [photoPrint, setPhotoPrint] = useState(null);

    const fileInput = useRef();

    const { setSaveData } = useContext(ClotheContext);

    const saveClothing = () =>{
        setSaveData({
            type,
            color,
            price,
            image: photoPrint,
        });
        setType('pants');
        setColor('#000000');
        setPrice('');
        setPhotoPrint(null);
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
                <div className="new-clothing-container">
                    <h2>Create new clothing</h2>
                    <div className="new-clothing-container-inputs">
                        <input type='color' value={color} className="input-color" onChange={e => setColor(e.target.value)}></input>
                        <input type='text' className='input-text' value={color} disabled></input>
                        <select className="input-select" value={type} onChange={e => setType(e.target.value)}>
                            <option value='pants'>Pants</option>
                            <option value='skirt'>Skirt</option>
                        </select>
                        <input type='text' className='input-text' value={price} onChange={e => setPrice(e.target.value)}></input>
                        <div className="image-control">
                            <input type='file' ref={fileInput} className="btn file-input" onChange={doPhoto}></input>
                            {photoPrint ?
                            <div className="image-preview">
                                <span onClick={() => setPhotoPrint(null)}>Remove</span>
                                <img src={photoPrint} alt='Preview'></img>
                            </div>
                            : null}
                        </div>
                        <button className='btn create-btn' onClick={saveClothing}>Create</button>
                    </div>
                </div>
                <List />
            </div>
        </>
    )
}

export default Create;
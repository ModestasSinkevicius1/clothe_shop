import { useRef } from "react";
import { useState } from "react";

function Create(){

    const [color, setColor] = useState(null);
    const colorCode = useRef(null)

    return(
        <div className="create">
            <input type='color' value={color} className="input-color" onChange={e => setColor(e.target.value)}></input>
            <input type='text' className='input-text' disabled>{colorCode.current}</input>
            <select>
                <option value='pants'>Pants</option>
                <option value='skirt'>Skirt</option>
            </select>
            <input type='text' className='input-text'></input>
            <input type='file'></input>
        </div>
    )
}

export default Create;
import { useContext } from "react";
import ClotheContext from "../../Context/ClothesContext";

function ListItem({ clothing, setDeleteData }){

    const { setModalOrder } = useContext(ClotheContext);

    return(
        <div className="list-item">
            <span>{clothing.id}.</span>
            <div className="list-color-container">
                <span>{clothing.color}</span>
                <div className="list-color-display" style={{backgroundColor: clothing.color}}></div>
            </div>
            <span>{clothing.type}</span>
            <span>{clothing.price}&euro;</span>
            <button className="btn" onClick={() => setModalOrder(clothing)}>Select</button>
        </div>
    );
}

export default ListItem;
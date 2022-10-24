import { useContext } from "react";
import ClotheContext from "../../Context/ClothesContext";
import noImage from '../../assets/img/no-image.svg'

function ListItem({ clothing }){

    const { setModalOrder } = useContext(ClotheContext);

    return(
        <div className="card-item">
            <div className="card-image-container">
                {clothing.image ?
                <img src={clothing.image} alt={clothing.type}></img> :
                <img src={noImage} alt='no imeg'></img>}
            </div>
            <div className="list-color-container">
                <span>{clothing.color}</span>
                <div className="list-color-display" style={{backgroundColor: clothing.color}}></div>
            </div>
            <span>{clothing.type}</span>
            <span className="card-price">{clothing.price}&euro;</span>
            <button className="btn card-btn" onClick={() => setModalOrder(clothing)}>Select</button>
        </div>
    );
}

export default ListItem;
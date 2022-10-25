import noImage from '../../assets/img/no-image.svg';
import del from '../../assets/img/x.svg';

function ListItem({ clothing, setDeleteData }){

    return(
        <div className="list-item list-item-clothes">
            <span>{clothing.id}.</span>
            {clothing.image ?
            <img src={clothing.image} alt={clothing.type}></img>
            :
            <img src={noImage} alt='no imeg'></img>
            }
            <div className="list-color-container">
                <span>{clothing.color}</span>
                <div className="list-color-display" style={{backgroundColor: clothing.color}}></div>
            </div>
            <span>{clothing.type}</span>
            <span>{clothing.price}&euro;</span>
            <button className="btn" onClick={() => setDeleteData(clothing)}>Delete</button>
            <img className="create-btn-top" src={del} alt="Delete" onClick={() => setDeleteData(clothing)}></img>
        </div>
    );
}

export default ListItem;
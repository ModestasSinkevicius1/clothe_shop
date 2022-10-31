import noImage from '../../assets/img/no-image.svg';
import del from '../../assets/img/x.svg';

function ListItem({ clothing, setModalDelete }){
    
    return(
        <div className="list-item list-item-clothes row align-items-center text-center h-35 p-3">
            <span className='col'>{clothing.id}.</span>
            {clothing.image ?
            <img src={clothing.image} alt={clothing.type}></img>
            :
            <img src={noImage} alt='no imeg'></img>
            }
            <div className="list-color-container col">
                <span>{clothing.color}</span>
                <div className="list-color-display" style={{backgroundColor: clothing.color}}></div>
            </div>
            <span>{clothing.type}</span>
            <span>{clothing.price}&euro;</span>
            <button className="btn" onClick={() => setModalDelete(clothing)}>Delete</button>
            <img className="create-btn-top" src={del} alt="Delete" onClick={() => setModalDelete(clothing)}></img>
        </div>
    );
}

export default ListItem;
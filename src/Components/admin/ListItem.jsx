import noImage from '../../assets/img/no-image.svg';
import del from '../../assets/img/x.svg';

function ListItem({ clothing, setDeleteData }){

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
            <span className='col'>{clothing.type}</span>
            <span className='col'>{clothing.price}&euro;</span>
            <button className="btn col-1 bg-light d-lg-inline d-md-none d-sm-none d-xs-none d-none" onClick={() => setDeleteData(clothing)}>Delete</button>
            <img className="create-btn-top d-lg-none" src={del} alt="Delete" onClick={() => setDeleteData(clothing)}></img>
        </div>
    );
}

export default ListItem;
function ListItem({ clothing, setDeleteData }){
    return(
        <div className="list-item">
            <span>{clothing.id}.</span>
            <div className="list-color-container">
                <span>{clothing.color}</span>
                <div className="list-color-display" style={{backgroundColor: clothing.color}}></div>
            </div>
            <span>{clothing.type}</span>
            <span>{clothing.price}&euro;</span>
            <button className="btn" onClick={() => setDeleteData(clothing)}>Delete</button>
        </div>
    );
}

export default ListItem;
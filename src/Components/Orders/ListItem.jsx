function ListItem({ order, setDeleteOrder }){
    return(
        <div className="list-item">
            <span>{order.id}.</span>
            <span className="myOrder-size">{order.size}</span>
            <span className="myOrder-comment">{order.comment}</span>
            <span>{order.type}</span>
            <div className="list-color-container">
                <span>{order.color}</span>
                <div className="list-color-display" style={{backgroundColor: order.color}}></div>
            </div>     
            <span>{order.price}&euro;</span>
            <button className="btn" onClick={() => setDeleteOrder(order)}>Delete</button>
        </div>
    );
}

export default ListItem;
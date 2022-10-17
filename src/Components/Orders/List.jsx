import { useContext } from "react";
import ClotheContext from "../../Context/ClothesContext";
import ListItem from "./ListItem";

function List(){

    const { setDeleteOrder, orders } = useContext(ClotheContext);

    return(
        <div className="list">
            <h2 className="list-title">Orders</h2>
            <div className="list-container">
                <div className="list-header-container list-item">
                    <span className="list-header">ID</span>
                    <span className="list-header">Size</span>
                    <span className="list-header list-header-comment">Comment</span>
                    <span className="list-header">Clothe type</span>
                    <span className="list-header list-header-color">Color</span>
                    <span className="list-header">Price</span>
                </div>
                {orders !== 'error' ? orders?.map(o => <ListItem key={o.id} order={o} setDeleteOrder={setDeleteOrder} />) : null}
            </div>                      
        </div>
    );
}

export default List;
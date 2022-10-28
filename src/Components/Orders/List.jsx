import { useContext } from "react";
import ClotheContext from "../../Context/ClothesContext";
import ListItem from "./ListItem";

function List(){

    const { setDeleteOrder, orders, setUpdateOrder, stats, currentPage } = useContext(ClotheContext);

    return(
        <div className="list">
            <div className="stats-container">
                <h2 className="list-title">Orders</h2>         
                <h2 className="list-title">Total spent: {stats?.reduce((a, b) => a + b, 0)}&euro;</h2>
            </div>
            {orders !== 'error' ?
            <div className="list-container">
                <div className="list-header-container list-item">
                    <span className="list-header list-item-id">ID</span>
                    <span className="list-header list-item-size myOrder-header-size">Size</span>
                    <span className="list-header list-header-comment">Comment</span>
                    <span className="list-header myOrder-header-type">Clothe type</span>
                    <span className="list-header myOrder-header-type-second">Type</span>
                    <span className="list-header list-header-color myOrder-header-color">Color</span>
                    <span className="list-header">Price</span>
                    <span className="list-header myOrder-header-status">Status</span>
                </div>
                {orders?.slice(Math.min(Math.max((currentPage * 10) - 10, 0), 100), currentPage * 10)?.map(o => <ListItem key={o.id} order={o} 
                                                    setDeleteOrder={setDeleteOrder} 
                                                    setUpdateOrder={setUpdateOrder} />)}
            </div>
            : <h3>Failed to get orders</h3>}                      
        </div>
    );
}

export default List;
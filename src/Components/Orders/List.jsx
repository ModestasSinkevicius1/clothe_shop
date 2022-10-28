import { useContext } from "react";
import ClotheContext from "../../Context/ClothesContext";
import ListItem from "./ListItem";

function List(){

    const { setDeleteOrder, orders, setUpdateOrder, stats, status } = useContext(ClotheContext);

    return(
        <div className="list container">
            <div className="stats-container">
                <h2 className="list-title">Orders</h2>         
                <h2 className="list-title">Total spent: {stats?.reduce((a, b) => a + b, 0)}&euro;</h2>
            </div>
            {orders !== 'error' ?
            <div className="list-container">
                <table class="table table- table-sm">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Size</th>
                        <th scope="col" className="d-lg-inline d-md-inline d-none">Comment</th>
                        <th scope="col">Type</th>
                        <th scope="col">Color</th>
                        <th scope="col">Price</th>
                        <th scope="col">Status</th>
                        {status === 3 ?
                        <th scope="col">Options</th>
                        : null}
                        </tr>
                    </thead>                  
                    {orders?.map(o => <ListItem key={o.id} order={o} 
                                                        setDeleteOrder={setDeleteOrder} 
                                                        setUpdateOrder={setUpdateOrder} />)}
                </table>
            </div>
            : <h3>Failed to get orders</h3>}                      
        </div>
    );
}

export default List;
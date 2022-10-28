import { useState } from "react";
import { useContext } from "react";
import ClotheContext from "../../Context/ClothesContext";

function ListItem({ order, setDeleteOrder, setUpdateOrder }){

    const { status } = useContext(ClotheContext);

    const [stage, setStage] = useState(order.status);
    
    const updateOrderStatus = () => {
        setUpdateOrder({
            id: order.id,
            status: stage,
        });
    }

    return(
        <tbody>
            <tr>
            <th scope="row">{order.id}.</th>
            <td className="text-capitalize">{order.size}</td>
            <td className="d-lg-inline d-md-inline d-none">{order.comment}</td>
            <td>{order.type}</td>
            <td>
                <span>{order.color}</span>
                <div className="list-color-display" style={{backgroundColor: order.color}}></div>
            </td>
            <td className="fw-bold">{order.price} &euro;</td>
            <td>
                {status === 3 ?
                    <select className="input-select myOrder-status" value={stage} onChange={e => setStage(e.target.value)}>
                        <option value={'Awaiting'}>Awaiting</option>
                        <option value={'Confirmed'}>Confirmed</option>
                        <option value={'Working'}>Working</option>
                        <option value={'Packaging'}>Packaging</option>
                        <option value={'Sent'}>Sent</option>
                        <option value={'Completed'}>Completed</option>
                    </select> :
                    order.status
                }
            </td>
            {status === 3 ? 
                <td>
                    <button className="btn btn-order bg-light" onClick={() => updateOrderStatus(order)}>Update</button>
                    <button className="btn btn-order bg-light" onClick={() => setDeleteOrder(order)}>Delete</button>
                </td>
            : null}
            </tr>
        </tbody>
    );
}

export default ListItem;
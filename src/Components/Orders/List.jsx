import { useContext } from "react";
import ClotheContext from "../../Context/ClothesContext";
import ListItem from "./ListItem";

function List(){

    const { clothes, setDeleteData } = useContext(ClotheContext);

    return(
        <div className="list">
            <h2 className="list-title">Orders</h2>
            <div className="list-header-container">
                <span className="list-header">ID</span>
                <span className="list-header">Size</span>
                <span className="list-header">Comment</span>
                <span className="list-header">Clothes info</span>
            </div>
            { clothes?.map(c => <ListItem key={c.id} clothing={c} setDeleteData={setDeleteData} />)}                      
        </div>
    );
}

export default List;
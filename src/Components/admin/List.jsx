import { useContext } from "react";
import ClotheContext from "../../Context/ClothesContext";
import ListItem from "./ListItem";

function List(){

    const { clothes, setDeleteData } = useContext(ClotheContext);

    return(
        <div className="list">
            {clothes !== 'error' ?
            <div>
                <h2 className="list-title">Clothes</h2>
                <div className="list-header-container list-item">
                    <span className="list-header">ID</span>
                    <span className="list-header list-header-image">Image</span>
                    <span className="list-header">Color</span>
                    <span className="list-header">Type</span>
                    <span className="list-header">Price</span>
                </div>
                { clothes?.map(c => <ListItem key={c.id} clothing={c} setDeleteData={setDeleteData} />)}
            </div>
            : <h3>Failed to get clothes</h3>}                      
        </div>
    );
}

export default List;
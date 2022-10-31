import { useContext } from "react";
import ClotheContext from "../../Context/ClothesContext";
import ListItem from "./ListItem";

function List(){

    const { clothes, setModalDelete } = useContext(ClotheContext);

    return(
        <div className="list container">
            {clothes !== 'error' ?
            <div>
                <h2 className="list-title">Clothes</h2>
                <div className="list-header-container list-item container">
                    <div className="row">
                        <span className="list-header col">ID</span>
                        <span className="list-header list-header-image col">Image</span>
                        <span className="list-header col">Color</span>
                        <span className="list-header col">Type</span>
                        <span className="list-header col">Price</span>
                        <div className="col-1"></div>
                    </div>
                </div>
           
                { clothes?.map(c => <ListItem key={c.id} clothing={c} setModalDelete={setModalDelete} />)}
            </div>
            : <h3>Failed to get clothes</h3>}                      
        </div>
    );
}

export default List;
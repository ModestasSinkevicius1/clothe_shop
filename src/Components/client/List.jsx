import { useContext } from "react";
import ClotheContext from "../../Context/ClothesContext";
import ListItem from "./ListItem";

function List(){

    const { clothes, setDeleteData } = useContext(ClotheContext);

    return(
        <div className="list">
            <h2 className="list-title">Clothes</h2>
            <div className="list-item">
              <span>ID</span>
              <span className="list-header-color">Color</span>
              <span>Type</span>
              <span>Price</span>
            </div>
            { clothes?.map(c => <ListItem key={c.id} clothing={c} setDeleteData={setDeleteData} />)}          
        </div>
    );
}

export default List;
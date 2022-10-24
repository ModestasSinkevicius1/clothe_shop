import { useContext } from "react";
import ClotheContext from "../../Context/ClothesContext";
import ListItem from "./ListItem";

function List() {
  const { clothes } = useContext(ClotheContext);

  return (
    <div className="list">
      <h2 className="list-title-home">Clothes</h2>
      {clothes !== "error" ? (
        <div className="card-container">
          { clothes?.map(c => c.show ? <ListItem key={c.id} clothing={c} /> : null) }
        </div>
      ) : (
        <h3>Failed to get clothes</h3>
      )}
    </div>
  );
}

export default List;

import { useContext } from "react";
import ClotheContext from "../../Context/ClothesContext";

function List() {
  const { clothes } = useContext(ClotheContext);

  return (
    <div className="list">
      <h1>Working</h1>
      {clothes !== "error" ? (
        clothes?.map((c) => (
          <ul>
            <li>{c.color}</li>
          </ul>
        ))
      ) : (
        <spam>Failed to get clothes</spam>
      )}
    </div>
  );
}

export default List;

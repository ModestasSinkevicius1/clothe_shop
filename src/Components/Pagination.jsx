import { useContext } from "react";
import ClotheContext from "../Context/ClothesContext";

function Pagination(){

  const { orders, setCurrentPage, currentPage } = useContext(ClotheContext);

  const pageInterval = 2;

  const pageShow = 2;

  const maxPage = () => {
    return Math.ceil(orders?.length/10);
  }

  const sliceOrders = (pageNum) =>{
    if(pageNum <= pageCount.length && pageNum > 0)
      setCurrentPage(pageNum);
    return;
  }

  const pageCount = orders ? [...Array(10)] : [];

  console.log(currentPage, pageInterval);

  return (
    <div className="pagination">
      <span onClick={() => sliceOrders(currentPage - 1)}>{"<"}</span>
      <span
        className={currentPage === 1 ? "page active" : "page"}
        onClick={() => sliceOrders(1)}
      >
        1
      </span>
      {currentPage > pageInterval ? <span>...</span> : null}
      {pageCount.map((_, i) =>
        i + 1 !== 1 &&
        i + 1 < pageShow + currentPage &&
        i + 1 > currentPage - pageShow ? (
          <span
            className={currentPage === i + 1 ? "page active" : "page"}
            key={i}
            onClick={() => sliceOrders(i + 1)}
          >
            {i + 1}
          </span>
        ) : null
      )}
      {currentPage < 10 - pageInterval ? <span>...</span> : null}
      {currentPage + pageInterval <= 10 ? <span
        className={currentPage === 10 ? "page active" : "page"}
        onClick={() => sliceOrders(10)}
      >
        {10}
      </span>
      : null}
      <span onClick={() => sliceOrders(currentPage + 1)}>{">"}</span>
    </div>
  );
}

export default Pagination;
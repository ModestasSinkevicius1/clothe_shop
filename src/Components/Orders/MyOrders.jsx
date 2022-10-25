import ShowNav from "../ShowNav";
import List from "./List";

function MyOrders(){
    return(
        <>
            <ShowNav />
            <div className="my-orders">
                <List />
            </div>
        </>
    );
}

export default MyOrders;
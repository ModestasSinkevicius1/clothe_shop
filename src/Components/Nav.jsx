import { NavLink } from "react-router-dom";

function Nav({status}) {

    return (       
        <nav>
            <div className="nav-control">
                <NavLink end to="/home" className={ ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>      
                <NavLink to="/home/clothes" className={ ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Clothes</NavLink>
                <NavLink to="/home/orders" className={ ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>My Orders</NavLink>
            </div>
            <div className="nav-control nav-credentials">
                <NavLink end to="/login" className={ ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Login</NavLink>
                <span className="nav-user">User</span>
            </div>
        </nav>  
    );
}

export default Nav;
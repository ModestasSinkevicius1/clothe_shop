import { NavLink } from "react-router-dom";

function Nav({status}) {

    return (       
        <nav>
            <div className="nav-control">
                <NavLink to="/home" className={ ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>      
                <NavLink to="/home/clothes" className={ ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Clothes</NavLink>
            </div>
        </nav>  
    );
}

export default Nav;
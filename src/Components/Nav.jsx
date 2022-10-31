import { NavLink } from "react-router-dom";

function Nav({status}) {
    return (       
        <nav className="container">
            <div className="nav-control row text-center align-items-center justify-content-between">
                {status === 2 || status === 3 ? 
                    <div className="col">
                        <NavLink end to="/home" className={ ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>         
                    </div>
                : null}
                {status === 3 ? 
                    <div className="col">     
                        <NavLink to="/home/clothes" className={ ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Clothes</NavLink>                  
                    </div>
                : null}
                {status === 2 || status === 3 ? 
                    <div className="col">
                        <NavLink to="/home/orders" className={ ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>My Orders</NavLink> 
                    </div>
                : null}
                <div className="col-6">

                </div>
                {/*RIGHT*/}
                {status === 1 ? 
                    <div className="col-1">
                        <NavLink end to="/login" className={ ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Login</NavLink>                      
                    </div>
                : null}

                {status !== 1 ?
                    <div className="col-1">
                        <NavLink end to="/logout" className={ ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Logout</NavLink>                     
                    </div>
                : null}

                {status === 2 ?
                    <div className="col-1">
                        <span className="nav-user">Client</span>
                    </div>
                : null}

                {status === 3 ? 
                    <div className="col-1">
                        <span className="nav-user">Admin</span>                                                                                                 
                    </div>
                : null}
            </div>
        </nav>  
    );
}

export default Nav;
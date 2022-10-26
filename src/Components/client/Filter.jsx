import { useContext } from "react";
import { useState } from "react";
import ClotheContext from "../../Context/ClothesContext";

function Filter(){

    const { setClothes } = useContext(ClotheContext);

    const maxPrice = [...Array(10)].map((p, i) => ({...p}, 10 * (i + 1)));
    const [price, setPrice] = useState('any');
    const [type, setType] = useState('any');
    const [search, setSearch] = useState('');

    const doFilter = (c) =>{
        const regStr = new RegExp(`^${search}`);
        if((c.type === type || type === 'any') && (c.price <= price || price === 'any') && (regStr.test(c.type) || search === ''))
            return true;
        return false;
    }

    const filterItems = () =>{
        setClothes(clothe => clothe.map(c => doFilter(c) ? ({...c, show: true}) : ({...c, show: false})));
    }

    return(
        <div className="filter">
            <div className="filter-search">
                <input type="search" className="search-input input-text" placeholder="Search here..." value={search} onChange={e => setSearch(e.target.value)}></input>
            </div>
            <div className="filter-inputs">
                <div className="filter-input-container">
                    <label>Type</label>
                    <select className="input-select" value={type} onChange={e => setType(e.target.value)}>
                        <option value={'any'}>Any</option>
                        <option value={'pants'}>Pants</option>
                        <option value={'skirt'}>Skirt</option>
                    </select>
                </div>
                <div className="filter-input-container">
                    <label>Max price</label>
                    <select className="input-select" value={price} onChange={e => setPrice(e.target.value)}>
                        <option value={'any'}>Any</option>
                        {maxPrice.map((p, i) => <option key={i} value={p}>{p} &euro;</option>)}
                    </select>
                </div>
                <button className="btn bg-light" onClick={filterItems}>Apply</button>
            </div>
        </div>
    )
}

export default Filter;
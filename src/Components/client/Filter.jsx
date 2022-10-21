import { useState } from "react";

function Filter(){

    const maxPrice = [...Array(10)].map((p, i) => ({...p}, 10 * (i + 1)));
    const [price, setPrice] = useState('any');

    return(
        <div className="filter">
            <div className="filter-search">
                <input type="search" className="search-input input-text" placeholder="Search here..."></input>
            </div>
            <div className="filter-inputs">
                <div className="filter-input-container">
                    <label>Type</label>
                    <select className="input-select">
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
                <button className="btn">Apply</button>
            </div>
        </div>
    )
}

export default Filter;
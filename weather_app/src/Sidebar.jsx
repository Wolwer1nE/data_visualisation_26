function Sidebar({cities, cityId, onCityChange}){

return(
    <label className="field">
        City
        <select value={cityId} 
                onChange={(e)=>onCityChange(e.target.value)}>
            {cities.map((c)=>(
                <option key={c.id} value={c.id}>
                    {c.name}
                </option>
            )

            )}    
        </select>    
    </label>
)

}

export {Sidebar}
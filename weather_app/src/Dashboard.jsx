import {Sidebar} from "./Sidebar"
import {ChartSection} from "./ChartSection"

function Dashboard({
    cities, 
    cityId,
    city,
    onCityChange,
    forecast
}){
    return (<div className='dashboard'>

        <Sidebar 
        cities={cities} 
        cityId = {cityId} 
        onCityChange = {onCityChange}
        >

        </Sidebar>
        <ChartSection city={city} forecast={forecast}>

        </ChartSection>
        
    </div>);
}

export {Dashboard}
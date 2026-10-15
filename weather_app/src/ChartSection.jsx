import {Chart} from "./Chart"
function ChartSection({city, forecast}){
    return (
        <div>
            <h1>Forecast for the {city.name}</h1>
            <Chart forecast={forecast}></Chart>
        </div>

       
    )
}

export {ChartSection}
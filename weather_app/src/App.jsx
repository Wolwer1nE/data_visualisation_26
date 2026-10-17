import './App.css'

import {useState, useEffect} from "react"

import { CITIES } from "./cities"
import { fetchForecast} from "./api"

import {Dashboard} from "./Dashboard"

function App() {


  const [cityId, setCityId] = useState(CITIES[0].id);
  const [forecast, setForecast] = useState([]);
  const city = CITIES.find((c) => c.id === cityId);

  useEffect(()=>{
    const controller = new AbortController();

    fetchForecast(city,5,controller.signal)
    .then((data)=>setForecast(data))
    .catch((err)=> {
      if (!err.name !== "AbortController"){
        // Error Handling!
        // setError(err.message);
      }
    
    })
    .finally(()=>{
      if (!controller.signal.aborted){
        // We know that loading is finished
      }
    })

    // Abort the request if city was changed before 
    // we loaded data from the API
    return ()=>{
      controller.abort();
    }
  }, [cityId])

  return (
     <Dashboard cities={CITIES} 
     cityId={cityId} 
     city={city}
     onCityChange={setCityId}
     forecast={forecast}>

     </Dashboard>
  )
}

export default App

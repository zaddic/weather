import './App.css';
import { useState } from 'react';
import { fetchweather } from './api ';  
import WeatherCard from './components/weatherard';



function App() {
const [city, setCity] = useState ('');
const [weather, setWeather] = useState(null);
const [error, setError] = useState('')

const handlechange = (event) => {
  setCity(event.target.value)
};
const handleSubmit = async (event) =>{
  event.prevent.Default();
  try{
    const weather =await fetchweather(city , setError);
    setWeather(weather);
  }catch(error){
    setError('City not found');
  }
};
  return (
    <div className="App">
       <h1 className="app_heading">Weather App</h1>
       <form onSubmit={handleSubmit}>
        <input type="text"placeholder='Enter city'
        value={city} onChange={handlechange} />
        <button type='submit'>Search</button>
       </form>
       {error ? (
        <p className="error">
          {error}
        </p>) :( <WeatherCard weather={weather}/>                            

       )}

    </div>
  );
}

export default App;

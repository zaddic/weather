import axios from "axios";




export async function fetchweather (city , setError) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={a183df8aa8db06caff5c60eba7a012cb
}`;

    try{
        const response = await axios.get(url);
        setError("");
        return response.data;
    }
    catch (error){
        setError ("city not found!");
        return error;
    }
}

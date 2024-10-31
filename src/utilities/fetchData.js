import axios from 'axios';

async function fetchData(query) {



    const apiKey = import.meta.env.VITE_API_KEY;
    const apiURL = `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`;

    try {
        const data = await axios.get(apiURL);
        return data;
    }
    catch(error){
        console.log(error);
        
    }
    
}

export default fetchData;
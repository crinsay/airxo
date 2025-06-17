export const API_URL = {
    BASE_URL: "https://api.gios.gov.pl/pjp-api/v1/rest",
    headers: {
        accept: "application/json"
    }
}

export const fetchCityStations = async (city: string) => {
    try {
        const url = `${API_URL.BASE_URL}/metadata/stations?size=20&filter%5Bmiejscowosc%5D=${encodeURIComponent(city)}`;
        const response = await fetch(url, {
            method: "GET",
            headers: API_URL.headers,
        });

        if (!response.ok) {
            throw new Error(`Error fetching stations for city ${city}: ${response.statusText}`);
        }

        const result = await response.json();
        return result.results;
    } 
    catch (error) {
        console.error(error);
        throw error;
    }
}
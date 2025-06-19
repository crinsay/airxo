export const API_URL = {
    BASE_URL: "https://api.gios.gov.pl/pjp-api/v1/rest",
    headers: {
        accept: "application/json, application/ld+json",
    }
}

export const fetchCityStations = async (city: string) => {
    try {
        const url = `${API_URL.BASE_URL}/metadata/stations?size=500&filter%5Bmiejscowosc%5D=${encodeURIComponent(city)}`;
        const response = await fetch(url, {
            method: "GET",
            headers: API_URL.headers,
        });

        const contentType = response.headers.get("Content-Type");

        if (!response.ok) {
            // Try to parse JSON error if possible
            let errorDetails;
            if (contentType && contentType.includes("application/json")) {
                const errorJson = await response.json();
                errorDetails =
                    errorJson["hydra:description"] || errorJson.error || JSON.stringify(errorJson);
            } else {
                // Fallback if it's not JSON
                errorDetails = await response.text();
            }

            console.warn(`API error ${response.status}:`, errorDetails);

            //for development only:
            throw new Error(`HTTP ${response.status} - ${errorDetails}`);
        }


        // if (!response.ok) {
        //     throw new Error(`Error fetching stations for city ${city}: ${response.statusText}`);
        // }

        const result = await response.json();
        return result["Lista metadanych stacji pomiarowych"];
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}
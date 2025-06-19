export const API_URL = {
    BASE_URL: "https://public-esa.ose.gov.pl/api/v1/smog",
    headers: {
        accept: "application/json",
    }
}

export interface StationData {
    name: string;
    street: string;
    postalCode: string;
    city: string;
    pm25: number;
}

export const fetchAllStations = async (): Promise<StationData[]> => {
    try {
        const url = API_URL.BASE_URL;
        const response = await fetch(url, {
            method: "GET",
            headers: API_URL.headers,
        });


        if (!response.ok) {
            throw new Error("Error fetching stations");
        }

        const json = await response.json();
        const result: StationData[] = Array.isArray(json.smog_data) 
            ? json.smog_data.map((item: { school: any; data: any; timestamp: any; }) => ({
                ...item.school,
                ...item.data,
                postalCode: item.school.post_code,
                pm25: item.data.pm25_avg.toFixed(1),
                timestamp: item.timestamp      
            })) 
            : [];
                 
        return result;
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}
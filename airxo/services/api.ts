export const API_URL = {
    BASE_URL: "https://public-esa.ose.gov.pl/api/v1/smog",
    headers: {
        accept: "application/json",
    }
}

export interface StationData {
    id: number,
    name: string;
    street: string | null;
    city: string;
    pm25: number;
    pm10: number;
    timestamp: string;
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

        let localId = 0;

        const json = await response.json();
        const result: StationData[] = Array.isArray(json.smog_data) 
            ? json.smog_data.map((item: { school: any; data: any; timestamp: any; }) => ({
                ...item.school,
                ...item.data,
                id: ++localId,
                pm25: item.data.pm25_avg.toFixed(1),
                pm10: item.data.pm10_avg.toFixed(1),
                timestamp: item.timestamp      
            }))
            .sort((a: any, b: any) => a.city.localeCompare(b.city))
            : [];
                 
        return result;
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}

export const filterStations = (stations: StationData[] | null, query: string): StationData[] => {
    return stations?.filter(s => s.city.toLowerCase().includes(query.toLowerCase())) || [];
}
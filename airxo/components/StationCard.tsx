import { icons } from '@/constants/icons';
import { shadow } from '@/styles/shadow';
import React from 'react';
import { Text, View } from 'react-native';
import Collapsible from './Collapsible';

interface StationCardProps {
    city: string;
    name: string;
    street: string | null;
    pm25: number;
    pm10: number;
    timestamp: string;
}

function getQualityData(pm25: number): [any, string] {
    const { good, moderate, bad, unhealthy, dangerous, lethal } = icons.qualityEmojis;
    if (pm25 <= 13) return [good, "Good"];
    if (pm25 <= 35) return [moderate, "Moderate"];
    if (pm25 <= 55) return [bad, "Bad"];
    if (pm25 <= 75) return [unhealthy, "Unhealthy"];
    if (pm25 <= 110) return [dangerous, "Dangerous"];
    return [lethal, "Lethal"];
}

export default function StationCard({ city, name, street, pm25, pm10, timestamp }: StationCardProps) {

    const [icon, description] = getQualityData(pm25);

    return (
        <View>
            <Collapsible
                city={city}
                stationName={name}
                qualityEmoji={icon}
            >
                <View className="flex-column w-full">
                    <Text>{`${street || "Street unknown"}\n`}</Text>
                    <View className="bg-gray-200 w-full rounded-xl p-2" style={shadow.shadow}>
                        <Text>Quality: <Text className="text-m font-bold">{`${description}`}</Text></Text>
                        <Text>PM2.5: <Text className="text-m font-bold">{`${pm25} µg/m³`}</Text></Text>
                        <Text>PM10: <Text className="text-m font-bold">{`${pm10} µg/m³`}</Text></Text>
                    </View>
                    <Text className="text-sm">{`\nMeasurement date: ${timestamp}`}</Text>
                </View>
            </Collapsible>

        </View>
    )
}
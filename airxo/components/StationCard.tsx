import React from 'react';
import { Text, View } from 'react-native';
import Collapsible from './Collapsible';

interface StationCardProps {
    city: string;
    name: string;
    street: string;
    pm25: number;
}

export default function StationCard({ city, name, street, pm25 }: StationCardProps) {
    return (
        <View>
            <Collapsible
                title={`${city} - ${name}`}
            >
                <Text>{`PM2.5: ${pm25}`}</Text>
            </Collapsible>

        </View>
    )
}
import React from 'react';
import { Text, View } from 'react-native';

interface StationCardProps {
    id: number;
    name: string;
    address: string;
}

export default function StationCard({ id, name, address }: StationCardProps) {
  return (
    <View>
      <Text>{`${id}`} {' '}  {' '} {`${address}`}</Text>
    </View>
  )
}
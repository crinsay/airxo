import { qualityColors } from '@/constants/colors';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { ReactNode, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

interface CollapsibleProps {
    children: ReactNode;
    city: string;
    stationName: string;
    qualityEmoji: any;
}

export default function Collapsible({ children, city, stationName, qualityEmoji }: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View className="bg-background m-1 pr-10 py-2 rounded-xl">
      <TouchableOpacity
        className="flex-row items-center"
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}>
            
        <MaterialIcons
          name="chevron-right"
          color={qualityColors.lethal}
          size={24}
          weight="medium"
          style={{ transform: [{ rotate: isOpen ? '90deg' : '0deg' }] }}
        />
        <View className="flex-row w-full">
          <View className="mr-2">
            <Image source={qualityEmoji} className="w-10 h-10" />
          </View>
          <View className="flex-1 w-full"> 
            <Text className="text-xl font-bold" {...(!isOpen ? { numberOfLines: 1 } : {})}>{city}</Text>
            <Text {...(!isOpen ? { numberOfLines: 1 } : {})}>{stationName}</Text>  
          </View>
        </View>
      </TouchableOpacity>
      {isOpen && <Text className="mt-2 mb-2 ml-8">{children}</Text>}
    </View>
  );
}
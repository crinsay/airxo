import { StyleSheet, Image, View, Text, ScrollView } from 'react-native'
import { images } from '@/constants/images'
import React from 'react'
import { shadow } from '@/styles/shadow'
import { icons } from '@/constants/icons'
import {qualityColors} from '@/constants/colors'

export default function Info() {
  return (
    <View className="flex-1 bg-background">
      <Image source={images.bg} className="absolute w-full h-full" resizeMode="cover"/>
      <View className="flex-row items-center justify-center pt-10 mt-6">
        <Text className="text-foreground text-3xl font-bold"> PM 2.5 </Text>      
      </View>
      <View className="bg-background rounded-3xl mx-6 mt-6 mb-6 p-6" style={shadow.shadow}>
        <Text className="text-foreground ">
          PM2.5 (Particulate Matter 2.5) refers to tiny particles or droplets in the air that are 2.5 micrometers or smaller in diameter. These particles can include dust, dirt, soot, and smoke, and they are small enough to be inhaled into the lungs, potentially causing health problems.
        </Text>
      </View>
      <ScrollView
        className="flex-1 px-6"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "80%", paddingBottom: 5 }}
      >      
        <LegendItem
          description="Good"
          color={qualityColors.good}
          icon={icons.qualityEmojis.good}
          concentration="0 - 13 µg/m³"
        />
        <LegendItem
          description="Moderate"
          color={qualityColors.okay}
          icon={icons.qualityEmojis.okay}
          concentration="13 - 35 µg/m³"
        />
        <LegendItem
          description="Bad"
          color={qualityColors.bad} 
          icon={icons.qualityEmojis.bad}
          concentration="35 - 55 µg/m³"
        />
        <LegendItem
          description="Unhealthy"
          color={qualityColors.dangerous}
          icon={icons.qualityEmojis.dangerous}
          concentration="55 - 75 µg/m³"
        />
        <LegendItem
          description="Dangerous"
          color={qualityColors.veryDangerous}
          icon={icons.qualityEmojis.veryDangerous}
          concentration="75 - 110 µg/m³"
        />
        <LegendItem
          description="Lethal"
          color={qualityColors.lethal}
          icon={icons.qualityEmojis.lethal}
          concentration="> 110 µg/m³"
        />
      </ScrollView>
    </View>
  )
}

// export function Legend() {
//   return (
//     <View className="flex-row items-center justify-between px-6 mt-6 bg-background rounded-full z-10">
//       <LegendItem label="Good" color="#00FF00" />
//       <LegendItem label="Moderate" color="#FFFF00" />
//       <LegendItem label="Unhealthy for Sensitive Groups" color="#FF7F00" />
//       <LegendItem label="Unhealthy" color="#FF0000" />
//       <LegendItem label="Very Unhealthy" color="#800080" />
//     </View>
//   )
// }

interface LegendItemProps {
  description: string;
  color: string;
  icon: any;
  concentration: string;
}

// export function LegendItem({ description, color, icon, concentration }: LegendItemProps) {
//   return (
//     <View className="flex-row items-center justify-between px-6 mt-3 py-6 bg-background rounded-full" 
//     style={[{
//       borderColor: color,
//       borderWidth: 2,
//       }, shadow.shadow]}>
//       <Image source={icon} className="w-12 h-12 mr-3" />
//       <Text className='text-foreground text-lg font-bold mr-3'>{concentration}</Text>
//       <Text className="text-foreground text-lg mr-3 text-left">{description}</Text>
//     </View>
//   )
// }

export function LegendItem({ description, color, icon, concentration }: LegendItemProps) {
  return (
    <View className="flex-row items-center px-6 mt-3 py-6 bg-background rounded-3xl"
      style={[
        {
          borderColor: color,
          borderWidth: 2,
        },
      ]}
    >
      <View className="w-[15%] mr-2">
        <Image source={icon} className="w-12 h-12" />
      </View>

      <Text className="w-[40%] text-foreground text-lg font-bold mr-2">{concentration}</Text>

      <View className="flex-1">
        <Text className="text-foreground text-lg font-bold text-left">{description}</Text>
      </View>
    </View>
  )
}

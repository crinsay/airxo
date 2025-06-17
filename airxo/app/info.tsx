import LegendItem from '@/components/LegendItem'
import { qualityColors } from '@/constants/colors'
import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { shadow } from '@/styles/shadow'
import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'

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
          color={qualityColors.moderate}
          icon={icons.qualityEmojis.moderate}
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
          color={qualityColors.unhealthy}
          icon={icons.qualityEmojis.unhealthy}
          concentration="55 - 75 µg/m³"
        />
        <LegendItem
          description="Dangerous"
          color={qualityColors.dangerous}
          icon={icons.qualityEmojis.dangerous}
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
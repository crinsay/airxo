import { View, Text, Image } from "react-native";

interface LegendItemProps {
  description: string;
  color: string;
  icon: any;
  concentration: string;
}


export default function LegendItem({ description, color, icon, concentration }: LegendItemProps) {
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

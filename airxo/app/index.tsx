import { Link } from "expo-router";
import { ScrollView, Image, View, Text } from "react-native";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import SearchBar from "@/components/SearchBar";

export default function Index() {
  return (
    <View className="flex-1 bg-background">
      <Image source={images.bg} className="absolute w-full h-full" resizeMode="cover"/>
      <View className="flex-row items-center justify-between px-6 pt-10 mt-6">
        <Text className="text-foreground text-3xl font-bold">Airxo - Air Quality</Text>
        <Link href="/info" className="text-foreground text-lg font-bold">
          <Image source={icons.questionMark} className="w-7 h-7" />
        </Link>
      </View>
      <View className="flex-1 mt-6 px-6">
        <SearchBar
          placeholder="Search city"
        />
      </View>
    </View>
  );
}

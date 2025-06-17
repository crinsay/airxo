import { Link } from "expo-router";
import { ScrollView, Image, View } from "react-native";
import { images } from "@/constants/images";
import SearchBar from "@/components/SearchBar";

export default function Index() {
  return (
    <View className="flex-1 bg-background">
      <Image source={images.bg} className="absolute w-full h-full" resizeMode="cover"/>
      <View className="flex-1 mt-20 px-6">
        <SearchBar
          placeholder="Search city"
        />
      </View>
    </View>
  );
}

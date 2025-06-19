import SearchBar from "@/components/SearchBar";
import StationCard from "@/components/StationCard";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import useQuery from "@/hooks/useQuery";
import { fetchAllStations } from "@/services/api";
import { Link } from "expo-router";
import { JSX } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

export default function Index() {

  const { data: stations, loading, error } = useQuery(() => fetchAllStations());

  let content: JSX.Element | null = null;

  if (loading) {
    content = <ActivityIndicator
      size="large"
      color="#0000ff"
      className="mt-10 self-center"
    />;
  }
  else if (error) {
    content = <Text className="text-red-500 text-center mt-10">Error: {error?.message}</Text>;
  }
  else {
    content = (
      <FlatList
        data={stations}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (<StationCard 
                                      {...item}
                                    />)}
        className="mt-8 mb-8 pb-32"
      />
    );
  }

  return (
    <View className="flex-1 bg-background">
      <Image source={images.bg} className="absolute w-full h-full" resizeMode="cover" />
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
        {content}
      </View>
    </View>
  )

  

}

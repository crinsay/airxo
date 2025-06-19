import SearchBar from "@/components/SearchBar";
import StationCard from "@/components/StationCard";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import useQuery from "@/hooks/useQuery";
import { fetchAllStations, filterStations, StationData } from "@/services/api";
import { Link } from "expo-router";
import { JSX, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

export default function Index() {
  const [searchBarValue, setSearchBarValue] = useState("");
  const [filteredStations, setFilteredStations] = useState<StationData[]>([]);
  const { data: stations, loading, error } = useQuery(() => fetchAllStations(), true);

  useEffect(() => {
    setFilteredStations(stations || []);
  }, [stations])

  useEffect(() => {
    if (loading) {
      return;
    }

    const timeoutId = setTimeout(() => {
      const result = filterStations(stations, searchBarValue.trim())
      setFilteredStations(result);
    }, 250);

    return () => clearTimeout(timeoutId);
  }, [searchBarValue.trim()])

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
        data={filteredStations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (<StationCard
          {...item}
        />)}
        className="mt-8 mb-8 pb-32"
        ListEmptyComponent={
          !loading && !error
            ? (
              <View className="mt-10 px-5">
                <Text className="text-gray-500 text-center">
                  No stations found
                </Text>
              </View>
            )
            : null
        }
      />
    );
  }

  return (
    <View className="flex-1 bg-background">
      <Image source={images.bg} className="absolute w-full h-full" resizeMode="cover" />
      <View className="flex-row items-center justify-between px-6 pt-10 mt-6">
        <Text className="text-foreground text-3xl font-bold">Airxo - Air Quality</Text>
        <Link href="/info" className="text-foreground text-lg font-bold p-2 rounded-full">
          <Image source={icons.questionMark} className="w-7 h-7" />
        </Link>
      </View>
      <View className="flex-1 mt-6 px-6">
        <SearchBar
          placeholder="Search city"
          value={searchBarValue}
          onChangeText={(text) => {
            setSearchBarValue(text)
          }}
        />
        {content}
      </View>
    </View>
  )
}

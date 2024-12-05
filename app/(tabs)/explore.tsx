import { searchContent, setImageUrl } from "@/lib/functions";
import { Search } from "lucide-react-native";
import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useWindowDimensions } from "react-native";

type TvShow = {
  backdrop_path: string | null;
  id: number;
  name: string;
  original_name: string;
  overview: string;
  poster_path: string | null;
  media_type: "tv";
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
};
type Person = {
  id: number;
  name: string;
  original_name: string;
  media_type: "person";
  adult: boolean;
  popularity: number;
  gender: number;
  known_for_department: string;
  profile_path: string | null;
  known_for: Array<{
    backdrop_path: string | null;
    id: number;
    name?: string;
    original_name?: string;
    title?: string;
    original_title?: string;
    overview: string;
    poster_path: string | null;
    media_type: "tv" | "movie";
    adult: boolean;
    original_language: string;
    genre_ids: number[];
    popularity: number;
    first_air_date?: string;
    release_date?: string;
    video?: boolean;
    vote_average: number;
    vote_count: number;
    origin_country?: string[];
  }>;
};
type Movie = {
  backdrop_path: string | null;
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  media_type: "movie";
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type ApiResponse = {
  page: number;
  results: Array<TvShow | Person | Movie>;
};

export default function Explore() {
  const tabs = ["tab1", "tab2", "tab3"];
  const [pressed, setPressed] = useState(-1);
  const [search, setSearch] = useState<string>();
  const [result, setResult] = useState<ApiResponse>();

  useEffect(() => {
    const fun = async () => {
      if (search) {
        const res = await searchContent(search);
        console.log(res);
        setResult(res);
      }
    };
    fun();
  }, [search]);
  return (
    <View className="h-screen bg-gray-800 px-4">
      <SafeAreaView>
      <View className=" mt-3 bg-transparent w-full flex flex-row justify-between container relative">
          <View className="absolute top-4 left-2">
            <Search color={"white"} />
          </View>

          <TextInput
            value={search}
            onChangeText={(e) => {
              setSearch(e);
            }}
            placeholder="Rechercher"
            className="bg-[#696d743f] text-white h-[50px] rounded px-10 pl-12 w-full"
          />
        </View>
        <ScrollView className="" showsVerticalScrollIndicator={false}>    
      <View className="flex flex-col mb-[100px]">
            <FlatList
              scrollEnabled= {false}
              contentContainerStyle={{ paddingBottom: 100, marginTop: 30 }}
              horizontal={false}
              data={result?.results}
              keyExtractor={(item) => `${item.id}`}
              renderItem={({ item, index }) => {
                return (
                  <View className="mb-5" key={index}>
                    {(item as TvShow).first_air_date ? (
                    
                        <SearchResult
                          imageUri={setImageUrl(
                            (item as TvShow).poster_path, 200
                          )}
                          name={(item as TvShow).name}
                          category={(item as TvShow).media_type}
                          information={(item as TvShow).overview}
                        />
                      
                    ) : (item as Person).known_for ? (
                      <SearchResult
                          imageUri={setImageUrl(
                            (item as Person).profile_path
      
                          )}
                          name={(item as Person).name}
                          category={(item as Person).media_type}
                          information={(item as Person).known_for_department}
                        />
                    ) : (item as Movie).release_date ? (
                      <SearchResult
                          imageUri={setImageUrl(
                            (item as Movie).poster_path 
      
                          )}
                          name={(item as Movie).title}
                          category={(item as Movie).media_type}
                          information={(item as Movie).overview}
                        />
                    ) : null}
                  </View>
                );
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const SearchResult = ({
  imageUri,
  name,
  category,
  information,
}: {
  imageUri: string | null;
  name: string;
  category: "movie" | "tv" | "person";
  information: string;
  }
) => {
const {width} = useWindowDimensions()

  return (
    <TouchableOpacity activeOpacity={0.6} className="container flex flex-row gap-5 bg-[#37353537] rounded-xl p-3 border border-[#92949741] w-full h-[150px]">
      <View className="w-[80px] h-[110px] flex justify-center items-center bg-gray-500 rounded-xl">
        {imageUri ? 
        <Image source={{ uri: imageUri }} resizeMode="cover" className="rounded-xl w-[80px] h-[110px]"/>
        : <View className="w-[80px] h-[110px] bg-gray-400"></View>}
      </View>

      <View className="flex flex-col justify-between">
        <Text className="text-white text-wrap w-10" style={{width : width-150}} numberOfLines={1}>{name}</Text> 
        <Text className="text-white">
          {category === "movie"
            ? "Film"
            : category === "person"
            ? "Cinéphile"
            : category === "tv"
            ? "Série"
            : null}
        </Text>
        <Text className="text-white text-wrap" numberOfLines={5} style={{width : width-150}}>
          {information}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

import { MovieCard } from "@/_components/movieCard";
import {
  getTrendingMovies,
  getTrendingPeople,
  getTrendingTv,
  setImageUrl,
} from "@/lib/functions";
import { categories } from "@/lib/utils";
import { Search, SlidersHorizontal } from "lucide-react-native";
import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
type Movie = {
  page: number;
  results: {
    backdrop_path: string;
    id: number;
    title: string;
    original_title: string;
    overview: string;
    poster_path: string;
    media_type: string;
    adult: boolean;
    original_language: string;
    genre_ids: number[];
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }[];
};
type TVShow = {
  page: number;
  results: {
    backdrop_path: string;
    id: number;
    name: string;
    original_name: string;
    overview: string;
    poster_path: string;
    media_type: string;
    adult: boolean;
    original_language: string;
    genre_ids: number[];
    popularity: number;
    first_air_date: string;
    vote_average: number;
    vote_count: number;
    origin_country: string[];
  };
};

type Person = {
  page: number;
  results: {
    id: number;
    name: string;
    original_name: string;
    media_type: string;
    adult: boolean;
    popularity: number;
    gender: number;
    known_for_department: string;
    profile_path: string | null;
  };
};

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState<Movie>();
  const [trendingTv, setTrendingTv] = useState<TVShow>();
  const [trendingPeople, setTrendingPeople] = useState<Person>();

  useEffect(() => {
    const fun = async () => {
      const movies = await getTrendingMovies();
      setTrendingMovies(movies);
      const tv = await getTrendingTv();
      setTrendingTv(tv);
      const people = await getTrendingPeople();
      setTrendingPeople(people);
    };
    fun();
  }, []);
  return (
    <View className=" h-screen w-full bg-gray-800">
      <SafeAreaView>
        <ScrollView className="pb-24" showsVerticalScrollIndicator={false}>
          <View className="px-3 pt-2 flex flex-col gap-5">
            <Text className="text-white text-3xl">Welcome Mark</Text>
            <Text className="text-white">
              Réserve ton ticket pour ton film préféré
            </Text>
            <View className="w-full flex flex-row justify-between container relative">
              <View className="absolute top-4 left-2">
                <Search color={"white"} />
              </View>

              <TextInput
                placeholder="Rechercher"
                className="bg-[#696d743f] h-[50px] rounded px-10 pl-12 w-[80%]"
              />
              <TouchableOpacity
                className="bg-red-500 w-[15%] rounded flex justify-center items-center"
                activeOpacity={0.8}
              >
                <SlidersHorizontal color={"white"} size={30} />
              </TouchableOpacity>
            </View>
            <View >
              <View className="flex flex-row justify-between">
                <Text className="text-white font-semibold">Catégorie</Text>
                <Text className="text-red-500">Voir tout</Text>
              </View>

              <FlatList
                className="my-4"
                contentContainerStyle={{ paddingHorizontal: 10 }}
                showsHorizontalScrollIndicator={false}
                horizontal
                keyExtractor={(item) => item.image}
                pagingEnabled={true}
                data={categories}
                renderItem={({ item, index }) => {
                  return (
                    <View className="flex flex-col gap-2">
                      <TouchableOpacity
                        key={index}
                        className="flex items-center px-7 py-2 rounded-md
                      bg-[#3233347c] mr-3"
                      >
                        <Image source={item.image} />
                      </TouchableOpacity>
                      <Text className="text-white self-center">
                        {item.category}
                      </Text>
                    </View>
                  );
                }}
              />
              <View className="flex flex-col gap-8">
              <View>
                <View className="flex flex-row justify-between my-3">
                  <Text className="text-white ">Films tendances</Text>
                  <Text className="text-red-500">Voir tout</Text>
                </View>
                  <FlatList
                  data={trendingMovies?.results}
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  keyExtractor={(item) => `${item.id}`}
                  renderItem={({ item, index }) => {
                    return (
                      <View className="mr-5" >
                        <MovieCard
                          key={index}
                          movieTitle={item.title}
                          id={item.id}
                          image={setImageUrl(item.poster_path)}
                        />
                      </View>
                    );
                  }}
                />
              </View>
              <View>
                <View className="flex flex-row justify-between my-3">
                  <Text className="text-white ">Séries tendances</Text>
                  <Text className="text-red-500">Voir tout</Text>
                </View>
                <FlatList
                  data={trendingTv?.results}
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  keyExtractor={(item) => `${item.id}`}
                  renderItem={({ item, index }) => {
                    return (
                      <Pressable className="mr-5">
                        <MovieCard
                          key={index}
                          movieTitle={item.name}
                          id={item.id}
                          image={setImageUrl(item.poster_path)}
                        />
                      </Pressable>
                    );
                  }}
                />
                </View>
                <View className="mb-20">
                  <View className="flex flex-row justify-between my-3">
                    <Text className="text-white ">Personnes tendances</Text>
                    <Text className="text-red-500">Voir tout</Text>
                  </View>
                  <FlatList
                    data={trendingPeople?.results}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={({ item, index }) => {
                      return (
                        <View className="mr-5">
                          <MovieCard
                            key={index}
                            movieTitle={item.name}
                            id={item.id}
                            image={setImageUrl(item.profile_path)}
                          />
                        </View>
                      );
                    }}
                  />
                </View>
              </View>
              
              
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

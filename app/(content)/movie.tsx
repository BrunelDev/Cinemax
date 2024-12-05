import { getMovieDetail, setImageUrl } from "@/lib/functions";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ChevronLeft, Star, Timer, Video } from "lucide-react-native";
import { useEffect, useState } from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View, ScrollView
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type BelongsToCollection = {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
};

type Genre = {
  id: number;
  name: string;
};

type ProductionCompany = {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
};

type ProductionCountry = {
  iso_3166_1: string;
  name: string;
};

type SpokenLanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

type MovieDetails = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: BelongsToCollection | null;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string | null;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export default function searchPage() {
  const router = useRouter()
  const { id } = useLocalSearchParams();
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  useEffect(() => {
    const fun = async () => {
      const res = await getMovieDetail(String(id));
      setMovie(res);
    };
    fun();
  }, [id]);
  useWindowDimensions();
  return (
    <View className="h-screen flex px-4 bg-gray-800">
      <SafeAreaView className="flex flex-col h-screen">
        <ScrollView showsVerticalScrollIndicator={false}>
        <View className="mb-3 flex flex-row justify-between">
            <ChevronLeft strokeWidth={1.25} size={35} color="white" onPress={() => {
              router.back()
            }}/>
            <Text className="text-white text-xl translate-y-1">Détails du film</Text>
            <View></View>
        </View>
        {movie && (
          <View className="flex flex-row justify-between">
            {movie.poster_path ? (
              <Image
                source={{ uri: setImageUrl(movie.poster_path) }}
                height={300}
                className="w-[80%] rounded-xl"
              />
            ) : (
              <View className="bg-gray-500"></View>
            )}
            <View className="flex flex-col gap-3 w-[18%] justify-around">
              <TouchableOpacity
                activeOpacity={0.7}
                className="w-full h-[80px] bg-[#79799446] rounded-xl flex justify-center items-center"
              >
                <Video strokeWidth={1.25} color="#f87171" size={40} />
                <Text className="text-white font-extralight text-sm">Type</Text>
                  <Text className="text-white font-light text-sm">{ movie?.genres[0].name}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.7}
                className="w-full h-[80px] bg-[#79799446] rounded-xl flex justify-center items-center"
              >
                <Timer strokeWidth={1.25} color="#f87171" size={40} />
                <Text className="text-white font-extralight text-sm">Durée</Text>
                <Text className="text-white font-light text-sm">{movie.runtime} min</Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.7}
                className="w-full h-[80px] bg-[#79799446] rounded-xl flex justify-center items-center"
              >
                <Star strokeWidth={1.25} color="#f87171" size={40} />
                <Text className="text-white font-extralight text-sm">Note</Text>
                  <Text className="text-white font-light text-sm">{movie.vote_average}/10</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        <View className="flex flex-col gap-5 mt-3">
          <View className="flex flex-col gap-1">
            <Text className="text-white text-xl">{ movie?.title}</Text>
            <Text className="text-white font-light">{movie?.genres.map((genre, i) => {
              return `${genre.name} `
            })}</Text>
          </View>
          <View className="flex flex-col gap-3 mb-4">
            <Text className="text-white text-xl">Description</Text>
            <Text className="text-white text-xl font-light">{ movie?.overview}</Text>
          </View>

        </View>
        <TouchableOpacity activeOpacity={0.8} className="mt-auto w-full h-[55px] bg-red-400 rounded-lg flex items-center justify-center">
          <Text className="text-white text-xl">
            Réserver un siège
          </Text>

          </TouchableOpacity>
          </ScrollView>
      </SafeAreaView>
    </View>
  );
}

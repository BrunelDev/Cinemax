import { useRouter } from "expo-router";
import {
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View
} from "react-native";
import { Link } from "expo-router";
export function MovieCard({
  image,
  movieTitle,id
}: {
  image: string;
  movieTitle: string;
  id: number;
}) {
  const { width } = useWindowDimensions();
  const router = useRouter()
  return (
    <TouchableOpacity
    activeOpacity={0.8}  onPress={() => {
      console.log("pressed")
      router.push(`/(content)/movie?id=${id}`)
    }}>
      <View
        
        className="rounded-xl  overflow-hidden bg-gray-600"
        style={{ width: width / 2, height: 220 }}
      >
        <Image
          source={{ uri: image }}
          width={width / 2}
          height={220}
          className=""
        />
      </View>

      <Text className="text-white text-lg">{movieTitle}</Text>
    </TouchableOpacity>
  );
}

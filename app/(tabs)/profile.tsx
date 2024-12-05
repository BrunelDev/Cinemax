import { Entypo } from "@expo/vector-icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from '@expo/vector-icons/Feather';
import { Text, TouchableOpacity, View, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import { LogOut } from "lucide-react-native";

export default function Profile() {
  const router = useRouter()
  return (
    <View className="h-screen bg-gray-800 flex flex-col justify-center gap-8 w-full px-4">
      <View className="w-full flex justify-center items-center">
        <Text className="text-white text-2xl">Profile</Text>
        <View className="bg-gray-200 w-[65px] h-[50px] rounded"></View>
        <View className="flex flex-col justify-center items-center text-center">
          <Text className="text-white w-full text-xl font-semibold">
            Mark Willions
          </Text>
          <Text className="text-white text-center">(229) 0190570100</Text>
        </View>
      </View>
      <View className="flex flex-col mt-10 w-full">
        <Section
          title="Modifier le profile"
          icon={<FontAwesome6 name="edit" size={24} color="white" />}
          handlePress={function (): void {
            router.push("/changeProfile")
          }}
        />
        <Section
          title="Mes tickets"
          icon={<Ionicons name="ticket-outline" size={24} color="white" />}
          handlePress={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <Section
          title="Changer de mot de passe"
          icon={<Feather name="lock" size={24} color="white" />}
          handlePress={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <Section
          title="Police de confidentialité"
          icon={<MaterialIcons name="privacy-tip" size={24} color="white" />}
          handlePress={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <Section
          title="A propos"
          icon={<Entypo name="code" size={24} color="white" />}
          handlePress={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </View>
      <TouchableOpacity activeOpacity={0.8} className="w-full h-[50px] bg-red-400 rounded-lg flex flex-row gap-2 items-center justify-center">
      <LogOut color={"white"}/>
          <Text className="text-white text-xl">
            Déconnexion
          </Text>

          </TouchableOpacity>
    </View>
  );
}

const Section = ({
  icon,
  title,
  handlePress
}: {
  icon: React.JSX.Element;
  title: string;
  handlePress: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className="flex flex-row justify-between border-b pb-4 border-[#65656729] my-4"
    >
      <View className="flex flex-row gap-3">
        {icon}
        <Text className="text-white text-xl font-extralight">{title}</Text>
      </View>
      <Entypo name="chevron-right" size={24} color="#6b7280" />
    </TouchableOpacity>
  );
};

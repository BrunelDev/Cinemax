import { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useRouter } from "expo-router";

export default function MyTicket() {
  return (
    <View className="h-screen bg-gray-800">
      <SafeAreaView>
        <View className="px-4 gap-10">
          <TabNavigation />
          <UpcomingTicketComponent title="La casa" imageUrl="a pic" date="Date" language=""/>
        </View>
        
        
      </SafeAreaView>
    </View>
  );
}
export const TabNavigation = () => {
  const [selectedTab, setSelectedTab] = useState("A venir");
  const tabs = ["A venir", "Passés", "Annulés"];
  const handlePress = (tab: string) => {
    setSelectedTab(tab);
  };
  return (
    <View className="container bg-[#373535] p-1 rounded-xl gap-2 w-full flex flex-row">
      {tabs.map((tab, i) => {
        return (
          <TabButton
            key={i}
            title={tab}
            handlePress={handlePress}
            selectedTab={selectedTab}
          />
        );
      })}
    </View>
  );
};

export const TabButton = ({
  title,
  handlePress,
  selectedTab,
}: {
  title: string;
  handlePress: (tab: string) => void;
  selectedTab: string;
}) => {
  return (
    <Pressable
      onPress={() => {
        handlePress(title);
      }}
      className={`w-[32%] py-3  rounded-xl flex items-center justify-center ${
        selectedTab === title ? "bg-red-400" : ""
      }`}
    >
      <Text
        className={`${selectedTab === title ? "text-white" : "text-gray-400"}`}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export const UpcomingTicketComponent = ({
  imageUrl,
  title,
  date,
  language,
  ticketId,
}: {ticketId? : string
  imageUrl: string;
  title: string;
  date: string;
  language: string;
}) => {
  const canReview = !false;
  const router = useRouter();
  return (
    <TouchableOpacity
      activeOpacity={1}
      className="container flex flex-col gap-5 bg-[#37353537] rounded-xl p-3 border border-[#92949741] w-full h-[150px]"
    >
      <View className="flex flex-row gap-3  h-[70px]">
        <View className="bg-gray-400 h-[70px] w-[70px] rounded"></View>
        <View className="flex flex-col justify-between">
          <Text className="text-white font-bold">Nom du ticket</Text>
          <Text className="text-gray-400">Date de début : 2022-01-01</Text>
          <Text className="text-gray-400">Date de début : 2022-01-01</Text>
        </View>
      </View>
      <View className="flex flex-row w-full justify-between">
        <TouchableOpacity
          activeOpacity={0.8}
          className={`${
            canReview ? "w-[49%]" : "w-full"
          } border border-[#92949723] py-2 px-2 flex justify-center items-center rounded-xl`}
        >
          <Text className="text-white text-lg font-light">
            Annuler réservation
          </Text>
        </TouchableOpacity>
        {canReview ? (
          <TouchableOpacity
            onPress={() => {
              router.push("/viewTickets")
            }}
            activeOpacity={0.8}
            className="w-[49%] border border-[#92949723] py-2 px-2 flex justify-center items-center rounded-xl bg-red-400"
          >
            <Text className="text-white text-lg font-light">Voir le ticket</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};export const PastTicketComponent = ({
  imageUrl,
  title,
  date,
  language,
}: {
  imageUrl: string;
  title: string;
  date: string;
  language: string;
}) => {
  const canReview = !false;
  return (
    <TouchableOpacity
      activeOpacity={1}
      className="container flex flex-col gap-5 bg-[#37353537] rounded-xl p-3 border border-[#92949741] w-full h-[150px]"
    >
      <View className="flex flex-row gap-3  h-[70px]">
        <View className="bg-gray-400 h-[70px] w-[70px] rounded"></View>
        <View className="flex flex-col justify-between">
          <Text className="text-white font-bold">Nom du ticket</Text>
          <Text className="text-gray-400">Date de début : 2022-01-01</Text>
          <Text className="text-gray-400">Date de début : 2022-01-01</Text>
        </View>
      </View>
      <View className="flex flex-row w-full justify-between">
        <TouchableOpacity
          activeOpacity={0.8}
          className={`${
            canReview ? "w-[49%]" : "w-full"
          } border border-[#92949723] py-2 px-2 flex justify-center items-center rounded-xl`}
        >
          <Text className="text-white text-lg font-light">
            Voir les détails
          </Text>
        </TouchableOpacity>
        {canReview ? (
          <TouchableOpacity
            activeOpacity={0.8}
            className="w-[49%] border border-[#92949723] py-2 px-2 flex justify-center items-center rounded-xl bg-red-400"
          >
            <Text className="text-white text-lg font-light">Commenter</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};export const CanceledTicketComponent = ({
  imageUrl,
  title,
  date,
  language,
}: {
  imageUrl: string;
  title: string;
  date: string;
  language: string;
}) => {
  const canReview = !false;
  return (
    <TouchableOpacity
      activeOpacity={1}
      className="container flex flex-col gap-5 bg-[#37353537] rounded-xl p-3 border border-[#92949741] w-full h-[150px]"
    >
      <View className="flex flex-row gap-3  h-[70px]">
        <View className="bg-gray-400 h-[70px] w-[70px] rounded"></View>
        <View className="flex flex-col justify-between">
          <Text className="text-white font-bold">Nom du ticket</Text>
          <Text className="text-gray-400">Date de début : 2022-01-01</Text>
          <Text className="text-gray-400">Date de début : 2022-01-01</Text>
        </View>
      </View>
      <View className="flex flex-row w-full justify-between">
        <TouchableOpacity
          activeOpacity={0.8}
          className={`${
            canReview ? "w-[49%]" : "w-full"
          } border border-[#92949723] py-2 px-2 flex justify-center items-center rounded-xl`}
        >
          <Text className="text-white text-lg font-light">
            Voir les détails
          </Text>
        </TouchableOpacity>
        {canReview ? (
          <TouchableOpacity
            activeOpacity={0.8}
            className="w-[49%] border border-[#92949723] py-2 px-2 flex justify-center items-center rounded-xl bg-red-400"
          >
            <Text className="text-white text-lg font-light">Commenter</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

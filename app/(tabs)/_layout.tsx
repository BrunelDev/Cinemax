import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import Feather from '@expo/vector-icons/Feather';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import AntDesign from '@expo/vector-icons/build/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'dark'].tint,
        
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle:
          Platform.select({
          
          ios: {
              // Use a transparent background on iOS to show the blur effect
            
           
            position: 'absolute',
          },
          default: {
           
            

          },
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <Feather name="search" size={28} color={color} />,
        }}
      /><Tabs.Screen
      name="bookmarks"
      options={{
        title: 'Favoris',
        tabBarIcon: ({ color }) => <AntDesign name="hearto" size={28} color={color} />,
      }}
    /><Tabs.Screen
    name="my-ticket"
    options={{
      title: 'Tickets',
      tabBarIcon: ({ color }) => <Ionicons name="ticket-outline" size={28} color={color} />,
    }}
      />
      <Tabs.Screen
    name="profile"
    options={{
      title: 'Profile',
      tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account-box-outline" size={28} color={color} />,
    }}
  />
    </Tabs>
  );
}

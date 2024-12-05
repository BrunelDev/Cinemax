import { Stack } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function SearchLayout() {
  return (
    <Stack>
      <Stack.Screen name="movie" options={{ headerShown: false }}/>
      <Stack.Screen name="person" options={{ headerShown: false }}/>
      <Stack.Screen name="tv" options={{ headerShown: false }}/>
    </Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

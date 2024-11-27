import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://imgs.search.brave.com/jv_XcdsIuLMF5WPWA009ZNfyv4ZMMzHXWO1GSx8vDgk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMi8x/Mi8yNi8xNy8wNS9o/YW5kcy03Njc5Mzg3/X18zNDAuanBn",
        }}
        style={{ width: 100, height: 100 }}
      />
      <Text>jaja</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Constants from "expo-constants";
const extra = Constants?.expoConfig?.extra ?? {};

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>Versão 1.0.0</Text>
      <Text style={{ fontSize: 16, fontWeight: "normal" }}>
        Estou no ambiente:{" "}
        <Text style={{ fontWeight: "bold" }}> {extra.appEnv}</Text>
      </Text>
      <Text style={{ fontSize: 16, fontWeight: "normal" }}>
        Acessando a API:{" "}
        <Text style={{ fontWeight: "bold" }}> {extra.apiUrl}</Text>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

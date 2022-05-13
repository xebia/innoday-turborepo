import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import type { Person } from "types";

export default function App() {
  const [person, setPerson] = useState<Person | null>(null);

  useEffect(() => {
    fetch("http://localhost:3002/")
      .then((res) => res.json())
      .then(setPerson);
  }, []);

  return (
    <View style={styles.container}>
      {person && <Text>Hi, {person.firstName}!</Text>}
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

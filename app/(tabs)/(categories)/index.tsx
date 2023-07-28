import { COLORS } from "@/constants";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar as RStatusBar,
  Pressable,
} from "react-native";

export default function CatagoriesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 10,
        }}
      >
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, eaque
          voluptas deleniti cumque harum amet temporibus porro libero explicabo
          corrupti vero a esse, tempore nesciunt qui officia! Deleniti, omnis
          mollitia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          laboriosam ea quibusdam optio nostrum nam ratione praesentium magnam
          mollitia voluptas explicabo, nulla ipsa suscipit iusto expedita alias
          unde rerum quod?
        </Text>
        <Link
          href="/(tabs)/saves"
          style={{
            width: 200,
            backgroundColor: COLORS.tertiary,
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Text>Tab</Text>
        </Link>
      </View>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "dark" : "auto"} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? RStatusBar.currentHeight : 0,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

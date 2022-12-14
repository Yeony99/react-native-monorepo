
import React from "react";
import {
  SafeAreaView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";

export function App() {
  return (
    <SafeAreaView>
     <Text style={styles.text}>Hello from React Native! </Text>
      <View style={styles.platformRow}>
        <Text style={styles.text}>Platform: </Text>
        <View style={styles.platformBackground}>
          <Text style={styles.platformValue}>{Platform.OS}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    fontWeight: "600",
  },
  platformRow: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  platformValue: {
    fontSize: 28,
    fontWeight: "500",
  },
  platformBackground: {
    backgroundColor: "#ececec",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#d4d4d4",
    paddingHorizontal: 6,
    borderRadius: 6,
    alignItems: "center",
  },
});

export default App;
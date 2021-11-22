import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, ViewComponent } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("./assets/imdb-logo.jpeg")} style={styles.logo} />
      </View>
      <View>
        <Text>Interstellar</Text>
        <View style = {styles.filmInfo}>
          <Text>2014</Text>
          <Text>PG-13</Text>
          <Text>2h 49min</Text>
          <Text>Adventure, Drama, Sci-Fi</Text>
          <Text>2014</Text>
        </View>
        <View>
          <View><Image /></View>
          <View>
            <Text>A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.</Text>
            <TouchableOpacity><Text>+ ADD TO WATCHLIST</Text></TouchableOpacity>
          </View>
          
        </View>
      </View>
 
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#1D1D1D",
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    color: "#fff"
  },
  header: {
    height: 50,
    backgroundColor: "#393939",
  },
  logo: {
    height: 30,
    width: 50,
  },
  filmInfo:{
    flexDirection: "row"
  }
});

import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Constants from "expo-constants";
import { FontAwesome } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("./assets/imdb-logo.jpeg")} style={styles.logo} />
      </View>
      <View style={styles.filmInfoContainer}>
        <Text style={styles.headerText}>Interstellar</Text>
        <View style={styles.filmInfo}>
          <Text style={styles.filmInfoText}>2014</Text>
          <Text style={styles.filmInfoText}>PG-13</Text>
          <Text style={styles.filmInfoText}>2h 49min</Text>
          <Text style={styles.filmInfoText}>Adventure, Drama, Sci-Fi</Text>
        </View>
        <View style={styles.filmDescContainer}>
          <View>
            <Image
              source={require("./assets/Interstellar.jpg")}
              style={styles.picture}
            />
          </View>
          <View style={styles.filmDescRight}>
            <Text style={styles.filmDescText}>
              A team of explorers travel through a wormhole in space in an
              attempt to ensure humanity's survival.
            </Text>
            <TouchableOpacity style={styles.buttonDesign}>
              <Text style={styles.buttonText}>+ ADD TO WATCHLIST</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.scoresContainer}>
          <View style={styles.scoresBlock}>
            <FontAwesome name="star" size={24} color="gold" />
            <Text style={styles.scoresText}>8.6/10</Text>
            <Text style={styles.scoresText}>1.1M</Text>
          </View>
          <View style={styles.scoresBlock}>
            <FontAwesome name="star-o" size={24} color="white" />
            <Text style={styles.scoresText}>RATE THIS</Text>
          </View>
          <View style={styles.scoresBlock}>
            <FontAwesome name="square" size={24} color="#62C74F" />
            <Text style={styles.scoresText}>Metascore</Text>
            <Text style={styles.scoresText}>46 critic reviews</Text>
          </View>
        </View>
      </View>

      {/* <StatusBar style="auto" /> */}
      <View style={styles.filmInfoContainer2}>
        <View style={styles.castHeader}>
          <Text style={styles.castHeaderTitle}>Top Billed Cast</Text>
          <TouchableOpacity>
            <Text style={styles.castHeaderLink}>SEE ALL</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.castProfileContainer}>
        <ScrollView horizontal={true} >
          <View style={styles.castBlock}>
            <Image
              source={require("./assets/MMprofile.jpg")}
              style={styles.castImage}
            /><Text numberOfLines={1} style = {styles.castName}>Matthew McConaughey</Text>
            <Text numberOfLines={1} style = {styles.castChar}>Cooper</Text>
          </View>
          <View style={styles.castBlock}>
            <Image
              source={require("./assets/AHprofile.jpg")}
              style={styles.castImage}
            /><Text numberOfLines={1} style = {styles.castName}>Anne Hathaway</Text>
            <Text numberOfLines={1} style = {styles.castChar}>Brand</Text>
          </View>
          <View style={styles.castBlock}>
            <Image
              source={require("./assets/JCprofile.jpg")}
              style={styles.castImage}
            />
            <Text numberOfLines={1} style = {styles.castName}>Jessica Chastain</Text>
            <Text numberOfLines={1} style = {styles.castChar}>Murph</Text>
          </View>
          <View style={styles.castBlock}>
            <Image
              source={require("./assets/MFprofile.jpg")}
              style={styles.castImage}
            /><Text numberOfLines={1} style = {styles.castName}>Mackenzie Foy</Text>
            <Text numberOfLines={1} style = {styles.castChar}>Murph (10 Yrs)</Text>
          </View>
          <View style={styles.castBlock}>
            <Image
              source={require("./assets/EBprofile.jpg")}
              style={styles.castImage}
            /><Text numberOfLines={1} style = {styles.castName}>Ellen Burstyn</Text>
            <Text numberOfLines={1} style = {styles.castChar}>Murph (Older)</Text>
          </View></ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    height: 50,
    backgroundColor: "#393939",
    justifyContent: "center",
  },

  logo: {
    height: 30,
    width: 50,
    marginLeft: 15,
  },

  filmInfoContainer: {
    backgroundColor: "#212121",
    color: "#fff",
    paddingTop: 15,
  },

  headerText: {
    fontSize: 24,
    color: "#fff",

    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },

  filmInfo: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },

  filmInfoText: {
    color: "#fff",
    marginRight: 10,
  },
  picture: {
    height: 140,
    width: 90,
  },

  filmDescContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: "space-between",
  },
  filmDescRight: {
    marginLeft: 15,
    flex: 1,
  },
  filmDescText: {
    color: "#fff",

    flexWrap: "wrap",
  },
  buttonDesign: {
    backgroundColor: "#0277BD",
    borderRadius: 3,
    marginTop: 15,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    paddingTop: 8,
    paddingBottom: 8,
  },
  scoresContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  scoresBlock: {
    alignItems: "center",
    flex: 1,
  },
  scoresText: {
    color: "#fff",
  },

  filmInfoContainer2: {
    backgroundColor: "#212121",
    color: "#fff",
    marginTop: 15,
  },
  castHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
  },

  castHeaderTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
  },
  castHeaderLink: {
    color: "#0277BD",
    fontWeight: "700",
  },
  castProfileContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  castBlock: {
    height: 270,
    width: 140,
    marginRight: 7,
  },
  castImage: {
    height: 210,
    width: 140,
  },

  castName:{
    color: "#fff",
    width: 100
   
  },
  castChar:{
    color: "#fff",
    flexWrap:"nowrap"
  }
});

import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, ViewComponent } from "react-native";
import Constants from "expo-constants";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("./assets/imbd-logo.png")} style={styles.logo} />
      </View>
      <View style={styles.filmInfoContainer}>
        <Text style={styles.headerText}>Interstellar</Text>
        <View style = {styles.filmInfo}>
          <Text style = {styles.filmInfoText}>2014</Text>
          <Text style = {styles.filmInfoText}>PG-13</Text>
          <Text style = {styles.filmInfoText}>2h 49min</Text>
          <Text style = {styles.filmInfoText}>Adventure, Drama, Sci-Fi</Text>
        </View>
        <View style = {styles.filmDescContainer}>
          <View><Image source={require("./assets/Interstellar.jpg")} style = {styles.picture} /></View>
          <View style={styles.filmDescRight}>
            <Text style = {styles.filmDescText}>A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.</Text>
            <TouchableOpacity style = {styles.buttonDesign}><Text style={styles.buttonText}>+ ADD TO WATCHLIST</Text></TouchableOpacity>
          </View>
          
        </View>
      </View>
 
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D1D1D",
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    height: 50,
    backgroundColor: "#393939",
    justifyContent: "center"
  },

  logo: {
    height: 30,
    width: 50,
    marginLeft: 10
  },

  filmInfoContainer:{
    backgroundColor:"#212121",
     color: "#fff"
  },
  
  headerText: {
  fontSize: 24,
  color: "#fff",
  margin: 10
},

  filmInfo:{
    flexDirection: "row",
    margin: 10
  },    

  filmInfoText:{
    color: "#fff",
    marginRight: 10
  },
  picture: {
    height:140,
    width: 90
  },

  filmDescContainer:{
    flexDirection: "row",
    margin: 10,
    justifyContent: "space-between"
  },
  filmDescRight:{
    marginLeft: 10,
    flex: 1
  },
  filmDescText:{
    color: "#fff",
   
    flexWrap: "wrap"
  },
  buttonDesign:{
    backgroundColor: "#0277BD",
    borderRadius: 3,
    marginTop: 10
  },
  buttonText:{
    color: "#fff",
    textAlign: "center",
    paddingTop: 8,
    paddingBottom: 8,

  }


});

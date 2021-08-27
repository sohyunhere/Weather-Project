import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: ["#141E30", "#243B55"]
    },
    Drizzle: {
        iconName: "weather-partly-rainy",
        gradient: ["#ee9ca7", "#ffdde1"]
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#076585", "#fff"]
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#616161", "#9bc5c3"]
    },
    Atmosphere: {
        iconName: "earth",
        gradient: ["#649173", "#DBD5A4"]
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#C6FFDD", "#FBD786", "#f7797d"]
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#E6DADA", "#274046"]
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#2BC0E4", "#EAECC6"]
    },
    Smoke: {
        iconName: "weather-windy-variant",
        gradient: ["#636363", "#a2ab58"]
    },
    Haze: {
        iconName: "weather-hazy",
        gradient: ["#141E30", "#243B55"]
    },
    Dust: {
        iconName: "weather-windy",
        gradient: ["#1D4350", "#A43931"]
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["#403B4A", "#E7E9BB"]
    },
    Sand: {
        iconName: "weather-partly-cloudy",
        gradient: ["#1e130c", "#9a8478"]
    },
    Ash: {
        iconName: "weather-night-partly-cloudy",
        gradient: ["#606c88", "#3f4c6b"]
    },
    Squall: {
        iconName: "weather-lightning-rainy",
        gradient: ["#5D4157", "#A8CABA"]
    },
    Tornado: {
        iconName: "weather-tornado",
        gradient: ["#BBD2C5", "#536976", "#292E49"]
    }
}

export default function Weather({temp, condition}){
    return (
            <LinearGradient
                colors = {weatherOptions[condition].gradient}
                style={styles.container}>

            <StatusBar barStyle='light-content'/>
            
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={96} 
                name={weatherOptions[condition].iconName}
                color="white"/>
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.halfContainer}/>
            </LinearGradient>
    );
}

Weather.PropTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Tornado"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    temp: {
       fontSize: 42,
       color:"white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
  });
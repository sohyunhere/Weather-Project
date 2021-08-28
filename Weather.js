import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: ["#141E30", "#243B55"],
        title: "Thunderstorm",
        subtitle: "Be careful, if you go out"
    },
    Drizzle: {
        iconName: "weather-partly-rainy",
        gradient: ["#ee9ca7", "#ffdde1"],
        title: "Drizzle",
        subtitle: "just small rain, you don't need any umbrella"
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#076585", "#fff"],
        title: "Rain",
        subtitle: "Bring an umbrella with you"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#616161", "#9bc5c3"],
        title: "Snow",
        subtitle: "The stairway is very slippery!"
    },
    Atmosphere: {
        iconName: "earth",
        gradient: ["#649173", "#DBD5A4"],
        title: "Atmosphere",
        subtitle: "not bad"
    },
    Clear: {
        iconName: "white-balance-sunny",
        gradient: ["#C6FFDD", "#FBD786", "#f7797d"],
        title: "Clear",
        subtitle: "awesome🎈"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#E6DADA", "#274046"],
        title: "Clouds",
        subtitle: "it's cloudy☁☁"
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#2BC0E4", "#EAECC6"],
        title: "Mist",
        subtitle: "Drive safely!"
    },
    Smoke: {
        iconName: "weather-windy-variant",
        gradient: ["#636363", "#a2ab58"],
        title: "Smoke",
        subtitle: "Wear a mask"
    },
    Haze: {
        iconName: "weather-hazy",
        gradient: ["#141E30", "#243B55"],
        title: "Haze",
        subtitle: "Drive safely!"
    },
    Dust: {
        iconName: "weather-windy",
        gradient: ["#1D4350", "#A43931"],
        title: "Dust",
        subtitle: "Wear a mask"
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["#403B4A", "#E7E9BB"],
        title: "Fog",
        subtitle: "bring your cardigan"
    },
    Sand: {
        iconName: "weather-partly-cloudy",
        gradient: ["#1e130c", "#9a8478"],
        title: "Sand",
        subtitle: "Wear a mask"
    },
    Ash: {
        iconName: "weather-night-partly-cloudy",
        gradient: ["#606c88", "#3f4c6b"],
        title: "Ash",
        subtitle: "Wear a mask"
    },
    Squall: {
        iconName: "weather-lightning-rainy",
        gradient: ["#5D4157", "#A8CABA"],
        title: "Squall",
        subtitle: "Wait until it stops raining"
    },
    Tornado: {
        iconName: "weather-tornado",
        gradient: ["#BBD2C5", "#536976", "#292E49"],
        title: "Tornado",
        subtitle: "take shelter in a tornado"
    }
}

export default function Weather({temp, condition}){
    return (
            <LinearGradient
                // colors = {weatherOptions[condition].gradient}
                colors = {weatherOptions[condition].gradient}
                style={styles.container}>

            <StatusBar barStyle='light-content'/>
            
            <View style={styles.halfContainer}>
                
                <MaterialCommunityIcons size={96} 
                name={weatherOptions[condition].iconName}
                color="white"/>
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View  style={{ ...styles.halfContainer, ...styles.textContainer}}/>
            <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>
                    {weatherOptions[condition].subtitle}
                </Text>
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
      flex: 1
    },
    temp: {
       fontSize: 42,
       color:"white"
    },
    halfContainer: {
        flex: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        // marginBottom: 10,
        marginLeft: 30,
        textAlign: 'left'
    },
    subtitle: {
        color: "white",
        fontSize: 24,
        fontWeight: "600",
        marginLeft: 30,
        textAlign: 'left',
        marginBottom: 100
    },
    textContainer: {
        paddingHorizontal: 40,
        alignItems: "flex-start",
        justifyContent: "center",
        flex: 1
    }
  });
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Constants from "expo-constants";
const { manifest } = Constants;

import Home from "./components/pages/Home";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Ionicons from "react-native-vector-icons/Ionicons";
import QuizNavigator from "./components/router/QuizNavigator";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

const uri = `http://${manifest.debuggerHost.split(":").shift()}:4000`;

const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
});

const Tab = createBottomTabNavigator();

export default (props) => {
  let [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ApolloProvider client={client}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === "Home") {
                  iconName = "ios-home";
                } else if (route.name === "QuizNavigator") {
                  iconName = "ios-list";
                }
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: "#00B5CE",
              inactiveTintColor: "#C8D3D4",
            }}
          >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen
              name="QuizNavigator"
              component={QuizNavigator}
              options={{
                tabBarLabel: "Quizzes",
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    );
  }
};

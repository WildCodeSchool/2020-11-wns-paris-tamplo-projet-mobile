import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Quizzes from "../pages/Quizzes";
import Questions from "../pages/Questions";

const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50, paddingRight: 100, marginRight: 10 }}
      source={require("../../assets/tamplo.png")}
    />
  );
}

const QuizNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeActivity"
      screenOptions={{ headerRight: () => <LogoTitle /> }}
    >
      <Stack.Screen
        name="Quizzes"
        component={Quizzes}
        options={{
          headerStyle: {
            backgroundColor: "#00B5CE",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="Questions"
        component={Questions}
        options={{
          headerStyle: {
            backgroundColor: "#00B5CE",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default QuizNavigator;

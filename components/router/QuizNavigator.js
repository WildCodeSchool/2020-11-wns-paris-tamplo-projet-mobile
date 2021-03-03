import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Quizzes from "../pages/Quizzes";
import Questions from "../pages/Questions";

const Stack = createStackNavigator();

const QuizNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Quizzes" component={Quizzes} />
      <Stack.Screen name="Questions" component={Questions} />
    </Stack.Navigator>
  );
};

export default QuizNavigator;

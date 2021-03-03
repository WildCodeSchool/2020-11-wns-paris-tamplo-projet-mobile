import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import Container from "../templates/Container";

const QuestionAnswer = ({ questions }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  console.log("quest", questions);
  return (
    <Container>
      <ScrollView>
        <Text> {questions.question} </Text>
        {questions &&
          questions.responses.map((el, i) => {
            return (
              <View key={i}>
                <Text>{el.response}</Text>
                <CheckBox
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />
              </View>
            );
          })}
      </ScrollView>
    </Container>
  );
};

export default QuestionAnswer;

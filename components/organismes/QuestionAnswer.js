import React, { useState } from "react";
import { Button, ScrollView, Text, View } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import Container from "../templates/Container";

const QuestionAnswer = ({ question }) => {
  const [answer, setAnswer] = useState([]);

  const handleChange = (responseId) => {
    console.log("click");
    const index = answer.findIndex((id) => id === responseId);
    if (index >= 0) {
      answer.splice(index, 1);
      setAnswer(answer);
    } else {
      setAnswer((prevValue) => [...prevValue, responseId]);
    }
  };

  return (
    <Container>
      <ScrollView>
        <Text> {question.question} </Text>
        {question &&
          question.responses.map((el, index) => {
            const isSelected = answer.includes(el.id) ? "YES" : "NO";
            console.log(isSelected);
            return (
              <View key={el.id}>
                <Text>{el.response}</Text>
                {/* <CheckBox
                  disabled={false}
                  value={answer.includes(el.id)}
                  onChange={() => handleChange(el.id)}
                  onValueChange={(newValue) => console.log(newValue)}
                /> */}
                <Button
                  onPress={() => handleChange(el.id)}
                  title={isSelected}
                />
              </View>
            );
          })}
      </ScrollView>
    </Container>
  );
};

export default QuestionAnswer;
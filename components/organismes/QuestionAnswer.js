import React, { useState } from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import CheckBox from "@react-native-community/checkbox";

const QuestionAnswer = ({ question, showAnswer }) => {
  const [answerIds, setAnswerids] = useState([]);

  const handleChange = (responseId) => {
    const index = answerIds.findIndex((id) => id === responseId);
    if (index >= 0) {
      const answerTmp = answerIds.slice();
      answerTmp.splice(index, 1);
      setAnswerids(answerTmp);
    } else {
      setAnswerids((oldValue) => [...oldValue, responseId]);
    }
  };

  const getValidation = (isCorrect, isSelected) => {
    if (showAnswer && isCorrect && isSelected) {
      return { backgroundColor: "#b5ddd0" };
    } else if (showAnswer && !isCorrect && isSelected) {
      return { backgroundColor: "#ddbfb5" };
    } else if (showAnswer && isCorrect && !isSelected) {
      return { backgroundColor: "#b5cadd" };
    }
  };

  return (
    <ScrollView>
      <Text style={styles.questionContainer}>{question.question}</Text>
      <View style={styles.responsesContainer}>
        {question &&
          question.responses.map((response) => {
            const isSelected = answerIds.includes(response.id);
            return (
              <View
                key={response.id}
                style={[
                  styles.responseElement,
                  getValidation(response.isCorrect, isSelected),
                ]}
              >
                <Text>{response.response}</Text>
                <CheckBox
                  disabled={showAnswer}
                  value={isSelected}
                  onValueChange={() => handleChange(response.id)}
                />
              </View>
            );
          })}
      </View>
    </ScrollView>
  );
};

export default QuestionAnswer;

const styles = StyleSheet.create({
  questionContainer: {
    marginTop: 20,
    fontSize: 18,
    borderBottomWidth: 2,
    borderBottomColor: "#00B5CE",
    paddingBottom: 5,
  },
  responsesContainer: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  responseElement: {
    width: "32%",
    flexDirection: "column",
    alignItems: "center",
  },
});

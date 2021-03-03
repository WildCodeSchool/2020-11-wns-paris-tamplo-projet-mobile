import React from "react";
import { ScrollView, Text } from "react-native";
import Container from "../templates/Container";
import QuestionAnswer from "../molecules/QuestionAnswer";

const Questions = (props) => {
  const quiz = props.route.params.quiz;
  console.log("quiz", quiz);
  return (
    <Container>
      <ScrollView>
        <Text h1>{quiz.title}</Text>
        <Text h3>
          {quiz.comment
            ? quiz.comment
            : "Pas d'indication particulière pour ce test, bonne chance !"}
        </Text>
        {quiz.questions.map((el, i) => {
          return <QuestionAnswer key={i} questions={el} />;
        })}
      </ScrollView>
    </Container>
  );
};

export default Questions;

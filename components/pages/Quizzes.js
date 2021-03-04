import React from "react";
import { ScrollView, Text } from "react-native";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Container from "../templates/Container";
import ListQuizzes from "../organismes/ListQuizzes";

const ALL_QUIZZES = gql`
  query {
    quizzes {
      id
      title
      comment
      questions {
        id
        question
        responses {
          id
          response
          isCorrect
        }
      }
    }
  }
`;

const Quiz = ({ navigation }) => {
  const { data, error, loading } = useQuery(ALL_QUIZZES);

  // const dataFilled =
  //   data &&
  //   data.quizzes.map((quiz) => {
  //     return {
  //       id: quiz.id,
  //       title: quiz.title,
  //       comment: quiz.comment,
  //       questions: quiz.questions.map((question) => {
  //         return {
  //           id: question.id,
  //           question: question.question,
  //           responses: question.responses.map((response) => {
  //             return {
  //               id: response.id,
  //               response: response.response,
  //               isCorrect: response.isCorrect,
  //               isChecked: false,
  //             };
  //           }),
  //         };
  //       }),
  //     };
  //   });

  // console.log("DATAFILLED", dataFilled);

  return (
    <Container>
      <ScrollView>
        <ListQuizzes
          data={data && data.quizzes}
          error={error}
          loading={loading}
          navigation={navigation}
        />
      </ScrollView>
    </Container>
  );
};

export default Quiz;

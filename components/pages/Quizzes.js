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
        question
        responses {
          response
          isCorrect
        }
      }
    }
  }
`;

const Quiz = ({ navigation }) => {
  const { data, error, loading } = useQuery(ALL_QUIZZES);

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

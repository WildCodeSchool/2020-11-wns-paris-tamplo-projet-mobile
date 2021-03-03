import React from "react";
import { Button, View, Text } from "react-native";

const ListQuizzes = ({ data, error, loading, navigation }) => {
  console.log(navigation);

  if (loading) return <Text>Chargement des quizzes ...</Text>;
  if (error) return <Text>Error error error</Text>;

  const getQuiz = (quiz) => {
    navigation.navigate("Questions", { quiz: quiz });
  };
  return (
    <View>
      {data.map((quiz) => {
        return (
          <Button
            title={quiz.title}
            key={quiz.id}
            onPress={() => getQuiz(quiz)}
          />
        );
      })}
    </View>
  );
};
export default ListQuizzes;

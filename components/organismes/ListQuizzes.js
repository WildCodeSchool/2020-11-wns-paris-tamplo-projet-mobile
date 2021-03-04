import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const ListQuizzes = ({ data, error, loading, navigation }) => {
  if (loading) return <Text>Chargement des quizzes ...</Text>;
  if (error) return <Text>Error error error</Text>;

  const getQuiz = (quiz) => {
    navigation.navigate("Questions", { quiz: quiz });
  };
  return (
    <View style={styles.quizContainer}>
      {data.map((quiz) => {
        return (
          <View style={styles.quizElement}>
            <TouchableOpacity
              style={styles.quizButton}
              key={quiz.id}
              onPress={() => getQuiz(quiz)}
            >
              <Text style={styles.quizTextButton}>{quiz.title}</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};
export default ListQuizzes;

const styles = StyleSheet.create({
  quizContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  quizElement: {
    width: "90%",
    paddingTop: 10,
  },
  quizButton: {
    padding: 10,
    borderRadius: 4,
    alignItems: "center",
    backgroundColor: "#00B5CE",
  },
  quizTextButton: {
    color: "white",
    fontSize: 18,
  },
});

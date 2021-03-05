import React from "react";
import { ScrollView, Text, StyleSheet, View, Image } from "react-native";
import Container from "../templates/Container";
import TableNoteStudent from "../molecules/TableNoteStudent";

const Home = () => {
  return (
    <Container>
      <ScrollView>
        <View style={styles.headerHome}>
          <Image
            style={{
              width: 50,
              height: 50,
              paddingRight: 100,
              marginRight: 10,
              alignSelf: "flex-end",
            }}
            source={require("../../assets/tamplo.png")}
          />
        </View>
        <View style={styles.containerHome}>
          <Text h1 style={styles.titleHome}>
            Bienvenue sur ton espace personnel
          </Text>
          <View style={styles.containerTextHome}>
            <Text style={styles.commentHome}>
              Ici, tu vas retrouver quel quiz tu as fait, tes notes et quand il
              sont à rendre. Pour répondre aux autres quizzes, tu as l'onglet en
              bas à droite qui te mène à la liste des quizzes auxquels tu as
              accès.
            </Text>
          </View>
          <TableNoteStudent />
        </View>
      </ScrollView>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    alignItems: "center",
  },
  titleHome: {
    color: "#00B5CE",
    fontSize: 18,
    marginTop: 25,
    textTransform: "uppercase",
  },
  headerHome: {
    backgroundColor: "#00B5CE",
    padding: 10,
    marginTop: 0,
  },
  commentHome: {
    textAlign: "justify",
  },
  containerTextHome: {
    width: "90%",
    paddingTop: 15,
  },
});

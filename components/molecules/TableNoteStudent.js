import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class TableNoteStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ["Intitulé", "Note", "À rendre", "Fait"],
      tableData: [
        [
          "ReactJs",
          "15/20",
          "13/02/2021",
          <Ionicons
            name={"checkmark-outline"}
            style={{ textAlign: "center" }}
            size={24}
            color={"green"}
          />,
        ],
        [
          "POO",
          "12/20",
          "22/01/2021",
          <Ionicons
            name={"checkmark-outline"}
            style={{ textAlign: "center" }}
            size={24}
            color={"green"}
          />,
        ],
        ["ReactNative", "", "05/03/2021", ""],
        [
          "NodeJs",
          "11/20",
          "06/01/2021",
          <Ionicons
            name={"checkmark-outline"}
            style={{ textAlign: "center" }}
            size={24}
            color={"green"}
          />,
        ],
        ["Dart", "", "05/03/2021", ""],
        [
          "GraphQL",
          "15/20",
          "14/12/2020",
          <Ionicons
            name={"checkmark-outline"}
            style={{ textAlign: "center" }}
            size={24}
            color={"green"}
          />,
        ],
      ],
    };
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.titleTableStudent}>Mes Quizzes</Text>
        <Table
          borderStyle={{
            borderWidth: 2,
            borderColor: "#00B5CE",
          }}
        >
          <Row
            data={state.tableHead}
            style={styles.head}
            textStyle={styles.text}
          />
          <Rows data={state.tableData} textStyle={styles.text} />
        </Table>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    alignItems: "center",
  },
  head: {
    height: 50,
    width: "100%",
    backgroundColor: "#C8D3D5",
  },
  text: {
    padding: 2,
    paddingVertical: 10,
    alignItems: "center",
    alignSelf: "center",
    color: "#363636",
  },
  titleTableStudent: {
    fontSize: 16,
    marginVertical: 15,
    color: "#363636",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

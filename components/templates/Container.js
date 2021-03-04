import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";

const Container = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      {children}
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
});

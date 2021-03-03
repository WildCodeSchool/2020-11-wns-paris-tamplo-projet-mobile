import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Image, View } from "react-native";

const Container = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerLogo}>
        <Image
          source={{ uri: "../../assets:/logoTamplo.svg" }}
          style={styles.logo}
        />
      </View>
      {children}
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerLogo: {
    width: 100,
  },
  logo: { width: 100, height: 100 },
});

import styled from "styled-components";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Swiper from "react-native-deck-swiper";

import { Card } from "../components/Card";

import { HomeScreenPics } from "../constants/Pics";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Swiper
        cards={HomeScreenPics}
        renderCard={Card}
        infinite
        backgroundColor="white"
        cardHorizontalMargin={0}
        stackSize={2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent"
  }
});

export default HomeScreen;

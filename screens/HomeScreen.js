import * as WebBrowser from "expo-web-browser";
import styled from "styled-components";
import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <BG>
        <Title>HOME SCREEN</Title>
      </BG>
    </SafeAreaView>
  );
};

const BG = styled.View`
  background-color: black;
`;

const Title = styled.Text`
  color: white;
`;

export default HomeScreen;

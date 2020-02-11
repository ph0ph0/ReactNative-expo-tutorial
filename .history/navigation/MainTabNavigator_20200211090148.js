import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "react-navigation-stack";
import { createStackNavigator } from "@react-navigation/stack";
import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";

const HomeStackNavigator = createStackNavigator();

const HomeStack = () => (
  <HomeStackNavigator.Navigator>
    <HomeStack.Screen name={"Home"} component={HomeScreen} />
  </HomeStackNavigator.Navigator>
);

// const HomeStack = createStackNavigator({
//   Home: HomeScreen
// });

// HomeStack.navigationOptions = {
//   tabBarLabel: "Home",
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === "ios"
//           ? `ios-information-circle${focused ? "" : "-outline"}`
//           : "md-information-circle"
//       }
//     />
//   )
// };

export default createBottomTabNavigator({
  HomeStack
});

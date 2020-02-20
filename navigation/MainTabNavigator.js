import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import TabBarIcon from "../components/TabBarIcon";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";

const HomeStackNavigator = createStackNavigator();
const HomeStack = () => (
  <HomeStackNavigator.Navigator>
    <HomeStackNavigator.Screen name={"Home"} component={HomeScreen} />
  </HomeStackNavigator.Navigator>
);

const Tab = createBottomTabNavigator();

const getHomeTabBarIcon = (focused, color, size, route) => {
  return (
    <TabBarIcon Icon={MaterialCommunityIcons} focused={focused} name={"fire"} />
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name={"Home"}
        component={HomeStack}
        options={{
          tabBarIcon: focused => getHomeTabBarIcon({ focused })
        }}
      />
    </Tab.Navigator>
  );
};

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

export default TabNavigator;

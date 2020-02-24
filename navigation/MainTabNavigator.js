import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import TabBarIcon from "../components/TabBarIcon";
import {
  MaterialCommunityIcons,
  FontAwesome,
  Feather
} from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import TopPicksScreen from "../screens/TopPicksScreen";
import MessagesScreen from "../screens/MessagesScreen";
import ProfileScreen from "../screens/ProfileScreen";

const HomeStackNavigator = createStackNavigator();
const HomeStack = () => (
  <HomeStackNavigator.Navigator>
    <HomeStackNavigator.Screen name={"Home"} component={HomeScreen} />
  </HomeStackNavigator.Navigator>
);

const TopPicksStackNavigator = createStackNavigator();
const TopPicksStack = () => (
  <TopPicksStackNavigator.Navigator>
    <TopPicksStackNavigator.Screen
      name={"TopPicks"}
      component={TopPicksScreen}
    />
  </TopPicksStackNavigator.Navigator>
);

const MessagesStackNavigator = createStackNavigator();
const MessagesStack = () => (
  <MessagesStackNavigator.Navigator>
    <MessagesStackNavigator.Screen
      name={"Messages"}
      component={MessagesScreen}
    />
  </MessagesStackNavigator.Navigator>
);

const ProfileStackNavigator = createStackNavigator();
const ProfileStack = () => (
  <ProfileStackNavigator.Navigator>
    <ProfileStackNavigator.Screen name={"Profile"} component={ProfileScreen} />
  </ProfileStackNavigator.Navigator>
);

const Tab = createBottomTabNavigator();

const getHomeTabBarIcon = focused => {
  return (
    <TabBarIcon Icon={MaterialCommunityIcons} focused={focused} name={"fire"} />
  );
};

const getTopPicksTabBarIcon = focused => {
  return <TabBarIcon Icon={FontAwesome} focused={focused} name={"diamond"} />;
};

const getMessagesTabBarIcon = focused => {
  return (
    <TabBarIcon Icon={FontAwesome} focused={focused} name={"commenting-o"} />
  );
};

const getProfileTabBarIcon = focused => {
  return <TabBarIcon Icon={Feather} focused={focused} name={"user"} />;
};

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name={"Home"}
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            getHomeTabBarIcon(focused, color, size)
        }}
      />
      <Tab.Screen
        name={"TopPicks"}
        component={TopPicksStack}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            getTopPicksTabBarIcon(focused, color, size)
        }}
      />
      <Tab.Screen
        name={"Messages"}
        component={MessagesStack}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            getMessagesTabBarIcon(focused, color, size)
        }}
      />
      <Tab.Screen
        name={"Profile"}
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            getProfileTabBarIcon(focused, color, size)
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

import React from "react";
import { ScrollView, View, SafeAreaView } from "react-native";
import { Text, Tile } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import { TopPicksScreenPics } from "../constants/Pics";

const TopPicksScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text h2 style={styles.h2Style}>
          Top Picks
        </Text>
        <Text h4 h4Style={styles.h4Style}>
          Featured profiles of the day, picked just for you
        </Text>
        <View style={styles.grid}>
          {TopPicksScreenPics.map(({ pic, title, caption }, i) => (
            <Tile
              imageSrc={pic}
              activeOpacity={0.9}
              title={title}
              titleStyle={styles.title}
              caption={caption}
              captionStyle={styles.caption}
              featured
              key={title}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  h2Style: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#000"
  },
  h4Style: {
    textAlign: "center",
    color: "#757575"
  },
  grid: {
    marginTop: 20,
    marginBottom: 20
  },
  title: {
    position: "absolute",
    left: 10,
    bottom: 50,
    backgroundColor: "black",
    marginBottom: -2,
    padding: 10
  },
  caption: {
    position: "absolute",
    left: 10,
    bottom: 0,
    backgroundColor: "Black",
    marginTop: 10,
    marginBottom: 10
  }
});

export default TopPicksScreen;

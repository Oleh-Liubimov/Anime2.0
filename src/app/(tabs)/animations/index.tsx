import { Link } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

const AnimationsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Animations Screen</Text>
      <Link href="/(tabs)/animations/firstAnimation" push asChild>
        <Button title="Grow and shrink" />
      </Link>
      <Link href="/(tabs)/animations/animatedTabs" push asChild>
        <Button title="Animated Tabs" />
      </Link>
      <Link href="/(tabs)/animations/confetti" push asChild>
        <Button title="Confetti" />
      </Link>
      <Link href="/(tabs)/animations/carousel" push asChild>
        <Button title="Carousel" />
      </Link>
      <Link href="/(tabs)/animations/animatedTwo" push asChild>
        <Button title="Reanimated cubes" />
      </Link>
      <Link href="/(tabs)/animations/headerAnimation" push asChild>
        <Button title="Header animation" />
      </Link>
      <Link href="/(tabs)/animations/deleteAnimation" push asChild>
        <Button title="Delete animation" />
      </Link>
    </View>
  );
};

export default AnimationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

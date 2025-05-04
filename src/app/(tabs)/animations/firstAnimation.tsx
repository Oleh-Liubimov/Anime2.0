import { COLOR } from "@/src/constants/colors";
import { Button, StyleSheet, View } from "react-native";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

export default function FirstAnimation() {
  const width = useSharedValue(100);
  const height = useSharedValue(100);

  const handleGrowToSidesPress = () => {
    width.value = withSpring(width.value + 50);
  };

  const makeSmallerSidesPress = () => {
    width.value = withSpring(width.value - 50);
  };

  const handleGrowHeight = () => {
    height.value = withSpring(height.value + 50);
  };

  const handleShrinkHeight = () => {
    height.value = withSpring(height.value - 50);
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          width,
          height,
          backgroundColor: COLOR.background,
          borderRadius: 8,
        }}
      />
      <View style={styles.btnContainer}>
        <Button title="Grow width" onPress={handleGrowToSidesPress} />
        <Button title="Shrink width" onPress={makeSmallerSidesPress} />
        <Button title="Grow height" onPress={handleGrowHeight} />
        <Button title="Shrink height" onPress={handleShrinkHeight} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 50,
  },
  btnContainer: {
    gap: 6,
  },
});

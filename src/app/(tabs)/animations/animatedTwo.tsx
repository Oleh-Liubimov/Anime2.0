import React, { useEffect } from "react";
import { View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const AnimatedTwo = () => {
  const scale = useSharedValue(1);

  const rotate = useDerivedValue(() => {
    return `${scale.value * 2}rad`;
  });

  const rCircleStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const rCubeStyles = useAnimatedStyle(() => ({
    transform: [{ rotate: rotate.value }],
  }));

  useEffect(() => {
    scale.value = withRepeat(
      withTiming(scale.value * 2, { duration: 1000 }),
      -1,
      true
    );
  }, []);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 50,
      }}
    >
      <Animated.View
        style={[
          {
            width: 35,
            height: 35,
            borderRadius: 5,
            backgroundColor: "violet",
          },
          rCubeStyles,
        ]}
      />
      <Animated.View
        style={[
          {
            width: 30,
            height: 30,
            borderRadius: 100,
            backgroundColor: "green",
          },
          rCircleStyles,
        ]}
      />
    </View>
  );
};

export default AnimatedTwo;

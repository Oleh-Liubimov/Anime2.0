import React, { useEffect } from "react";
import { View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import AnimatedBanner from "./animatedBanner";

const MAX_HEADER_OFFSET = 200;

const HEADER_HEIGHT = 150;

const Header = () => {
  const bannerTranslateY = useSharedValue(0);
  const bannerOpacity = useSharedValue(0);
  const headerHeight = useSharedValue(HEADER_HEIGHT);

  useEffect(() => {
    bannerOpacity.value = withTiming(1, { duration: 1000 });
    headerHeight.value = withTiming(MAX_HEADER_OFFSET + HEADER_HEIGHT, {
      duration: 1000,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const rBannerStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: bannerTranslateY.value }],
    opacity: bannerOpacity.value,
  }));
  const rHeaderStyles = useAnimatedStyle(() => ({
    height: headerHeight.value,
  }));

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      if (event.translationY < 0) {
        headerHeight.value = withTiming(event.translationY, { duration: 500 });
      }
    })
    .onEnd((event) => {
      if (event.translationY < 10) {
        bannerOpacity.value = withTiming(0, { duration: 600 });
        headerHeight.value = withTiming(HEADER_HEIGHT, { duration: 600 });
      }
    });
  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View
        style={[
          {
            backgroundColor: "violet",
          },
          rHeaderStyles,
        ]}
      >
        <View />
        <Animated.View
          style={[
            { width: "90%", height: "50%", alignSelf: "center" },
            rBannerStyles,
          ]}
        >
          <AnimatedBanner />
        </Animated.View>
      </Animated.View>
    </GestureDetector>
  );
};

export default Header;

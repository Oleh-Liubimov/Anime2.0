import { Trash2 } from "lucide-react-native";
import React, { FC } from "react";
import { Dimensions, StyleSheet, Text, Vibration } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface ICard {
  index: number;
  title: string;
}
interface CardProps {
  card: ICard;
  onDelete?: (index: number) => void;
}

const CARD_HEIGHT = 70;

const SCREEN_WIDTH = Dimensions.get("screen").width;

const TRANSLATE_X_TRASHHOLD = -SCREEN_WIDTH * 0.3;

const Card: FC<CardProps> = ({ card, onDelete }) => {
  const translateX = useSharedValue(0);
  const iconOpacity = useSharedValue(0);
  const cardHeight = useSharedValue(CARD_HEIGHT);
  const cardMargin = useSharedValue(10);
  const cardOpacity = useSharedValue(1);

  const pan = Gesture.Pan()
    .onChange((event) => {
      if (event.translationX < 0) {
        translateX.value = event.translationX;
        if (translateX.value < TRANSLATE_X_TRASHHOLD) {
          iconOpacity.value = withTiming(1);
        }
      }
    })
    .onEnd(() => {
      const shouldBeDismissed = translateX.value < TRANSLATE_X_TRASHHOLD;
      if (shouldBeDismissed) {
        runOnJS(Vibration.vibrate)(50);
        translateX.value = withTiming(-SCREEN_WIDTH);
        cardHeight.value = withTiming(0);
        cardMargin.value = withTiming(0);
        cardOpacity.value = withTiming(0, {}, (isFinished) => {
          if (isFinished && onDelete) {
            runOnJS(onDelete)(card.index);
          }
        });
      } else {
        translateX.value = withTiming(0);
      }
    })
    .simultaneousWithExternalGesture();

  const rStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const rCardContainerStyles = useAnimatedStyle(() => ({
    height: cardHeight.value,
    marginVertical: cardMargin.value,
    opacity: cardOpacity.value,
  }));

  const rIconStyles = useAnimatedStyle(() => ({
    opacity: withTiming(translateX.value < TRANSLATE_X_TRASHHOLD ? 1 : 0),
  }));
  return (
    <Animated.View style={[styles.container, rCardContainerStyles]}>
      <Animated.View style={[styles.iconContainer, rIconStyles]}>
        <Trash2 color="red" />
      </Animated.View>
      <GestureDetector gesture={pan}>
        <Animated.View style={[styles.card, rStyles]}>
          <Text>{card.title}</Text>
        </Animated.View>
      </GestureDetector>
    </Animated.View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    marginVertical: 10,
  },
  card: {
    width: "90%",
    height: CARD_HEIGHT,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    paddingLeft: 20,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 10,
    elevation: 5,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: CARD_HEIGHT,
    height: CARD_HEIGHT,
    position: "absolute",
    right: "10%",
  },
});

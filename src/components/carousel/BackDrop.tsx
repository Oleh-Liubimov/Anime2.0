import { Photo } from "@/src/axios/types/photos";
import { Image, StyleSheet } from "react-native";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

interface IBackDropProps {
  photo: Photo;
  index: number;
  scrollX: SharedValue<number>;
}

export const BackDrop = ({ index, photo, scrollX }: IBackDropProps) => {
  const stylez = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollX.value,
        [index - 1, index, index + 1],
        [0, 1, 0]
      ),
    };
  });
  return (
    <Animated.Image
      source={{ uri: photo.src.large }}
      style={[StyleSheet.absoluteFillObject, stylez]}
      blurRadius={50}
    />
  );
};

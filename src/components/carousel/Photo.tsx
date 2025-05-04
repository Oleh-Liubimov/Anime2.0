import { Photo } from "@/src/axios/types/photos";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

interface IPhotoProps {
  photo: Photo;
  index: number;
  scrollX: SharedValue<number>;
}
export const { width } = Dimensions.get("screen");
export const _imageWidth = width * 0.7;
export const _imageHeight = _imageWidth * 1.76;

export const PhotoItem = ({ photo, scrollX, index }: IPhotoProps) => {
  const style = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            scrollX.value,
            [index - 1, index, index + 1],
            [1.6, 1, 1.6]
          ),
        },
        {
          rotate: `${interpolate(
            scrollX.value,
            [index - 1, index, index + 1],
            [10, 0, -10]
          )}deg`,
        },
      ],
    };
  });
  return (
    <View style={styles.container}>
      <Animated.Image
        source={{ uri: photo.src.large }}
        style={[styles.image, style]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: _imageWidth,
    height: _imageHeight,
    overflow: "hidden",
    borderRadius: 16,
  },
  image: {
    flex: 1,
  },
});

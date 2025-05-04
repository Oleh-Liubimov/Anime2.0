import { useQuery } from "@tanstack/react-query";
import { getWallpapers } from "../../axios/axios";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { _imageWidth, PhotoItem, width } from "./Photo";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { BackDrop } from "./BackDrop";

export default function Carousel() {
  const scrollX = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler((e) => {
    scrollX.value = e.contentOffset.x / (_imageWidth + 12);
  });

  const { data, isLoading } = useQuery({
    queryKey: ["photos"],
    queryFn: getWallpapers,
  });

  if (isLoading) {
    return <ActivityIndicator size={"large"} />;
  }
  return (
    <View style={[styles.container]}>
      <View style={StyleSheet.absoluteFillObject}>
        {data?.photos.map((photo, index) => (
          <BackDrop
            photo={photo}
            key={`Backdrop${index}`}
            index={index}
            scrollX={scrollX}
          />
        ))}
      </View>
      <Animated.FlatList
        data={data?.photos}
        horizontal
        contentContainerStyle={{
          gap: 12,
          paddingHorizontal: (width - _imageWidth) / 2,
        }}
        onScroll={onScroll}
        scrollEventThrottle={1000 / 60}
        style={{ flexGrow: 0 }}
        snapToInterval={_imageWidth + 12}
        decelerationRate={"fast"}
        keyExtractor={(item) => String(item.id)}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <PhotoItem photo={item} index={index} scrollX={scrollX} />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

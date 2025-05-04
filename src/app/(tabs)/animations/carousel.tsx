import Carousel from "@/src/components/carousel/Carousel";
import { StatusBar, StyleSheet, View } from "react-native";

const CarouselScreen = () => {
  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor="transparent" translucent hidden />
      <Carousel />
    </View>
  );
};

export default CarouselScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    marginTop: 0,
  },
});

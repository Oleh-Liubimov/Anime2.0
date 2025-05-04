import { useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";

export const CONFETTI_COLORS = [
  "#FFC700",
  "#FF0000",
  "#2E3192",
  "#41BBC7",
  "#7F00FF",
  "#00FF85",
  "#FF7F50",
  "#FF69B4",
  "#00BFFF",
  "#FFD700",
];

const Confetti = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<ConfettiCannon>(null);

  useEffect(() => {
    if (position) {
      ref.current?.start();
    }
  }, [position]);

  return (
    <View
      style={styles.container}
      onTouchStart={(e) => {
        setPosition({
          x: e.nativeEvent.pageX,
          y: e.nativeEvent.pageY,
        });
        ref.current?.start();
      }}
    >
      <ConfettiCannon
        ref={ref}
        count={300}
        autoStart={false}
        fadeOut
        origin={{ x: position.x, y: position.y }}
      />
    </View>
  );
};

export default Confetti;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

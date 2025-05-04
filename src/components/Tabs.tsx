import { View, StyleSheet, Pressable } from "react-native";
import { Icon, IconNames } from "./Icon";
import { COLOR } from "../constants/colors";
import Animated, {
  FadeInRight,
  LinearTransition,
} from "react-native-reanimated";
import { MotiView } from "moti";

export type TabItem = {
  icon: IconNames;
  label: string;
};

interface ITabsProps {
  data: TabItem[];
  selectedIndex: number;
  onChange: (index: number) => void;
  activeColor?: string;
  inactiveColor?: string;
  activeBackgroundColor?: string;
  inactiveBackgroundColor?: string;
}

export const Tabs = ({
  data,
  onChange,
  selectedIndex,
  activeBackgroundColor = "#111",
  activeColor = "#fff",
  inactiveBackgroundColor = "#ddd",
  inactiveColor = "#999",
}: ITabsProps) => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        const isActive = selectedIndex === index;
        return (
          <MotiView
            key={index}
            animate={{
              backgroundColor: isActive
                ? activeBackgroundColor
                : inactiveBackgroundColor,
              borderRadius: 8,
              overflow: "hidden",
            }}
            layout={LinearTransition.springify().damping(80).stiffness(200)}
          >
            <Pressable
              style={[
                styles.tab,
                {
                  backgroundColor: isActive
                    ? COLOR.activeBackground
                    : COLOR.inactiveBackground,
                },
              ]}
              onPress={() => onChange(index)}
            >
              <Icon
                name={item.icon}
                size={24}
                animate={{
                  color: isActive ? activeColor : inactiveColor,
                }}
              />
              {isActive && (
                <Animated.Text
                  entering={FadeInRight.springify().damping(80).stiffness(200)}
                  exiting={FadeInRight.springify().damping(80).stiffness(200)}
                  style={{
                    color: isActive ? COLOR.activeText : COLOR.inactiveText,
                  }}
                >
                  {item.label}
                </Animated.Text>
              )}
            </Pressable>
          </MotiView>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 6,
  },
  tab: {
    flexDirection: "row",
    padding: 8,
    alignItems: "center",
    gap: 6,
    borderRadius: 8,
  },
});

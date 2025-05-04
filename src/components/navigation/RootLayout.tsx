import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { COLOR } from "@/src/constants/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Platform } from "react-native";

export default function RootLayout() {
  const insets = useSafeAreaInsets();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLOR.primary,
        headerShown: false,
        tabBarStyle: {
          height:
            Platform.OS === "android" ? insets.bottom + 60 : insets.bottom + 40,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="animations"
        options={{
          title: "Animations",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="animation" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

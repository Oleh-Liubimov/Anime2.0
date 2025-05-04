import { TabItem, Tabs } from "@/src/components/Tabs";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

const data: TabItem[] = [
  {
    icon: "Fish",
    label: "Fish",
  },
  {
    icon: "Sailboat",
    label: "Sail",
  },
  {
    icon: "Ship",
    label: "Ship It",
  },
  {
    icon: "ShipWheel",
    label: "Ship Wheel",
  },
  {
    icon: "LifeBuoy",
    label: "Life Buoy",
  },
];

export default function AnimatedTabs() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleChange = (index: number) => {
    setSelectedIndex(index);
  };
  return (
    <View style={styles.container}>
      <Tabs data={data} selectedIndex={selectedIndex} onChange={handleChange} />
      <View style={{ flex: 1 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

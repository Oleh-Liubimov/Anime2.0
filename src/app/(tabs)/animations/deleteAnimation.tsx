import Card from "@/src/components/deleteAnimation/Card";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const CARDS = [
  { index: 0, title: "Keep up the great work! 💪" },
  { index: 1, title: "You've made real progress today 🚀" },
  { index: 2, title: "Don't forget to take a break ☕️" },
  { index: 3, title: "Set a new goal for the week 🎯" },
  { index: 4, title: "Small steps lead to big wins 🏆" },
  { index: 5, title: "Stay focused and keep pushing 📈" },
  { index: 6, title: "You're doing amazing, keep it up 🌟" },
  { index: 7, title: "One step at a time is all it takes 👣" },
  { index: 8, title: "Take pride in how far you’ve come 🌄" },
  { index: 9, title: "Believe in yourself and all you do 💫" },
  { index: 10, title: "Your effort matters every day 📅" },
  { index: 11, title: "Progress, not perfection 🔄" },
  { index: 12, title: "Keep your momentum strong ⚡️" },
  { index: 13, title: "Even small wins are worth celebrating 🎉" },
  { index: 14, title: "You're closer than you think ⏳" },
];

const DeleteAnimationScreen = () => {
  const [cards, setCards] = useState(CARDS);

  useEffect(() => {
    console.log(cards);
  }, [cards]);

  const handleDelete = (index: number) => {
    setCards((prev) => prev.filter((card) => card.index !== index));
  };
  return (
    <View style={{ flex: 1, gap: 20 }}>
      <Text>DeleteAnimation</Text>
      <ScrollView contentContainerStyle={{ paddingTop: 10 }}>
        {cards.map((card) => (
          <Card card={card} key={card.index} onDelete={handleDelete} />
        ))}
      </ScrollView>
    </View>
  );
};

export default DeleteAnimationScreen;

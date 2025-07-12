import RootLayout from "@/src/components/navigation/RootLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { StatusBar, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const queryClient = new QueryClient();

export default function TabLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView
        style={[{ flex: 1 }, StyleSheet.absoluteFillObject]}
      >
        <StatusBar />
        <RootLayout />
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}

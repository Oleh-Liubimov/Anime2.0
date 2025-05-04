import RootLayout from "@/src/components/navigation/RootLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar, StyleSheet, View } from "react-native";

const queryClient = new QueryClient();

export default function TabLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <View style={[{ flex: 1 }, StyleSheet.absoluteFillObject]}>
        <StatusBar />
        <RootLayout />
      </View>
    </QueryClientProvider>
  );
}

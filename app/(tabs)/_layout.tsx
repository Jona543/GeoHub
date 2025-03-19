import { Tabs } from "expo-router";

export default function TabLayout() {
  return ( 
    <Tabs>
      <Tabs.Screen name="(home)/home"/>
      <Tabs.Screen name="(home)/index"/>
    </Tabs>
  );
};
import { Tabs } from "expo-router";

export default function TabLayout() {
  return ( 
    <Tabs>
      <Tabs.Screen 
        name="home"
        options={{
          headerTitle: "Home",
          title: "Home"
        }}
      />
      <Tabs.Screen 
        name="weather/weather"
        options={{
          headerTitle: "Weather",
          title: "Weather"
        }}
      />
    </Tabs>
  );
};
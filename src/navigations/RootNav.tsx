import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./types";
import TabNav from "./TabNav";

const Stack = createStackNavigator<RootStackParamList>();

export default function RootNav() {
  return (
    <Stack.Navigator
      initialRouteName="TabNavigator"
      screenOptions={{
        headerShown: true, // Hide headers if you want custom headers or no headers at all
      }}
    >
      <Stack.Screen
        name="TabNavigator"
        component={TabNav}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
}

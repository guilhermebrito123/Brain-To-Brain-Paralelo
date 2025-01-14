import { NavigationContainer } from "@react-navigation/native";
import { SQLiteProvider } from "expo-sqlite";
import HomeMain from "./Navigations/HomeMain";

export default function App() {
  return (
    <SQLiteProvider databaseName="braintobrain">
      <NavigationContainer>
        <HomeMain />
      </NavigationContainer>
    </SQLiteProvider>
  );
}

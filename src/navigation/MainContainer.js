import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IonIcons from "react-native-vector-icons/Ionicons";


// importing pages
import HomeStack from "./pages/HomeStack";
import SettingsPage from "./pages/SettingsPage";
import DetailsPage from "./pages/DetailsPage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const homeName = "Home";
const settingsName = "Settings";
const detailsName = "Details";

const Tab = createBottomTabNavigator();

export default function MainContainer() {

    return (
        <NavigationContainer>
            <Tab.Navigator
                // First tab to show in the bar
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;
                        // check if already home
                        if (rn === homeName) {
                            iconName = focused ? "home" : "home-outline";
                            // check if settings
                        } else if (rn === settingsName) {
                            iconName = focused ? "list" : "list-outline";
                            // check if details
                        } else if (rn === detailsName) {
                            iconName = focused ? "list" : "list-outline";
                        }

                        return <IonIcons name={iconName} size={size} color={color} />;
                    },
                })}


                tabBarOptions={{
                    activeTintColor: "#e91e63",
                    inactiveTintColor: "gray",
                    labelStyle: { paddingBottom: 10, fontSize: 14 },
                    style: { padding: 10, height: 70, }
                }}
            >
                <Tab.Screen name={homeName} component={HomeStack} />
                <Tab.Screen name={detailsName} component={DetailsPage} />
                <Tab.Screen name={settingsName} component={SettingsPage} />


            </Tab.Navigator>
        </NavigationContainer>


    )

}

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeStack from "./HomeStack";
import DrawerContent from "../screens/DrawerContent";

const Drawer = createDrawerNavigator();

export default function Navigation() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Drawer.Navigator
                    drawerContent={(props) => <DrawerContent {...props} />}
                >
                    <Drawer.Screen name="home" component={HomeStack} />
                </Drawer.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

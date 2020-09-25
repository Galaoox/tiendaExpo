import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeStack from "./HomeStack";

const Drawer = createDrawerNavigator();

export default function Navigation() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Drawer.Navigator
                    initialRouteName="home"
                    tabBarOptions={{
                        inactiveTintColor: "#646464",
                        activeTintColor: "#00a680",
                    }}
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ color }) => screenOptions(route, color),
                    })}
                >
                    <Drawer.Screen name="home" component={HomeStack} />
                </Drawer.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

/**
 * Funcion que retorna el icono que se usara en la navegacion con el color
 * @param {*} route identificador de la ruta
 * @param {*} color
 */
function screenOptions(route, color) {
    let iconName;
    switch (route.name) {
        case "home":
            iconName = "compass-outline";
            break;
        case "favorites":
            iconName = "heart-outline";
            break;
        case "top-restaurants":
            iconName = "star-outline";
            break;
        case "search":
            iconName = "magnify";
            break;
        case "account":
            iconName = "home-outline";
            break;
        default:
            break;
    }
    return (
        <Icon
            type="material-community"
            name={iconName}
            size={22}
            color={color}
        />
    );
}

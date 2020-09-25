import React from "react";
import Home from "../screens/Home";
import { Stack } from "../utils/builder";

export default function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="home"
                options={{
                    title: "Bienvenido",
                }}
                component={Home}
            />
        </Stack.Navigator>
    );
}

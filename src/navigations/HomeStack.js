import React from "react";
import ButtonDrawer from "../components/ButtonDrawer";
import Home from "../screens/Home";
import Order from "../screens/Order";
import Product from "../screens/Product";
import { Stack } from "../utils/builder";

export default function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="home"
                options={{
                    title: "Bienvenido",
                    headerLeft: () => <ButtonDrawer />,
                }}
                component={Home}
            />
            <Stack.Screen
                name="product"
                options={{
                    title: "",
                }}
                component={Product}
            />
            <Stack.Screen
                name="order"
                options={{
                    title: "Tu pedido",
                }}
                component={Order}
            />
        </Stack.Navigator>
    );
}

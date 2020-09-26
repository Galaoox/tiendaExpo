import React from "react";
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

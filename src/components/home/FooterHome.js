import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-elements";

export default function FooterHome() {
    const navigation = useNavigation();
    const goOrder = () => {
        navigation.navigate("order");
    };
    return (
        <View style={styles.container}>
            <Text style={[styles.orderText]}>Tu orden:</Text>
            <Button
                title="Ver pedido"
                type="solid"
                buttonStyle={[styles.btn]}
                onPress={goOrder}
            />
            <Text>
                <Text style={[styles.valueOrderText]}>Valor:</Text> $30.000
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 45,
        width: "100%",
        position: "absolute",
        bottom: 0,
        backgroundColor: "#ffff",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    orderText: {
        fontWeight: "bold",
        fontSize: 18,
    },
    valueOrderText: {
        fontWeight: "bold",
        fontSize: 18,
    },
    btn: {
        backgroundColor: "#DC5641",
    },
});

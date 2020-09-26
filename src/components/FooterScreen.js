import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-elements";

export default function FooterScreen(props) {
    const { goTo, btnStyle, title } = props;

    return (
        <View style={styles.container}>
            <Text style={[styles.orderText]}>Tu orden:</Text>
            <Button
                title={title}
                type="solid"
                buttonStyle={btnStyle}
                onPress={goTo}
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
        borderTopWidth: 2,
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
        backgroundColor: "green",
    },
});

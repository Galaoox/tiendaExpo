import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button } from "react-native-elements";
import { Title } from "react-native-paper";

export default function ButtonsCounter(props) {
    const { counter, setCounter, maxNumber = null, minNumber = null } = props;
    const reduceCounter = () =>
        setCounter(
            minNumber != null && counter - 1 < minNumber ? counter : counter - 1
        );
    const increaseCounter = () =>
        setCounter(
            maxNumber != null && counter + 1 > maxNumber ? counter : counter + 1
        );
    return (
        <View style={styles.container}>
            <Button
                icon={{
                    type: "material-community",
                    name: "minus",
                    color: "#ffff",
                }}
                onPress={reduceCounter}
                buttonStyle={[styles.btn, { backgroundColor: "red" }]}
            />
            <Title>{counter}</Title>
            <Button
                onPress={increaseCounter}
                icon={{
                    type: "material-community",
                    name: "plus",
                    color: "#ffff",
                }}
                buttonStyle={[styles.btn, { backgroundColor: "green" }]}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: 200,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 15,
    },
    btn: {
        width: 50,
        borderRadius: 5,
    },
});

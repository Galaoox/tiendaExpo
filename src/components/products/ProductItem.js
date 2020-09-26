import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Image, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { SCREEN } from "../../utils/common";

export default function ProductItem({ data }) {
    const navigation = useNavigation();
    const goProduct = () =>
        navigation.navigate("product", { id: data.id, name: data.name });
    return (
        <View style={styles.container}>
            <View style={styles.containerContent}>
                <View style={styles.containerImage}>
                    <Image
                        source={data.image}
                        resizeMode="stretch"
                        style={styles.image}
                    />
                </View>
                <Text style={styles.name}>{data.name}</Text>
                <View style={styles.containerAction}>
                    <Text style={{ fontWeight: "bold" }}>$15.000</Text>
                    <Button
                        title="AGREGAR"
                        buttonStyle={styles.btn}
                        onPress={goProduct}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: SCREEN.width,
        height: 150,
    },
    containerContent: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    containerImage: {
        flex: 2,
    },
    name: {
        textAlign: "center",
        fontWeight: "bold",
        flex: 2,
    },
    image: {
        height: 130,
        width: 130,
        margin: 10,
    },
    containerAction: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
    },
    btn: {
        backgroundColor: "#DC5641",
    },
});

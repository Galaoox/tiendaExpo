import React from "react";
import {
    ImageBackground,
    StyleSheet,
    View,
    TouchableOpacity,
} from "react-native";
import { Text, Image } from "react-native-elements";
import OverlayCustom from "../OverlayCustom";

export default function CategoryItem({ data }) {
    console.log("category", data);
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <ImageBackground
                    source={require("../../../assets/products/4.png")}
                    style={styles.image}
                >
                    <OverlayCustom />
                    <Text style={styles.name}>Categoria {data.name}</Text>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        marginHorizontal: 10,
    },
    image: {
        resizeMode: "stretch",
        flex: 1,
        justifyContent: "center",
    },
    name: {
        textAlign: "center",
        color: "#ffff",
    },
});

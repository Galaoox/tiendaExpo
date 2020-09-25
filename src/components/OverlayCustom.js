import React from "react";
import { StyleSheet, View } from "react-native";
export default function OverlayCustom() {
    return <View style={[styles.overlay]} />;
}
const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        position: "absolute",
        left: 0,
        top: 0,
        opacity: 0.4,
        backgroundColor: "black",
        width: "100%",
        height: "100%",
    },
});

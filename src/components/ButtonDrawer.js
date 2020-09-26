import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function ButtonDrawer() {
    const navigation = useNavigation();
    return (
        <Icon
            type="material-community"
            name="menu"
            size={35}
            onPress={() => {
                navigation.toggleDrawer();
            }}
            containerStyle={styles.container}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 15,
    },
});

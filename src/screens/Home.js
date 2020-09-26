import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Image, Text } from "react-native-elements";
import ListCategorys from "../components/categorys/ListCategorys";
import FooterScreen from "../components/FooterScreen";
import ListProducts from "../components/products/ListProdutcs";
import { SCREEN } from "../utils/common";

export default function Home(props) {
    const { navigation } = props;
    const [categorys, setCategorys] = useState([]);
    useEffect(() => {
        setCategorys(mockDataCategorys);
    }, []);

    const viewOrder = () => {
        navigation.navigate("order");
    };

    return (
        <View style={styles.container}>
            <Image
                style={styles.landingImage}
                resizeMode="contain"
                containerStyle={styles.containerLanding}
                source={require("../../assets/landing.png")}
            />
            <View style={styles.containerCategorys}>
                <Text h4>Seleccione una categoria</Text>
                <ListCategorys data={categorys} />
            </View>
            <View style={styles.containerProducts}>
                <ListProducts data={categorys} />
            </View>
            <FooterScreen
                goTo={viewOrder}
                title="Ver pedido"
                btnStyle={styles.btnOrder}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerLanding: {
        flex: 0,
        height: SCREEN.height / 3.7,

        backgroundColor: "grey",
    },
    landingImage: {
        width: "100%",
        height: SCREEN.height / 3.7,
    },
    containerCategorys: {
        height: 130,
        marginBottom: 10,
    },
    btnOrder: {
        backgroundColor: "#DC5641",
    },
});
function mockDataCategorys() {
    const data = [];
    const random = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
    for (let index = 0; index < random; index++) {
        data.push({
            id: index,
            name: "Pruebas " + index,
            image: require("../../assets/products/2.png"),
        });
    }
    return data;
}

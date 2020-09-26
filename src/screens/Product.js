import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Image, Button } from "react-native-elements";
import { Paragraph, Title } from "react-native-paper";
import { SCREEN } from "../utils/common";
import ButtonsCounter from "../components/ButtonsCounter";

export default function Product(props) {
    const {
        navigation,
        route: {
            params: { id },
        },
    } = props;
    const [productData, setProductData] = useState({});
    const [counter, setCounter] = useState(1);
    const minValueCounter = 1;

    const setTitleHeader = () => {
        navigation.setOptions({
            title: productData.name ? productData.name : "Producto de pruebas",
        });
    };

    const getProductData = async () => {
        await setProductData({
            name: "Pizza",
            image: require("../../assets/products/5.png"),
            description:
                "Amet suscipit excepturi ducimus vero id saepe quae. Soluta dolorum et quos. Inventore eaque architecto at quas. Consectetur quaerat sit accusamus. Voluptatibus repellendus fuga voluptatem ratione ipsum a sed rem aliquid. Id ut iure consectetur sequi et quae.",
            price: 12000,
        });
        setTitleHeader();
    };
    useEffect(() => {
        getProductData();
    }, []);

    const calcPriceTotal = () => {
        return productData.price ? productData.price * counter : "";
    };

    return (
        <View style={styles.container}>
            <Image
                resizeMode="cover"
                source={require("../../assets/products/7.png")}
                style={styles.image}
            />
            <Title>Cantidad:</Title>
            <ButtonsCounter
                counter={counter}
                setCounter={setCounter}
                minNumber={minValueCounter}
            />
            <Title>Precio: {calcPriceTotal()}</Title>
            <Paragraph style={styles.description}>
                {productData.description}
            </Paragraph>
            <Button
                title="Agregar a mi pedido"
                buttonStyle={styles.btnAddCar}
                containerStyle={styles.btnContainerAddCar}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffff",
        alignItems: "center",
    },
    image: {
        width: SCREEN.width - 20,
        height: 180,
        marginTop: 10,
    },
    description: {
        marginHorizontal: 10,
        textAlign: "justify",
    },
    btnContainerAddCar: {
        bottom: 5,
        width: "95%",
        position: "absolute",
    },
    btnAddCar: {
        backgroundColor: "#DC5641",
    },
});

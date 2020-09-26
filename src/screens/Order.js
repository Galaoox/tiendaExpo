import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import FooterScreen from "../components/FooterScreen";
import TableOrder from "../components/order/TableOrder";

export default function Order(props) {
    const { navigation } = props;
    const [data, setData] = useState(mockData());

    const deleteProduct = (id) => {
        setData(data.filter((product) => product.id != id));
    };

    const confirmOrder = () => {
        navigation.navigate("order");
    };

    const updateProduct = (id, dataUpdate) => {
        const index = data.findIndex((product) => product.id === id);
        const copyData = data;
        copyData[index] = {
            ...data[index],
            quantity: dataUpdate.quantity,
            value: dataUpdate.value,
        };
        setData(copyData);
    };

    return (
        <View style={styles.container}>
            <TableOrder
                data={data}
                deleteProduct={deleteProduct}
                updateProduct={updateProduct}
            />
            <FooterScreen
                goTo={confirmOrder}
                title="Confirmar"
                btnStyle={styles.btnConfirm}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffff",
    },
    btnConfirm: {
        backgroundColor: "green",
    },
});

function mockData() {
    const data = [];
    for (let index = 1; index < 5; index++) {
        data.push({
            id: index,
            name: "Producto prueba " + index,
            value: index * 1200,
            quantity: index,
            unitaryValue: 1200,
        });
    }
    return data;
}

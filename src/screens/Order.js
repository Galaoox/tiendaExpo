import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import TableOrder from "../components/order/TableOrder";

export default function Order() {
    const [data, setData] = useState(mockData());

    const deleteProduct = (id) => {
        setData(data.filter((product) => product.id != id));
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
        <View>
            <TableOrder
                data={data}
                deleteProduct={deleteProduct}
                updateProduct={updateProduct}
            />
        </View>
    );
}

function mockData() {
    const data = [];
    for (let index = 1; index < 11; index++) {
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

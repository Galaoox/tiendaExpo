import React, { useState } from "react";
import { View, FlatList, Text } from "react-native";
import { DataTable } from "react-native-paper";
import PreviewProductOrder from "./PreviewProductOrder";

export default function TableOrder({ data, deleteProduct, updateProduct }) {
    const [visibleModal, setVisibleModal] = useState(false);
    const [productSelected, setProductSelected] = useState(null);
    const previewProduct = (idProduct) => {
        setProductSelected(data.find((product) => product.id == idProduct));
        setVisibleModal(true);
    };
    const renderItem = ({ item }) => {
        return <TableRow product={item} previewProduct={previewProduct} />;
    };
    return (
        <View>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Producto</DataTable.Title>
                    <DataTable.Title numeric>Cantidad</DataTable.Title>
                    <DataTable.Title numeric>Valor</DataTable.Title>
                </DataTable.Header>

                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(index, i) => i.toString()}
                    style={{ height: "70%" }}
                />
            </DataTable>
            {productSelected && visibleModal && (
                <PreviewProductOrder
                    visible={visibleModal}
                    setVisible={setVisibleModal}
                    product={productSelected}
                    deleteProduct={deleteProduct}
                    updateProduct={updateProduct}
                />
            )}
        </View>
    );
}

function TableRow(props) {
    const { product, previewProduct } = props;
    return (
        <DataTable.Row onPress={() => previewProduct(product.id)}>
            <DataTable.Cell>{product.name}</DataTable.Cell>
            <DataTable.Cell numeric>{product.quantity}</DataTable.Cell>
            <DataTable.Cell numeric>{product.value}</DataTable.Cell>
        </DataTable.Row>
    );
}

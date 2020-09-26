import React, { useState } from "react";
import { View } from "react-native";
import { Tooltip, Text, Image, Button } from "react-native-elements";
import { DataTable, Paragraph, Title } from "react-native-paper";
import Modal from "../Modal";
import PreviewProductOrder from "./PreviewProductOrder";

export default function TableOrder({ data, deleteProduct, updateProduct }) {
    const [visibleModal, setVisibleModal] = useState(false);
    const [productSelected, setProductSelected] = useState(null);
    const previewProduct = (idProduct) => {
        setProductSelected(data.find((product) => product.id == idProduct));
        setVisibleModal(true);
    };
    return (
        <View>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Producto</DataTable.Title>
                    <DataTable.Title numeric>Cantidad</DataTable.Title>
                    <DataTable.Title numeric>Valor</DataTable.Title>
                </DataTable.Header>

                {data &&
                    data.map((product, index) => (
                        <DataTable.Row
                            key={index}
                            onPress={() => previewProduct(product.id)}
                        >
                            <DataTable.Cell>{product.name}</DataTable.Cell>
                            <DataTable.Cell numeric>
                                {product.quantity}
                            </DataTable.Cell>
                            <DataTable.Cell numeric>
                                {product.value}
                            </DataTable.Cell>
                        </DataTable.Row>
                    ))}

                <DataTable.Pagination
                    page={1}
                    numberOfPages={3}
                    label="1-2 of 6"
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

import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Image, Button } from "react-native-elements";
import { Dialog, Paragraph, Title } from "react-native-paper";
import ButtonsCounter from "../ButtonsCounter";
import Modal from "../Modal";

export default function PreviewProductOrder(props) {
    const {
        visible,
        setVisible,
        product,
        deleteProduct,
        updateProduct,
    } = props;
    const [quantity, setQuantity] = useState(
        product?.quantity ? product.quantity : 1
    );
    const calcValue = () => {
        return product?.unitaryValue ? product.unitaryValue * quantity : 0;
    };
    const minNumber = 1;

    const deleteElement = () => {
        deleteProduct(product.id);
        setVisible(false);
    };

    const updateElement = () => {
        updateProduct(product.id, { quantity, value: calcValue() });
        setVisible(false);
    };

    return (
        <Modal visible={visible} setVisible={setVisible}>
            <Title>{product.name}</Title>
            <Image
                source={require("../../../assets/products/8.png")}
                style={styles.image}
            />
            <Paragraph style={styles.description}>
                Dolore deserunt reiciendis qui quia qui. Voluptate aspernatur
                amet quo saepe nihil consequatur id molestiae nihil. Distinctio
                quam voluptatem aut sint delectus. Quo reprehenderit quo
                consequuntur corporis ut praesentium deserunt ipsa ad. Itaque
                veritatis unde.
            </Paragraph>
            <View style={styles.containerButtonCounter}>
                <ButtonsCounter
                    setCounter={setQuantity}
                    counter={quantity}
                    minNumber={minNumber}
                />
            </View>
            <Title>Total: {calcValue()}</Title>
            <Dialog.Actions>
                <Button
                    type="clear"
                    titleStyle={styles.btnTitleDelete}
                    title="Eliminar"
                    onPress={deleteElement}
                />
                <Button
                    type="clear"
                    titleStyle={styles.btnTitleEdit}
                    title="Editar"
                    onPress={updateElement}
                />
            </Dialog.Actions>
        </Modal>
    );
}
const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 180,
    },
    description: {
        textAlign: "justify",
    },
    containerBtns: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    btnTitleDelete: {
        color: "red",
    },
    btnTitleEdit: {
        color: "green",
    },
    containerButtonCounter: {
        justifyContent: "center",
        alignItems: "center",
    },
});

import React from "react";
import { View, FlatList } from "react-native";
import ProductItem from "./ProductItem";

export default function ListProducts(props) {
    const { data } = props;
    const renderItem = ({ item }) => <ProductItem data={item} />;
    return (
        <View>
            <FlatList
                style={{ marginBottom: 50 }}
                data={data}
                renderItem={renderItem}
                keyExtractor={(index, i) => i.toString()}
            />
        </View>
    );
}

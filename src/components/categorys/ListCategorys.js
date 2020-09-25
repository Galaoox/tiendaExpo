import React from "react";
import { View, FlatList } from "react-native";
import CategoryItem from "./CategoryItem";

export default function ListCategorys(props) {
    const renderItem = ({ item }) => <CategoryItem data={item} />;
    return (
        <View>
            <FlatList
                data={props.data}
                renderItem={renderItem}
                keyExtractor={(index, i) => i.toString()}
                horizontal
                extraData={props}
            />
        </View>
    );
}

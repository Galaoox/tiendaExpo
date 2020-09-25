import React, { useState } from "react";
import { View, StyleSheet, FlatList, Dimensions } from "react-native";
import { Image, Text, Button } from "react-native-elements";

const SCREEN = Dimensions.get("screen");

export default function Home() {
  const [categorys, setCategorys] = useState(mockDataCategorys());
  console.log(categorys);
  return (
    <View style={styles.container}>
      <Image
        style={styles.landingImage}
        resizeMode="contain"
        containerStyle={styles.containerLanding}
        source={require("../../assets/landing.jpg")}
      />
      <View style={styles.containerCategorys}>
        <Text h4>Seleccione una categoria</Text>

        <FlatList
          data={mockDataCategorys()}
          renderItem={CategoryElement}
          keyExtractor={(index, i) => i.toString()}
          horizontal
        />
      </View>
      <View style={styles.containerProducts}>
        <FlatList
          data={mockDataCategorys()}
          renderItem={ProductElement}
          keyExtractor={(index, i) => i.toString()}
        />
      </View>
    </View>
  );
}

function CategoryElement(item) {
  return (
    <View style={styles.containeritemCategory}>
      <Text style={{ textAlign: "center" }}>Categoria pruebas</Text>
    </View>
  );
}
function ProductElement() {
  return (
    <View style={styles.containerItemProduct}>
      <View style={styles.containerContentProduct}>
        <View style={styles.containerProducts}>
          <Image
            source={require("../../assets/landing.jpg")}
            resizeMode="contain"
            style={{ height: "100%", width: 150 }}
          />
        </View>
        <Text style={[{ textAlign: "center" }, styles.containerProducts]}>
          Producto pruebas
        </Text>
        <View style={styles.containerProducts}>
          <Text style={{ fontWeight: "bold" }}>123456</Text>
          <Button title="AGREGAR" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  containerLanding: {
    flex: 2,
  },
  landingImage: {
    width: 250,
    height: 250,
    marginBottom: 30,
  },
  containerCategorys: {
    height: 130,
    marginBottom: 10,
  },
  containeritemCategory: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    marginHorizontal: 10,
  },
  containerProducts: {
    flex: 2,
  },
  containerItemProduct: {
    width: SCREEN.width,
    height: 150,
    borderWidth: 2,
  },
  containerContentProduct: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

function mockDataCategorys() {
  const data = [];
  for (let index = 0; index < 5; index++) {
    data.push({
      id: index,
      name: "categoria " + index,
      image: require("../../assets/landing-restaurant.jpeg"),
    });
  }
  return data;
}

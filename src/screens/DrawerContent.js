import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Avatar, Icon } from "react-native-elements";
import { Caption, Drawer, Paragraph, Title } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

export default function DrawerContent(props) {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={styles.containerUserInfo}>
                            <Avatar
                                size={"large"}
                                rounded
                                source={require("../../assets/person-example.jpeg")}
                            />
                            <View style={styles.containerInfo}>
                                <Title style={styles.title}>
                                    Erick Vergara
                                </Title>
                                <Caption style={styles.caption}>
                                    @erick1984
                                </Caption>
                            </View>
                        </View>
                        {/* <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph
                                    style={[styles.paragraph, styles.caption]}
                                >
                                    80
                                </Paragraph>
                                <Caption style={styles.caption}>
                                    Following
                                </Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph
                                    style={[styles.paragraph, styles.caption]}
                                >
                                    100
                                </Paragraph>
                                <Caption style={styles.caption}>
                                    Followers
                                </Caption>
                            </View>
                        </View> */}
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="home-outline"
                                    type="material-community"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Inicio"
                            onPress={() => navigation.navigate("home")}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="cart-outline"
                                    type="material-community"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Pedido"
                            onPress={() => navigation.navigate("order")}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="truck-fast"
                                    type="material-community"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Pedidos"
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account-outline"
                                    type="material-community"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Cuenta"
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="exit-to-app"
                            type="material-community"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Cerrar sesión"
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    containerUserInfo: {
        flexDirection: "row",
        marginTop: 15,
        alignItems: "center",
    },
    containerInfo: {
        marginLeft: 15,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: "bold",
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    section: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 15,
    },
    paragraph: {
        fontWeight: "bold",
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: "#f4f4f4",
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});

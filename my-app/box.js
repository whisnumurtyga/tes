import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export const Box = () => {
    return (
        <View style={styles.outerContainer}>
            <View style={[styles.box, styles.container]}>
                <View style={styles.group}>
                    <View style={styles.overlapGroup}>
                        <View style={styles.rectangleWrapper}>
                            <View style={styles.rectangle} />
                        </View>
                        <View style={styles.div}>
                            <Image
                                style={styles.image}
                                source={require("./image-28.png")}
                                // Add appropriate image source path for image 28.png
                            />
                            <Text style={styles.textWrapper}>Home</Text>
                        </View>
                        <View style={styles.group2}>
                            <Image
                                style={styles.img}
                                source={require("./image-29.png")}
                                // Add appropriate image source path for image 29.png
                            />
                            <Text style={styles.textWrapper2}>Order</Text>
                        </View>
                        <View style={styles.group3}>
                            <Image
                                style={styles.image2}
                                source={require("./image-30.png")}
                                // Add appropriate image source path for image 30.png
                            />
                            <Text style={styles.textWrapper2}>Chat</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    box: {
        height: 70,
        width: 377,
    },
    group: {
        // height: 70,
        position: "absolute",
        top: 0,
        left: 0,
        width: 377,
    },
    overlapGroup: {
        borderRadius: 10,
        height: 70,
        position: "relative",
    },
    rectangleWrapper: {
        backgroundColor: "#ffffff",
        borderRadius: 10,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: -0.05,
        },
        shadowOpacity: 0.4,
        shadowRadius: 1,
        height: 70,
        position: "absolute",
        top: 0,
        left: 0,
        width: 377,
    },
    rectangle: {
        backgroundColor: "#2e6b60",
        borderRadius: 5,
        height: 2,
        position: "relative",
        left: 58,
        width: 35,
    },
    div: {
        height: 39,
        position: "absolute",
        top: 5,
        left: 57,
        width: 40,
    },
    image: {
        height: 20,
        width: 20,
        position: "absolute",
        top: 0,
        left: 8,
        resizeMode: "cover",
    },
    textWrapper: {
        color: "#000000", // Change to your desired text color
        // fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        fontWeight: "600",
        height: 15,
        position: "absolute",
        top: 24,
        left: 0,
    },
    group2: {
        height: 39,
        position: "absolute",
        top: 7,
        left: 176,
        width: 38,
    },
    img: {
        height: 20,
        width: 20,
        position: "absolute",
        top: 0,
        left: 5,
        resizeMode: "cover",
    },
    textWrapper2: {
        color: "#000000", // Change to your desired text color
        // fontFamily: 'Montserrat-Medium',
        fontSize: 12,
        fontWeight: "500",
        height: 15,
        position: "absolute",
        top: 24,
        left: 0,
        opacity: 0.5,
    },
    group3: {
        height: 39,
        position: "absolute",
        top: 7,
        left: 293,
        width: 31,
    },
    image2: {
        height: 20,
        width: 20,
        position: "absolute",
        top: 0,
        left: 4,
        resizeMode: "cover",
    },
});

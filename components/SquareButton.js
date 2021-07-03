import React from "react";
import {StyleSheet, TouchableOpacity, Text} from "react-native";

const SquareButton = (props) => {
    return (
        <TouchableOpacity style={[styles.squareButton, props.style]} onPress={props.onPress}>
            <Text style={[props.style, styles.squareButtonText]}>{props.text}</Text>
        </TouchableOpacity>
        );
}

const styles = StyleSheet.create({
    squareButton: {
        width: 68,
        height: 68,
        backgroundColor: '#e4eded',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    squareButtonText: {
        fontSize: 28,
        height: 30,
    }
});


export default SquareButton;

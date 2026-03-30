import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default function Addbottom({ text, onPress }: { text: string, onPress: () => void }) {
    return (

        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>

    )
}


const styles = StyleSheet.create({
    container: {
        width: 80,
        height: 50,
        backgroundColor: '#b63a3aff',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#b60000ff',
        borderRadius: 20,
        shadowColor: '#5a5a5aff',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffffff',
        fontFamily: 'Arial',
    },
})
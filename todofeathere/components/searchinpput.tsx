import { Text, StyleSheet, View, TextInput } from 'react-native'
import React, { Component } from 'react'

export default function Searchinpput({ placeholder, value, onChangeText }: { placeholder: string, value: string, onChangeText: (text: string) => void }) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor="#999"
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingRight: 10,
        backgroundColor: '#ffffffff',
    },
    headertext: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4c525eff',
        fontFamily: 'Arial',
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: '#ffffffff',
        marginRight: 10,
        paddingHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        fontSize: 15,
    },
})
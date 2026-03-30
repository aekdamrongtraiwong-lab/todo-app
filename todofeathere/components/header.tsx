import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = ({ text }: { text: string }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headertext}>{text}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#e4e4e4ff',
    },
    headertext: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#024361ff',
        fontFamily: 'Arial',
    },
})
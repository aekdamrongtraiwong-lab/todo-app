import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const Nodata = ({ text }: { text: string }) => {
    return (
        <View style={styles.container}>
            <Ionicons name="file-tray-outline" size={100} color="#424242ff" />
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

export default Nodata

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#424242ff',
        fontFamily: 'Arial',
    },
})
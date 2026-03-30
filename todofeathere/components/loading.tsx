import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Loading() {
    return (
        <View>
            <ActivityIndicator size="large" color="#3d74dbff" />
            <Text>loading...</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
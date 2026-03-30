import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Searchinpput from './components/searchinpput'
import Header from './components/header'
import { SafeAreaView } from 'react-native-safe-area-context'
import Nodata from './components/nodata'
import Addbottom from './components/addbottom'
import useTodo from './hooks/useTodo'
import TodoCards from './components/todocards'
import Loading from './components/loading'

const Todoscreen = () => {
    const { data, loading, error, addTodo, deleteTodo, toggleTodo } = useTodo()
    const [text, setText] = useState<string>('');

    if (loading) {
        return <Loading />
    }
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Header text="Todo-app" />
                <View style={{ height: 10 }} />
                <Text style={styles.headertext}>Add Todo</Text>
                <View style={styles.container2}>
                    <View style={[styles.rowwrapper, { paddingHorizontal: 10 }]}>
                        <Searchinpput placeholder="What do you want to do?" value={text} onChangeText={setText} />
                        <Addbottom text="Add" onPress={() => addTodo(text)} />
                    </View>
                </View>
                <Text style={styles.headertext}>Todo List</Text>
                <View style={styles.container3}>
                    <FlatList
                        data={data}
                        renderItem={({ item, index }) => <TodoCards index={index} item={item} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />}
                        keyExtractor={(item, index) => index.toString()}
                        ListEmptyComponent={<Nodata text="No data" />}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Todoscreen

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#ffffffff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    container2: {
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container3: {
        width: '100%',
        paddingHorizontal: 10,
    },
    listcontainer: {
        flex: 1,
        borderColor: 'gray',
        padding: 10,
    },
    earchinput: {
        flex: 0.8,
        padding: 10,
        borderColor: 'gray',
    },
    rowwrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headertext: {
        marginHorizontal: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3d74dbff',
    },

})
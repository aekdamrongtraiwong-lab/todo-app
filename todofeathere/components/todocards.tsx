
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { TypeTodolist } from "../untils/todomodel";
const TodoCards = ({ index, item, toggleTodo, deleteTodo }: { index: number, item: TypeTodolist, toggleTodo: (id: number) => void, deleteTodo: (id: number) => void }) => {
    return (
        <TouchableOpacity onPress={() => toggleTodo(item.id)}>
            <View style={[styles.container, { backgroundColor: item.completed ? "#cfcfcfff" : "#ffffffff", opacity: item.completed ? 0.5 : 1 }]}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <FontAwesome name={item.completed ? "check-square-o" : "square-o"} size={25} color="#3a3a3aff" />
                    <Text style={[styles.text, { textDecorationLine: item.completed ? "line-through" : "none" }]}>{index + 1} : {item.title}</Text>
                </View>
                <TouchableOpacity onPress={() => deleteTodo(item.id)}>
                    <FontAwesome name="trash" size={25} color="#e93a3aff" />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
}

export default TodoCards;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffffff',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 16,
        borderRadius: 16,
        shadowColor: '#494949ff',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        margin: 10
    },
    text: {
        color: '#3d3d3dff',
        fontSize: 17,
        fontWeight: '500',
    },
});
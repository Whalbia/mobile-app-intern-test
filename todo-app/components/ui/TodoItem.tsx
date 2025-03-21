import { View, Text, StyleSheet, Pressable } from "react-native"
import React from "react"
import { Todo } from "@/app"

interface TodoProps {
    todo: Todo
    changeCompletion(item: Todo): Promise<void>,
    deleteItem(item: Todo): Promise<void>
}


const TodoItem: React.FC<TodoProps> = ({todo, changeCompletion, deleteItem}) => {
    return (
        <View style={styles.todoContainer}>
            {/* completion checkbox */}
            <Pressable style={[styles.completionButton, todo.completed ? styles.completed : null]} onPress={() => changeCompletion(todo)}></Pressable>

            <Text style={[styles.todoText, todo.completed ? styles.completedText : null]}>{todo.name}</Text>

            {/* delete button */}
            <Pressable onPress={() => deleteItem(todo)}>
                <Text style={styles.deleteButton}>Delete</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    completionButton: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        marginRight: 10
    },
    completed: {
        backgroundColor: '#C0C0C0'
    },
    completedText: {
        color: '#C0C0C0',
        textDecorationLine: "line-through"
    },
    todoContainer: {
        flexDirection: "row",
        marginBottom: 10,
        alignItems: 'center'
    },
    todoText: {
        paddingBottom: 5,
        flex: 1,
        fontWeight: '400',
        fontSize: 16
    },
    deleteButton: {
        marginLeft: 10,
        padding: 8,
        backgroundColor: '#FF3B30',
        color: '#F8F9FA',
        borderRadius: 3
    }
})

export default TodoItem;
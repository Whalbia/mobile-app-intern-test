import { Text, View, StyleSheet, TextInput, Pressable, SafeAreaView } from "react-native";
import { useState, useEffect } from "react";
import TodoItem from "@/components/ui/TodoItem";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type Todo = {
  name: string,
  id: number,
  completed: boolean
} 

export default function Index() {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [text, onChangeText] = useState<string>("");

  useEffect(()=>{
    getTodos().then(data => setTodos(data ? data.map((value) => value[1] != null ? JSON.parse(value[1]) : {}) : []))
  }, [])

  const getTodos = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const jsonValue = await AsyncStorage.multiGet(keys);
      return jsonValue
    } catch(e) {
      // read error
    }
  }

  const changeCompletion = async (item: Todo) => {
    const completedItem = {...item, completed: !item.completed}
    try {
      await AsyncStorage.setItem(`${item.id}`, JSON.stringify(completedItem));
      setTodos(todos.map((task) => {
        if (task.id == completedItem.id) {
          return completedItem
        }
        else {return task}
      }))
    } 
    catch (e) {
      console.log("failure")
    }
  }

  const deleteItem = async (item: Todo) => {
    try {
      await AsyncStorage.removeItem(`${item.id}`);
      setTodos(todos.filter((task) => task.id != item.id))
    } 
    catch (e) {
      console.log("failure")
    }
  }

  const addItem = async (value: string) => {
    const item = {
      name: value,
      id: Date.now(), //unique id
      completed: false
    }

    const newState = [...todos, item]
    const jsonValue = JSON.stringify(item)
    try {
      await AsyncStorage.setItem(`${item.id}`, jsonValue);
      setTodos(newState)
      // clear text input
      onChangeText("")
    } 
    catch (e) {
      console.log("failure")
    }
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.pageWrapper}>
        {/* header */}
        <Text style={styles.headerText}>To-Do</Text>
        {/* container for todos */}
        <View>
          {todos.map((item) => !item.completed ? <TodoItem key={item.id} todo={item} changeCompletion={changeCompletion} deleteItem={deleteItem}></TodoItem> : null)}
        </View>

        {/* completed items */}
        {todos.some(item => item.completed) ? <Text style={styles.sectionHeader}>Completed tasks</Text> : null}
        <View>
          {todos.map((item) => item.completed ? <TodoItem key={item.id} todo={item} changeCompletion={changeCompletion} deleteItem={deleteItem}></TodoItem> : null)}
        </View>

        {/* add item button */}
        <View style={styles.addContainer}>
          <TextInput placeholder="Add a task" placeholderTextColor={'#888888'} value={text} onChangeText={onChangeText} style={styles.inputBox}></TextInput>
          <Pressable onPress={() => addItem(text)}>
              <Text style={styles.submitButton}>Submit</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  headerText: {
    fontSize: 30,
    paddingBottom: 20,
    fontFamily: "Open Sans"
  },
  pageWrapper: {
    flex: 1,
    paddingHorizontal: 40,
    paddingVertical: 30
  },
  addContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: 20
  },
  sectionHeader: {
    fontSize: 20,
    marginVertical: 15
  },
  inputBox: {
    flex: 1
  },
  submitButton: {
    marginLeft: 10,
    padding: 8,
    backgroundColor: '#4A90E2',
    color: '#F8F9FA',
    borderRadius: 3
  }
})
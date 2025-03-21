import { View, Text, Pressable, StyleSheet, TextInput } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AddItem() {
    const addItem = async (value: string) => {
        try {
            await AsyncStorage.setItem('my-key', value);
          } catch (e) {
            // saving error
          }
    }
    
    return (
        <View>
            <TextInput></TextInput>
            <Pressable onPress={() => addItem("test")}>
                <Text>Submit</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    todoContainer: {

    },
    todoText: {

    }
})
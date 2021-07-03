import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import TodoInput from './src/components/TodoInput';
import TodoItem from './src/components/TodoItem';

export default function App() {

  const [todoItems, setTodoItems] = useState([
    {
      text: 'Buy Milk',
      completed: true
    },
    {
      text: 'Home Work',
      completed: false
    }
  ])

  //Add

  const addItem = (_text) => {
    setTodoItems([
      ...todoItems,
      {
        text: _text,
        completed: false
      }
    ])
  }

  //Delete
  const deleteItem = (_index) => {
    let tempArr = [...todoItems]
    tempArr.splice(_index, 1)
    setTodoItems(tempArr)
  }
  //Completed
  const completeItem = (_index) => {
    let tempArr = [...todoItems]
    tempArr[_index].completed = !tempArr[_index].completed
    setTodoItems(tempArr)
  }


  return (
    <View style={styles.container}>
      <SafeAreaView style={{padding: 16, justifyContent: 'space-between', flex: 1}}>
        <Text style={{fontSize: 35, fontWeight: 'bold', marginBottom: 25, marginTop: 50}}>Todo App</Text>

        <FlatList 
          data={todoItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <TodoItem 
                item={item}
                deleteFunction={() => deleteItem(index)}
                completeFunction={() => completeItem(index)}
              />
            )
          }}
        />

        {/* <View style={{}}>
        {todoItems.map((item, index) => (
          <TodoItem completeFunction={() => completeItem(index)} deleteFunction={() => deleteItem()} item={item} key={index} />
          ))}
        </View> */}

        <TodoInput onPress={addItem} />
      </SafeAreaView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

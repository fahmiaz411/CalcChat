import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const TodoItem = ({item, deleteFunction, completeFunction}) => {

    let style = item.completed ? {
        textDecorationLine: 'line-through'
    } :
    {
        textDecorationLine: 'none'
    }

    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5}}>
            <TouchableOpacity onPress={completeFunction} style={{backgroundColor: ''}}>
                <Text style={[{fontSize: 18, color: '#e67e22'}, style]}>{item.text}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
                backgroundColor: '#e74c3c',
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: 5,
                borderRadius: 5
            }} onPress={deleteFunction}>
                <Text style={{color: 'white', paddingHorizontal: 10}}>X</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TodoItem

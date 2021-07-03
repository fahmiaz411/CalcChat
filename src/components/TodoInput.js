import React, {useState} from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'

const TodoInput = ({onPress}) => {

    const [text, setText] = useState('')

    return (
        <View>
            <TextInput value={text} onChangeText={(text) => setText(text)} style={{
                borderColor: '#2ecc71',
                borderWidth: 1,
                color: 'red',
                borderRadius: 5,
                marginVertical: 5,
                paddingHorizontal: 5
            }} placeholder="Enter" />

            <TouchableOpacity style={{borderRadius: 5, backgroundColor: '#2ecc71', paddingVertical: 3}} onPress={() => {
                onPress(text)
                setText('')
                }}>
                <Text style={{alignSelf: 'center', color: 'white'}}>Add Todo</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TodoInput

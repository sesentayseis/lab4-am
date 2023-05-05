import { View, Text ,TextInput} from 'react-native'
import React, {useState} from 'react';

const NombreScreen = () => {
    const[text,setText]=useState(''); 
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10 }}>
      <TextInput
        style={{height: 40}}
        placeholder="Saludame para saludarte "
        onChangeText={newText=>setText(newText)}
        defaultValue={text}
      />
      <Text style={{padding:10,fontSize:42}}>
        {text
          .split(' ')
          .map(word=>word && 'Te saludo mucho gusto soy Carlos Condori')  
          .join(' ')
        }
      </Text>
    </View>
  )
}

export default NombreScreen
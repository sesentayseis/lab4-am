import React, {useState} from 'react';
import { Text, View, Button } from 'react-native';

const Perro =(props)=>{
    const[conHambre,indicarTieneHambre]=useState(true);
    
    return (
      <View>
        <Text>
          Soy {props.name}, y estoy {conHambre ? 'con hambre':'lleno'}
        </Text>
        <Button
          onPress={()=>{
            indicarTieneHambre(false);
          }}
          disabled={!conHambre}
        title={conHambre?'Dame comida, por favor':'Gracias'}
        />
        
                
      </View>    
    );
  }

const SettingScreen = () => {
  return (
    <View>
    <Perro name="Mailo"/>
    <Perro name="Tobi"/>
    <Perro name="Spike"/>
  </View>
  )
}

export default SettingScreen
import { View, Text ,Image} from 'react-native'
import React from 'react'

const ProfileScreen = () => {
  return (
    <View>
        <Text style={{color: 'red'}}>Mi perfil,tarea echa por Carlos Mnauel Condori Choqueahuayta</Text>
        <Image
            source={{ uri: 'https://static.wikia.nocookie.net/doblaje/images/f/fb/Charliebrown.png/revision/latest?cb=20101107064312&path-prefix=es' }}
            style={{ width: 300, height: 559 ,alignSelf: 'center' }}
        />
    </View>
  )
}

export default ProfileScreen
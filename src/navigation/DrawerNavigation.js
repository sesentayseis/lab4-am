import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfileScreen from "../screens/ProfileScreen";
import SettingScreen from "../screens/SettingScreen";
import React from "react";
import NombreScreen from "../screens/NombreScreen";
const Drawer = createDrawerNavigator()

export function DrawerNavegation() {

    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Perfil" component={ProfileScreen}/>
            <Drawer.Screen name="Alimentar perros" component={SettingScreen}/>
            <Drawer.Screen name="Saludos" component={NombreScreen}/>
        </Drawer.Navigator>
    )
}
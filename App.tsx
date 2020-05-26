import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './src/pages/LoginPage'
import Home from './src/pages/HomePage'

export default function App() {

    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name='Login' component={ Login } />
                <Stack.Screen name='Home' component={ Home } />
            </Stack.Navigator>
        </NavigationContainer>
      )
}
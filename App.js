import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './src'
import YHCameraScreen from './src/containers/YHCamera'
import PhotographScreen from './src/containers/Photograph'
import ScanPickScreen from './src/containers/ScanPick'

const Stack = createStackNavigator()

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none" initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="YHCamera" component={YHCameraScreen} />
                <Stack.Screen name="Photograph" component={PhotographScreen} />
                <Stack.Screen name="ScanPick" component={ScanPickScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App

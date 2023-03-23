import {SCREEN_LOADING, SCREEN_HOME, SCREEN_SERVICES} from '../screens'
import React from 'react'
import { Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { CardStyleInterpolators, createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { COLORS } from '../utils/const'

import Loading from '../screens/loading'
import Home from '../screens/home'
import Services from '../screens/services'


const Stack = createStackNavigator()

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={SCREEN_LOADING}
                    component={Loading}
                    options={{
                        headerShown: false
                    }}
                    s
                />
                <Stack.Screen
                    name={SCREEN_HOME}
                    component={Home}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name={SCREEN_SERVICES}
                    component={Services}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
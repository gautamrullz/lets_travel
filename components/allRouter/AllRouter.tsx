import React from 'react'
import { Animated, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Landing from '../landing/Landing';
import Login from '../login/Login';
import Register from '../register/Register';

const AllRouter = (): React.JSX.Element => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="lets travel"
                options={
                    {
                        headerStyle: {
                            backgroundColor: '#6256CA',
                        },
                        headerTitleStyle: {
                            color: '#fff'
                        },
                        headerTintColor: '#fff',
                        headerTitleAlign: 'center',
                        // headerShown: false
                    }
                } component={Landing} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            {/* <Stack.Screen name="location" component={Location} /> */}
            {/* <Stack.Screen name="booking" component={Booking} /> */}
        </Stack.Navigator>
    )
}

export default AllRouter

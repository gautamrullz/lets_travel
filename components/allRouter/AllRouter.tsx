import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Landing from '../screens/landing/Landing';
import Login from '../screens/login/LoginScreen';
import RegisterScreen from '../screens/register/RegisterScreen';

const AllRouter = (): React.JSX.Element => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="StartScreen"
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="StartScreen"
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
                        headerShown: false
                    }
                } component={Landing} />
            <Stack.Screen name="LoginScreen" component={Login} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            {/* <Stack.Screen name="location" component={Location} /> */}
            {/* <Stack.Screen name="booking" component={Booking} /> */}
        </Stack.Navigator>
    )
}

export default AllRouter

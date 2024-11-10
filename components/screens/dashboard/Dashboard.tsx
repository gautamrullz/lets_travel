import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './home/Home';
import { View,Text } from 'react-native';
import CustomDrawer from './customDrawer/CustomDrawer';
import { theme } from '../../../core/theme';

const Drawer = createDrawerNavigator();

export default function Dashboard({ navigation }) {
    return (
        <Drawer.Navigator
        drawerContent={(props)=><CustomDrawer {...props}/>}
        initialRouteName="Home"
            screenOptions={({ navigation }) => ({
                headerShown: true, // Ensure the header is shown in Drawer
                headerStyle: { backgroundColor: theme.colors.secondary },
                headerTintColor: '#fff',
                headerTitleAlign:'center',
                // Custom icons in headerRight
                headerRight: () => (
                    <View style={{ flexDirection: 'row', marginRight: 10 }}>
                        <View style={{ flexDirection: 'row',backgroundColor:'white'}}>
                            <Text>Icon</Text>
                        </View>
                    </View>
                ),
            })}
        >
            <Drawer.Screen name="Home" component={Home} />
            {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
        </Drawer.Navigator>

    )
}
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { theme } from '../../../../core/theme'

const CustomDrawer = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between', padding: 20, alignItems: 'center', backgroundColor: theme.colors.secondary,
                }}>
                    <View>
                        <Text style={{ color: theme.colors.darkBackgroundText }}>Gautam Kumar</Text>
                        <Text style={{ color: theme.colors.darkBackgroundText }}>gautam@gmail.com</Text>
                    </View>
                    <Image
                        style={{ width: 60, height: 60, borderRadius: 30 }}
                        source={{ uri: 'https://images.unsplash.com/photo-1730343464315-a9ca01f9f1c6?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}>
                    </Image>
                </View>
                <DrawerItemList {...props}>

                </DrawerItemList>

            </DrawerContentScrollView>
            <TouchableOpacity style={{ padding: 20, backgroundColor: '#f6f6f6', bottom: 50 }} onPress={() => props.navigation.reset({
                index: 0,
                routes: [{ name: 'StartScreen' }],
            })}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomDrawer
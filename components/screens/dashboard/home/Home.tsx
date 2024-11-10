import React from 'react'
import Background from '../../../helperComponents/Background'
import Logo from '../../../helperComponents/Logo'
import { Button, Paragraph } from 'react-native-paper'
import Header from '../../../helperComponents/Header'
import { ScrollView } from 'react-native-gesture-handler'
import { View, Text } from 'react-native'
import Card from '../card/Card'
import { theme } from '../../../../core/theme'
import CityList from './cityList/CityList'
import { SafeAreaView } from 'react-native-safe-area-context'


const Home = ({ navigation }) => {

    const recentLoaction = [
        {
            id: 1,
            url: 'https://images.unsplash.com/photo-1730299135411-a58e71323024?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Location - 1'
        },
        {
            id: 2,
            url: 'https://images.unsplash.com/photo-1730637355876-e6f003d5760a?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Location - 1'
        },
        {
            id: 3,
            url: 'https://images.unsplash.com/photo-1730401723426-5ef4de56df92?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Location - 1'
        },
        {
            id: 4,
            url: 'https://images.unsplash.com/photo-1730650352721-5f88c64d3394?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Location - 1'
        },
        {
            id: 5,
            url: 'https://images.unsplash.com/photo-1730466373946-b95a82ad64a4?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Location - 1'
        },
        {
            id: 6,
            url: 'https://images.unsplash.com/photo-1634708932311-7e46bce23291?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Location - 1'
        },
    ]

    return (
        <View style={{flex:1}}>
            <View>
                <View>
                    <Text style={[theme.fonts.headlineSmall, { padding: 20 }]}>Recent</Text>
                </View>
                <ScrollView horizontal={true}>
                    <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 10, paddingBottom: 20, justifyContent: 'space-between' }}>
                        {recentLoaction.map((location) => <Card key={location.id} location={location}></Card>)}
                    </View>
                </ScrollView>
            </View>
            <View>
                <Text style={[theme.fonts.headlineSmall, { padding: 20 }]}>Cities</Text>
            </View>
            <SafeAreaView style={{ flex: 1 }}>
                <CityList cities={recentLoaction}></CityList>
            </SafeAreaView>
        </View>
    )
}

export default Home
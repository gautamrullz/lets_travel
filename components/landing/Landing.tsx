import React from 'react'
import { Button, SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'

const Landing = ({ navigation }: any): React.JSX.Element => {

    const handlePress = () => {
        navigation.navigate('Login');
    }

    return (
        <SafeAreaView>
            <StatusBar />
            <ScrollView>
                {/* <Button title='Login' onPress={
                    // () => handlePress()
                    () => console.log("pressed")
                    }></Button> */}
                <View>
                    <Button title='Login' onPress={() => handlePress()}></Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Landing
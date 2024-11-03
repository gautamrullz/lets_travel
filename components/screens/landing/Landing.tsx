import React from 'react'
import {
    Button,
    Image,
    SafeAreaView,
    ScrollView, StatusBar,
    StyleSheet,
    Text, TouchableHighlight,
    TouchableOpacity, View
} from 'react-native'


const Landing = ({ navigation }: any): React.JSX.Element => {

    const handlePress = () => {
        navigation.navigate('LoginScreen');
    }

    return (
        <SafeAreaView>
            <StatusBar backgroundColor={'rgb(0, 148, 157)'} />
            <ScrollView>
                {/* <View>
                    <Button title='Login' onPress={() => handlePress()}></Button>
                </View> */}
                <View style={styles.startupPage}>
                    <View style={styles.applicationLogoContainer}>
                        <View style={{ marginBottom: 30 }}>
                            <Image
                                style={styles.logo}
                                source={require('../../../assets/images/logo.png')}
                            />
                        </View>
                        <View>
                            <Text style={styles.logoTextPrimary}>Lets Travel</Text>
                            <Text style={styles.logoText}>Time to move out</Text>
                        </View>
                    </View>
                    <View style={styles.connectWithMeContainer}>
                        <View style={styles.connectText}><Text style={{ fontSize: 16, paddingHorizontal: 20 }}>make this the best of all the travling app you have seen </Text></View>
                        <View style={styles.connectLogo}>
                            <Image style={styles.githubLogo}
                                // source={require('../../assets/images/github-mark.png')}
                                source={require('../../../assets/images/github-mark.png')}
                            />
                            {/* <Logo width={50} height={50}></Logo> */}
                        </View>
                        <View style={styles.connectLogo}>
                            <Image style={styles.githubLogo}
                                source={require('../../../assets/images/linkedin.jpeg')}
                            />
                        </View>
                    </View>
                    <View style={styles.bottomLandingContainer}>
                        <TouchableOpacity onPress={handlePress}>
                            <View style={{
                                backgroundColor: 'rgb(0, 148, 157)',
                                padding: 20,
                                marginHorizontal: 50,
                                alignItems: 'center',
                                borderRadius: 15,
                                zIndex: 10
                            }}
                            >
                                <Text style={{ color: 'white', fontSize: 20 }}>Lets Start the Journey</Text>
                            </View>

                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    startupPage: {
        flex: 1,
        marginTop: 100
    },
    logo: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    applicationLogoContainer: {
        flex: 1,
        alignItems: 'center'
    },
    logoText: {
        textAlign: 'center',
        fontSize: 14
    },
    logoTextPrimary: {
        textAlign: 'center',
        fontSize: 30
    },
    connectWithMeContainer: {
        marginTop: 80,
        flex: 1,
        flexDirection: 'row',
        padding: 20
    },
    connectText: {
        flex: 4,
        fontSize: 16
    },
    connectLogo: {
        flex: 1,
    },
    githubLogo: {
        width: 35,
        height: 35
    },
    bottomLandingContainer: {
        marginTop: 80
    }

})

export default Landing;
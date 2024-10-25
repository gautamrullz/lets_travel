import { Button, SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native"

const Login = (props: any): React.JSX.Element => {
    const handelPressRegister = () => {
        props.navigation.navigate('Register');
    }
    // const handelPressEvent = () => {
    //     props.navigation.navigate('Home');
    // }

    return (
        <SafeAreaView>
            <StatusBar />
            <ScrollView>
                <Text>Register</Text>
                <Button title='Register' onPress={handelPressRegister}></Button>
                <Text>Continue</Text>
                {/* <Button title='Continue' onPress={handelPressEvent}></Button> */}
            </ScrollView>
        </SafeAreaView>
    )

}

export default Login;
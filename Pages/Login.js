import * as React from "react"
import { StyleSheet, Text, View, Image, TouchableHighlight, TextInput } from 'react-native';

const Login = ({goToPage}) => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [rememberToggle, switchRememberToggle] = React.useState(true)
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableHighlight 
                    style={{flex: 1}}
                    onPress={()=>{goToPage(0)}}
                    underlayColor="#F56A4D"
                >
                    <Image 
                        source={require(`../assets/arrow_head.png`)}
                    />
                </TouchableHighlight>
                <Text 
                    style={{flex: 1.80, color: 'white', fontWeight: '800', fontSize: 25}}>
                        Sign In
                </Text>
            </View>
            <View style={styles.mainComponentsContainer}>
                <View style={styles.credentialInputContainer}>
                    <TextInput value={email} onChangeText={setEmail} style={styles.credTextBox} placeholder="E-mail" textContentType='emailAddress'/>
                    <TextInput value={password} onChangeText={setPassword} style={styles.credTextBox} placeholder="Password" textContentType="password"/>
                </View>
                <View style={styles.credentialUtilsContainer}>
                    <View
                        style={{
                            flexDirection: 'row',
                            flex: 1
                        }}
                    >
                        <TouchableHighlight
                            onPress={()=>switchRememberToggle(!rememberToggle)}    
                        >
                            <Image
                                style={{width: 20, height: 20}}
                                source={rememberToggle ? require(`../assets/checkbox_on.png`) : require(`../assets/checkbox_off.png`)}
                            />
                        </TouchableHighlight>
                        <Text style={{fontSize: 15, fontWeight: '600', marginLeft: 5}}>Remember</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={{fontSize: 15, fontWeight: '800',}}>Forgot Password?</Text>
                    </View>
                </View>
                <View style={styles.loginButtonContainer}>
                    <TouchableHighlight 
                        style={styles.button}
                        onPress={()=>goToPage(1)}
                        underlayColor="#F56A4D"
                    >
                        <Text style={styles.buttonTitle}>Login</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.registerContainer}>
                    <Text style={{fontSize: 15}}>Don't have an account?</Text>
                    <Text 
                        style={{
                            fontSize: 20, fontWeight: '600', color: '#F56A4D'
                        }}>
                            Sign Up
                    </Text>
                </View>
                <View style={styles.googleAuthContainer}>
                    <Text style={{fontSize: 15}}>Or Sign With</Text>
                    <Image source={require('../assets/google_logo.png')} style={{marginTop: 30, marginHorizontal: 5}}/>
                </View>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F56A4D',
        flex: 1,
    },
    headerContainer: {
        backgroundColor: '#F56A4D',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 42,
    },
    mainComponentsContainer: {
        backgroundColor: "#fff",
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    credentialInputContainer: {
        flex: 1.5,
        paddingTop: 72
    },
    credentialUtilsContainer: {
        flex: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 70
    },
    loginButtonContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    registerContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    googleAuthContainer: {
        flex: 2,
        justifyContent: 'center',
    },
    credTextBox: {
        borderRadius: 10,
        borderColor: '#F56A4D',
        borderWidth: 1,
        height: 60,
        width: 346,
        padding: 21,
        marginTop: 23
    },
    button: {
        backgroundColor: '#F56A4D',
        width: 188,
        height: 65,
        borderColor: '#F56A4D',
        borderRadius: 10
        },
    buttonTitle: {
        color: 'white',
        fontSize: 30,
        fontWeight: '800',
        textAlign: 'center',
        paddingTop: 15
    }
})
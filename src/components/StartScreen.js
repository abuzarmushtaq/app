import React from 'react';
import { Text, View, Image, StyleSheet, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements'

const LogoImage = require('../../assets/logo.png');
const BackgoundImage = require('../../assets/login_illustration.png');

export default class StartScreen extends React.Component {

    // static navigationOptions = {
    //     header: null
    // }
    render() {
        return (
            <View style={styles.container}>


                <View style={{ marginBottom: 100 }}>
                    <Image source={LogoImage} style={{ width: 80, height: 80 }} />
                </View>

                <View style={{ marginTop: 100 }}>
                    <Button
                        title="Register as a Service Provider"
                        onPress={() => this.props.navigation.navigate('Register')}
                        buttonStyle={{
                            backgroundColor: 'white',
                            borderWidth: 1,
                            width: '100%'
                        }}

                        titleStyle={{ color: 'black' }}
                        color='black' />
                    <Button title="Already Have an Account"
                        onPress={() => this.props.navigation.navigate('SignIn')}
                        buttonStyle={{
                            backgroundColor: 'white'
                        }}
                        color='darkolivegreen'
                        textStyle={{
                            textDecorationLine: 'underline'
                        }}
                    />
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
})
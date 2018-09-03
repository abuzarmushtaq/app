import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-elements';
import { TextField } from 'react-native-material-textfield';

export default class SignInScreen extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>

        <View style={styles.logoInContainer}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../../assets/logo.png')}
              style={{ width: 100, height: 100 }}
              resizeMode="center" />
          </View>
          <View>
            <View style={{ marginBottom: 20, height: '45%' }}>

              <View style={{ alignContent: 'center', flex: 1, alignItems: 'center' }}>

                <View style={{ width: '90%' }}>
                  <TextField
                    label="Phone number, username or email adress"
                    returnKeyType="next"
                    textColor="rgb(0, 0, 0)" baseColor="rgb(0, 0, 0)" tintColor="rgb(0, 0, 0)"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    // width="90%"
                    autoCorrect={false}
                  />

                  <TextField
                    label="Password"
                    textColor="rgb(0, 0, 0)" baseColor="rgb(0, 0, 0)" tintColor="rgb(0, 0, 0)"
                    secureTextEntry
                    returnKeyType="go"
                    ref={(input) => this.passwordInput = input}
                  />
                </View>

              </View>

            </View>


            <Button
              title="Login"
              buttonStyle={{
                backgroundColor: 'black',
                borderWidth: 1,
                borderRadius: 10,
              }}
              onPress={() => this.props.navigation.navigate('Home')}
              fontWeight='bold'
              color='white' />
          </View>
        </View>

        <View style={styles.registerContainer}>
          <Text>Don't have an account ?</Text>
          <Button
            title="Sign Up"
            buttonStyle={{
              backgroundColor: 'white',
            }}
            onPress={() => this.props.navigation.navigate('Register')}
            fontWeight='bold'
            color='black' />
        </View>

      </KeyboardAvoidingView >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between'
  },
  logoInContainer: {

  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingTop: 120,
  },
  registerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  }
})
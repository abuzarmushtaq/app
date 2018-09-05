import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
// import { withFormik } from 'formik';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import RightArrowIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextField } from 'react-native-material-textfield';

export default class RegisterScreen extends Component {

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>

                <View style={styles.childContainer}>
                    <View>
                        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Your basic information :)</Text>
                    </View>
                    <View style={{ width: '90%' }}>
                        <TextField label="First Name"
                            // onSubmitEditing={() => this.passwordInput.focus()}
                            textColor="rgb(0, 0, 0)"
                            baseColor="rgb(0, 0, 0)"
                            tintColor="rgb(0, 0, 0)"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                        <TextField label="Last Name"
                            // ref={(input) => this.passwordInput = input}
                            textColor="rgb(0, 0, 0)"
                            baseColor="rgb(0, 0, 0)"
                            tintColor="rgb(0, 0, 0)"
                            autoCapitalize="none"
                            autoCorrect={false} />
                        <TextField label="Email"
                            // ref={(input) => this.passwordInput = input}
                            textColor="rgb(0, 0, 0)"
                            baseColor="rgb(0, 0, 0)"
                            tintColor="rgb(0, 0, 0)"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false} />
                        <TextField label="Phone Number"
                            // ref={(input) => this.passwordInput = input}
                            textColor="rgb(0, 0, 0)"
                            baseColor="rgb(0, 0, 0)"
                            tintColor="rgb(0, 0, 0)"
                            keyboardType="phone-pad"
                            autoCapitalize="none"
                            autoCorrect={false} />

                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10}}>
                            <TouchableOpacity
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: 50,
                                    height: 50,
                                    backgroundColor: 'black',
                                    borderRadius: 100,
                                }}
                            >
                                <RightArrowIcon name={"chevron-right"} size={30} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    childContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    }

})
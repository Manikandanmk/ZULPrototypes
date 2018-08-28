import React, { Component } from 'react';
import { View, Image, StyleSheet, TextInput } from 'react-native';
import { Button, Text, H2 } from 'native-base';

export default class OTP extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ marginLeft: 5, marginBottom: 5 }}>Enter OTP which is sent on ur mobile:</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            underlineColorAndroid='transparent'
                            keyboardType={"numeric"}
                            style={styles.input}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            underlineColorAndroid='transparent'
                            keyboardType={"numeric"}
                            style={styles.input}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            underlineColorAndroid='transparent'
                            keyboardType={"numeric"}
                            style={styles.input}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            underlineColorAndroid='transparent'
                            keyboardType={"numeric"}
                            style={styles.input}
                        />
                    </View>
                </View>
                <Text style={{ marginLeft: 5, marginVertical: 10, padding: 5, textAlign: 'center', fontWeight: 'bold', color: '#3d5aae' }}>Dint get OTP?</Text>
                <Button block onPress={this.props.nextHandler}>
                    <Text>Submit OTP</Text>
                </Button>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    loginLogo: {
        height: 150,
        width: 150
    },
    input: {
        fontSize: 20,
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
        marginHorizontal: 5
    }

});

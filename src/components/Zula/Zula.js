import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ZulaWakeUpbtn from './ZulaWakeUpbtn';
import ZulaMessageContainer from './ZulaMessageContainer';

export default class Zula extends React.Component {
    render() {
        return (
            <View style={styles.container}>               
                <ZulaMessageContainer />
                <ZulaWakeUpbtn />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
    }
})
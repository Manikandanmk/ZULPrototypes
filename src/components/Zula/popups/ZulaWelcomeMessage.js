import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text } from 'native-base';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
    hideWishModal: () => dispatch({
        type: 'ZulaReducer_Wish',
        payload: false
    }),
    showVitalModal: () => dispatch({
        type: 'ZulaReducer_Vital',
        payload: true
    })
})

class ZulaWelcomeMessage extends React.Component {
    hideWishModal = () => {
        let $this = this;

        $this.props.hideWishModal();
        setTimeout(() => {
            $this.props.showVitalModal();
        }, 3000)
    }

    render() {
        return (
            <View style={styles.body}>
                <View style={{ alignItems: 'center' }}>
                    <Image source={require('../../../assests/images/sun.png')} style={{ width: 70, height: 70 }} />
                    <Text style={{ fontSize: 20, marginBottom: 30,color: '#3a3a3a' }}>Good Morning</Text>
                    <Text style={{ fontSize: 25, marginBottom: 20,color: '#3a3a3a' }}>How are you feeling today?</Text>
                </View>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <TouchableOpacity style={[styles.emojiContainer]} onPress={this.hideWishModal}>
                        <Image style={styles.emoji} source={require('../../../assests/images/emoji/01.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.emojiContainer]} onPress={this.hideWishModal}>
                        <Image style={styles.emoji} source={require('../../../assests/images/emoji/02.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.emojiContainer]} onPress={this.hideWishModal}>
                        <Image style={styles.emoji} source={require('../../../assests/images/emoji/03.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.emojiContainer]} onPress={this.hideWishModal}>
                        <Image style={styles.emoji} source={require('../../../assests/images/emoji/04.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.emojiContainer]} onPress={this.hideWishModal}>
                        <Image style={styles.emoji} source={require('../../../assests/images/emoji/05.png')} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ marginHorizontal: 30, padding: 5, marginTop: 30, width: 'auto', borderRadius: 10 }} onPress={this.hideWishModal}>
                    <Text style={{ textAlign: 'center',textDecorationLine:'underline' }}>I don't want to answer</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    body: {
        padding: 10,
        flex: 1
    },
    triangleShapeCSS: {
        width: 0,
        height: 0,
        borderLeftWidth: 30,
        borderRightWidth: 5,
        borderTopWidth: 10,
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: '#5067ffe3',
        marginRight: 10,
        marginTop: -5
    },
    emoji: {
        width: 40,
        height: 40
    },
    emojiContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        padding: 5,
        marginHorizontal: 1,
        // borderColor: '#ddd'
    }
})
export default connect(null, mapDispatchToProps)(ZulaWelcomeMessage);
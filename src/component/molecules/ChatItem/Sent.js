import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../utils';

const Sent = () => {
    return(
        <View style = {styles.container}>
            <View style = {styles.textBox}>
                <Text style = {styles.text}>Hello Doc, any advice for treating burn blisters?</Text>
            </View>
            <Text style = {styles.time}>1:03 PM</Text>
        </View>
    )
};

export default Sent;

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        color: colors.text.primary,
    },
    textBox: {
        padding: 12,
        marginRight: 10,
        maxWidth: '70%',
        backgroundColor: colors.chat.primary,
        borderRadius: 10,
        borderBottomRightRadius: 0,
    },
    container: {
        marginBottom: 20,
        alignItems: 'flex-end',
    },
    time: {
        color: colors.text.primary,
        fontSize: 14,
        paddingRight: 10,
    }
});
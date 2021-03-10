import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { DummyDoctor2 } from '../../../assets';
import { colors } from '../../../utils';

const Received = () => {
    return(
        <View style = {styles.container}>
            <Image source = {DummyDoctor2} style =  {styles.avatar}/>
            <View>
                <View style = {styles.textBox}>
                    <Text style = {styles.text}>Hi! Well, you have to rinse it under cold water then apply aloevera gel.</Text>
                </View>
                <Text style = {styles.time}>1:05 PM</Text>
            </View>
        </View>
    )
};

export default Received;

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        color: colors.white,
    },
    textBox: {
        padding: 12,
        marginLeft: 10,
        maxWidth: '80%',
        backgroundColor: colors.chat.secondary,
        borderRadius: 10,
        borderBottomLeftRadius: 0,
    },
    container: {
        marginBottom: 20,
        alignItems: 'flex-end',
        flexDirection: 'row'
    },
    time: {
        color: colors.text.primary,
        fontSize: 14,
        paddingLeft: 10,
    },
    avatar: {
        height: 30,
        width: 30,
        borderRadius: 30/2,
        marginLeft: 10,
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});
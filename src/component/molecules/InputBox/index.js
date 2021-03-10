import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { colors } from '../../../utils';
import { Button, Gap } from '../../atoms';

const InputBox = () => {
    return(
        <View style = {styles.container}>
            <View style = {styles.box}>
                <TextInput style = {styles.input} placeholder ="Enter your message here"/>
            </View>
            <Button type = "icon-only" icon = "next"/>
        </View>
    )
};

export default InputBox;

const styles = StyleSheet.create({
    input: {
        color: colors.text.secondary,
        fontSize: 16,
        padding: 14,
    },
    box: {
        backgroundColor: colors.border,
        maxHeight: 50,
        flex: 1,
        borderRadius: 10,
        marginRight: 20,
    },
    container: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 30,
        alignItems: 'center'
    }

});
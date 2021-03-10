import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { colors } from '../../../utils';

const Input = ({label, value, onChangeText, secureTextEntry, disable}) => {
    const [border, setBorder] = useState(colors.border);
    const onFocusForm = () => {
        setBorder(colors.blue);
    };
    const onBlurForm = () => {
        setBorder(colors.border);
    }
    return (
        <View>
            <Text style = {styles.label}>{label}</Text>
            <TextInput onFocus = {onFocusForm} onBlur = {onBlurForm} value = {value} onChangeText = {onChangeText} 
            secureTextEntry = {secureTextEntry} style = {styles.input(border)} editable = {!disable} 
            selectTextOnFocus = {!disable}></TextInput>
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    input: (border) => (
        {
            borderWidth: 1,
            borderColor: border,
            borderRadius: 10,
            padding: 12,
        }
    ),
    label: {
        fontSize: 16,
        color: colors.text.secondary,
        fontWeight: '600',
        marginBottom: 6,
    },
});
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { colors } from '../../../utils/colors';

const Link = ({title, size, align, onPress}) => {
    return (
        <TouchableOpacity onPress = {onPress}>
            <Text style = {styles.text(size, align)}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Link;

const styles = StyleSheet.create({
    text: (size, align) => ({
        fontSize: size,
        color: colors.text.secondary,
        textDecorationLine: 'underline',
        textAlign: align,
    }),
});
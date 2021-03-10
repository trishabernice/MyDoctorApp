import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../utils';
import { Gap, Button } from '../../atoms';

const Header = ({label, onPress}) => {
    return (
        <View style = {styles.container} >
            <Button type = "icon-only" icon = 'back-dark' onPress = {onPress}></Button>
            <Text style = {styles.text}>{label}</Text>
            <Gap width = {20}/>
        </View>
    );

};

export default Header;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 30,
        backgroundColor: colors.white,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        flex: 1,
        fontSize: 20,
        color: colors.text.primary,
    },
});
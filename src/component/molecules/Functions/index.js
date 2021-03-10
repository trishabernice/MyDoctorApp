import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TempIcon } from '../../../assets';
import { colors } from '../../../utils';
import { Button } from '../../atoms';
import Profile from '../Profile';

const Functions = ({label, onPress}) => {
    return(
        <TouchableOpacity style = {styles.tab} onPress = {onPress}>
            <TempIcon/>
            <View style = {styles.textBox}>
                <Text style = {styles.mainText}>{label}</Text>
                <Text style = {styles.sideText}>Last updated yesterday</Text>
            </View>
            <Button type = "icon-only" icon = "next"/>
        </TouchableOpacity>
    )
}

export default Functions;

const styles = StyleSheet.create({
    tab: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 18,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    mainText: {
        fontSize: 18,
        color: colors.text.primary,
    },
    sideText: {
        fontSize: 12,
        color: colors.text.secondary,
    },
    textBox: {
        paddingLeft: 16,
        justifyContent: 'center',
        flex: 1,
    },
});
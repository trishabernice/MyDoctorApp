import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DummyDoctor2 } from '../../../assets';
import { colors } from '../../../utils';
import { Button } from '../../atoms';

const DoctorList = ({name, practice, onPress}) => {
    return (
        <TouchableOpacity style = {styles.box} onPress = {onPress}> 
            <Image source = {DummyDoctor2} style = {styles.avatar}/>
            <View style = {styles.textBox}>
                <Text style = {styles.name}>{name}</Text>
                <Text style = {styles.sex}>{practice}</Text>
            </View>
            <Button type = "icon-only" icon = "next"/>
        </TouchableOpacity>
    );
};

export default DoctorList;

const styles = StyleSheet.create({
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 50/2,
    },
    name: {
        fontSize: 18,
        color: colors.text.primary,
    },
    sex: {
        fontSize: 14,
        color: colors.text.secondary,
    },
    box: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        padding: 15,
        alignItems: 'center',
    },
    textBox: {
        justifyContent: 'center',
        paddingHorizontal: 10,
        flex: 1,
    },

});
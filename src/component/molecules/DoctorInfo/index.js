import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../utils';

const DoctorInfo = ({title, text, type}) => {
    return(
        <View>
            <View style = {styles.textBox}>
                <Text style = {styles.title}>{title}</Text>
                <Text style = {styles.text}>{text}</Text>
            </View>
            
        </View>
    );
};

export default DoctorInfo;

const styles = StyleSheet.create({
    title: {
        fontSize: 14,
        color: colors.text.secondary,
    },
    text: {
        marginTop: 10,
        fontSize: 18,
        color: colors.text.primary,
    },
    textBox: {
        padding: 18,
        borderBottomColor: colors.border,
        borderBottomWidth: 1,
    },
});
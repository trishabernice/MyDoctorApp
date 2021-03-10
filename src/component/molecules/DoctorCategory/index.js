import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ILPlaceHolderDocCat } from '../../../assets';
import { colors } from '../../../utils';

const DoctorCategory = ({docType, onPress}) => {
    return (
        <TouchableOpacity style = {styles.container} onPress = {onPress}>
            <ILPlaceHolderDocCat height = {50} width = {50} style = {styles.card}/>
            <Text style = {styles.label}>I need a</Text>
            <Text style = {styles.category}>{docType}</Text>
        </TouchableOpacity>
    );
};

export default DoctorCategory;

const styles = StyleSheet.create({
    container: {
        padding: 12,
        backgroundColor: colors.pink,
        alignSelf: 'flex-start',
        borderRadius: 10,
        marginRight: 10,
        width: 110,
        height: 130,
    },
    card: {
        marginBottom: 28,
    },
    label: {
        fontSize: 12,
        color: colors.text.primary,
    },
    category: {
        fontSize: 12,
        color: colors.text.primary,
    },
});
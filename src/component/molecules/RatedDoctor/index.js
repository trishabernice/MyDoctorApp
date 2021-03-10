import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StarIcon } from '../../../assets';
import { colors } from '../../../utils';

const RatedDoctor = ({pic, name, docType, onPress}) => {
    return (
        <TouchableOpacity style = {styles.container} onPress = {onPress}>
            <Image source = {pic} style = {styles.avatar}/>
            <View style = {styles.textBox}> 
                <Text style = {styles.name}>{name}</Text>
                <Text style = {styles.doc}>{docType}</Text>
            </View>
            <View style = {styles.star}>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
            </View>
        </TouchableOpacity>
    );
};

export default RatedDoctor;

const styles = StyleSheet.create({
    avatar: {
        height: 70,
        width: 70,
        borderRadius: 35,
    },
    container: {
        flexDirection: 'row',
        marginVertical: 5,
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    star: {
        flexDirection: 'row',
    },
    name: {
        fontSize: 15,
    },
    doc: {
        fontSize: 14,
        color: colors.text.secondary,
    },
    textBox: {
        paddingHorizontal: 10,
        justifyContent: 'center',
        flex: 1,
    },
    
});
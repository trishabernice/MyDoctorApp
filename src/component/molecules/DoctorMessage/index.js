import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ILAvatar, ILPlaceHolderPhoto } from '../../../assets';
import { colors } from '../../../utils';

const DoctorMessage = ({name, text, image, onPress}) => {
    return (
        <TouchableOpacity style = {styles.content} onPress = {onPress}>
            <Image source = {image} style = {styles.avatar}/>
            <View style = {styles.text}>
                <Text style = {styles.name}>{name}</Text>
                <Text style = {styles.message}>{text}</Text>
            </View>
           
        </TouchableOpacity>
    );
};

export default DoctorMessage;

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    text: {
        paddingHorizontal: 10,
    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 50/2,
    },
    name: {
        fontSize: 16,
        color: colors.text.primary,
    },
    message: {
        fontSize: 14,
        color: colors.text.secondary,
    },
    
});
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { BackArrowDark, BackArrowLight, ForwardArrow, SendArrow } from '../../../assets';

const IconOnly = ({onPress, icon}) => {
    const Icon = () => {
        if (icon === 'back-dark'){
            return <BackArrowDark height = {20} width = {20}/>
        }
        if (icon === 'back-light'){
            return <BackArrowLight height = {20} width = {20}/>
        }
        if (icon === 'next'){
            return <ForwardArrow height = {20} width = {20}/>
        }
        if (icon === 'send'){
            return <SendArrow height = {20} width = {20}/>
        }
        return <BackArrowDark height = {20} width = {20}/>
    }
    return (
        <TouchableOpacity onPress = {onPress}>
            <Icon/>
        </TouchableOpacity>
    );
};

export default IconOnly;

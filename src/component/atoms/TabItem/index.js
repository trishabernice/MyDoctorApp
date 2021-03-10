import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Hospital, TempActiveIcon, TempIcon } from '../../../assets';
import { colors } from '../../../utils';
import { MailIcon, Docs } from '../../../assets';

const TabItem = ({title, active, onPress, onLongPress}) => {
    const Icon = () => {
        if(title === 'Doctor'){
            return active ? <TempActiveIcon/> : <TempIcon/>
        }
        if(title === 'Messages'){
            return active ? <MailIcon/> : <MailIcon/>
        }
        if(title === 'Hospitals'){
            return active ? <Hospital/> : <Hospital/>
        }
        return <TempIcon/>
    }
    return (
        <TouchableOpacity style = {styles.container} onPress = {onPress} onLongPress = {onLongPress}>
            <Icon/>
            <Text style = {styles.text(active)}>{title}</Text>
        </TouchableOpacity>
    );
};

export default TabItem;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text: (active) => ({
        fontSize: 12,
        marginTop: 4,
        color: active ? colors.white : colors.white,
    }),
});
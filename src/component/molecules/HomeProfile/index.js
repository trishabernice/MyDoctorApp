import React, { useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ILPlaceHolderPhoto } from '../../../assets';
import { colors, getData } from '../../../utils';

const HomeProfile = ({onPress}) => {
    const [profile, setProfile] = useState({
        fullName: '',
        occupation: '',
    });

    useEffect(() => {
        getData('user').then(res => {
            setProfile(res);
        })
    });

    return (
        <TouchableOpacity style = {styles.container} onPress = {onPress}>
            <Image source = {ILPlaceHolderPhoto} style = {styles.avatar}/>
            <View>
                <Text style = {styles.text(20, 'primary')}>{profile.fullName}</Text>
                <Text style = {styles.text(14, 'secondary')}>{profile.occupation}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default HomeProfile;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        alignItems: 'center',
    },
    text: (size, colorType) => ({
        fontSize: size,
        color: colorType === 'primary' ? colors.text.primary: colors.text.secondary,
        paddingHorizontal: 10,
        textTransform: 'capitalize',
    }),
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 60/2,
    },
});
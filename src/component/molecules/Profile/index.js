import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { DummyDoctor1 } from '../../../assets';
import { colors } from '../../../utils';

const Profile = ({name, occupation, image}) => {
    return(
        <View style = {styles.page}>
            <View style = {styles.container}>
                <View style = {styles.avatarWrapper}>
                    <Image source = {image} style = {styles.avatar}/>
                </View>
                { name && (
                    <View>
                        <Text style = {styles.name}>{name}</Text>
                        <Text style = {styles.occupation}>{occupation}</Text>
                    </View>
                )}
            </View>
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    avatar: {
        height: 150,
        width: 150,
        borderRadius: 150/2
    },
    avatarWrapper: {
        height: 170,
        width: 170,
        borderRadius: 170/2,
        borderColor: colors.border,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        marginTop: 10,
        fontSize: 24,
        color: colors.text.primary,
        textAlign: 'center',
    },
    occupation: {
        fontSize: 14,
        color: colors.text.secondary,
        marginBottom: 16,
        textAlign: 'center',
    },
    container: {
        alignItems: 'center',
        paddingTop: 20,
    },
    page: {
        backgroundColor: colors.white,
    }

});
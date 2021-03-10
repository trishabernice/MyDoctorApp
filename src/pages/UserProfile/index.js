import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react/cjs/react.development';
import { DummyDoctor1 } from '../../assets';
import { Functions, Header, Profile } from '../../component';
import { colors, getData } from '../../utils';
import { Firebase } from '../../config';


const UserProfile = ({navigation}) => {
    const [profile, setProfile] = useState({
        fullName: '',
        occupation: '',
    })
    useEffect(() => {
        getData('user').then(res => {
            const data = res;
            setProfile(data);
        })
    }, []);
    
    const signOut = () => {
        Firebase.auth().signOut().then(() => {
            navigation.navigate('GetStarted');
        })
        .catch(error => {
            showError(error.message);
        })
    }
    return(
        <View style = {styles.page}>
            <Header label = "Profile" onPress = {() => navigation.goBack()}/>
            {profile.fullName.length > 0 && 
                <Profile name = {profile.fullName} occupation = {profile.occupation} image = {DummyDoctor1}/>
            }
            <Functions label = "Edit Profile" onPress = {() => navigation.navigate('UpdateProfile')}/>
            <Functions label = "Language"/>
            <Functions label = "Help Center"/>
            <Functions label = "Sign Out" onPress ={signOut}/>
        </View>
    );
};

export default UserProfile;

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1,
    }
});
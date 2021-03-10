import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';
import { Header, Input, Profile, Gap, Button } from '../../component';
import { colors, getData, showError } from '../../utils';
import { DummyDoctor1 } from '../../assets';
import { Firebase } from '../../config';


const UpdateProfile = ({navigation}) => {
    const [profile, setProfile] = useState({
        fullName: '',
        occupation: '',
        email: '',
    });
    const [password, setPassword] = useState('');
    useEffect(() => {
        getData('user').then(res => {
            const data = res;
            setProfile(data);
        })
    }, []);
    const updateInfo = () => {

        if(password.length > 0){
            if(password.length < 8){
                showError('Passwords must have at least 8 characters');
            }
            else{
                updatePassword();
                updateProfileData();
                navigation.replace('MainApp');
            }
        }
        else{ 
            updateProfileData();
            navigation.replace('MainApp');
        }
    }
    const updateProfileData = () => {
        Firebase.database()
        .ref(`users/${profile.uid}/`)
        .update(profile)
        .then(res => {
            console.log('success:', res);
        })
        .catch(err => {
            showError(err.message);
        });
    };
    const updatePassword = () => {
        Firebase.auth().onAuthStateChanged(user => {
            if(user){
                user.updatePassword(password).catch(err => {
                    showError(err.message);
                })
            }
        })
    };

    const changeText = (key, value) => {
        setProfile({
            ...profile,
            [key]: value,
        })
    }
    return(
        <View style = {styles.page}>
            <Header label = "Edit Profile" onPress = {() => navigation.goBack()}/>
            <ScrollView showsVerticalScrollIndicator = {false}>
                <Profile image = { DummyDoctor1 }/>
                    <View style = {styles.content}>
                        <Input label = "Full Name" value = {profile.fullName} onChangeText = {value => changeText('fullName', value)}/>
                        <Gap height = {10}/>
                        <Input label = "Occupation" value = {profile.occupation} onChangeText = {value => changeText('occupation', value)}/>
                        <Gap height = {10}/>
                        <Input label = "Email" value = {profile.email} disable/>
                        <Gap height = {10}/>
                        <Input label = "Password" value = {password} onChangeText = {value => setPassword(value)} secureTextEntry/>
                        <Gap height = {30}/>
                        <Button title = "Save Profile" onPress = {updateInfo}/>
                    </View>           
            </ScrollView>
        </View>
    );
};

export default UpdateProfile;

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1,
    },
    content: {
        padding: 40,
        paddingTop: 0,
    }
});
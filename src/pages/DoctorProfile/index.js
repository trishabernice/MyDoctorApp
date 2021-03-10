import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DummyDoctor1 } from '../../assets';
import { Header, Profile, DoctorInfo, Button } from '../../component';
import { colors } from '../../utils';

const DoctorProfile = ({navigation, route}) => {
    const itemCategory = route.params;
    return(
        <View style = {styles.page}>
            <Header label = "Profile" onPress = {() => navigation.goBack()}/>
            <Profile image = {DummyDoctor1} name = {itemCategory.name} occupation = {itemCategory.category}/>
            <DoctorInfo title = "Alumnus" text = {itemCategory.alumnus}/>
            <DoctorInfo title = "Practice" text = {itemCategory.practice}/>
            <DoctorInfo title = "No. STR" text = {itemCategory.str} />
            <View style = {styles.buttonContainer}>
                <Button title = "Start Conversation" onPress = {() => navigation.navigate('Chatting')}/>
            </View>
        </View>
    );
};

export default DoctorProfile;

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1,
    },
    buttonContainer: {
        padding: 30,
        
    }
    
});
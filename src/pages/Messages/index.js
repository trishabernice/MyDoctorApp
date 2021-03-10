import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { DummyDoctor1, DummyDoctor3  } from '../../assets';
import { DoctorMessage } from '../../component';
import { colors } from '../../utils';

const Messages = ({navigation}) => {
    return (
        <View style = {styles.page}>
            <Text style = {styles.title}>Messages</Text>
            <DoctorMessage image={DummyDoctor1} name = "Dr. Phill Pepper" text ="Please let me know if you have more questions!" onPress = {() => navigation.navigate('Chatting')}/>
            <DoctorMessage image={DummyDoctor3} name = "Dr. Monica Geller" text ="Remember to put bandaid on your wounds ..."onPress = {() => navigation.navigate('Chatting')}/>
        </View>
    );
};

export default Messages;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        padding: 16,
    },
    page: {
        padding: 10,
        flex: 1,
    }
});
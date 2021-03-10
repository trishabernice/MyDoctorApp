import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { DummyDoctor2 } from '../../assets';
import { colors } from '../../utils';
import { Button, ChatItem, InputBox } from '../../component';

const Chatting = ({navigation}) => {
    return (
        <View style = {styles.page}>
            <View style = {styles.header}>
                <Button type = "icon-only" icon = "back-light" onPress = {() => navigation.goBack()}></Button>
                <View>
                    <Text style = {styles.headerText}>Alexander Jannie</Text>
                    <Text style = {styles.docTypeText}>Oncologist</Text>
                </View>
                <Image source = {DummyDoctor2} style = {styles.avatar}/>
            </View>  
            <View style = {styles.content}>
                <Text style = {styles.date}>Monday, 22 January 2020</Text>
                <ChatItem type = "Sent"/>
                <ChatItem />
            </View>
            <InputBox/>
        </View>
    );
};

export default Chatting;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: colors.darkBlue,
        padding: 30,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    headerText: {
        color: colors.white,
        fontSize: 20,
        textAlign: 'center',
        flex: 1,
    },
    docTypeText: {
        fontSize: 15,
        color: colors.text.secondary,   
    },
    date: {
        fontSize: 16,
        color: colors.text.secondary,
        textAlign: 'center',
        padding: 10,
    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 50/2,
    },
    page: {
        backgroundColor: colors.white,
        flex: 1,
    },
    content: {
        flex: 1,
    }
});
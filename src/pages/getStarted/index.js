import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ILGetStarted, ILLogo } from '../../assets';
import { Button } from '../../component';
import { colors } from '../../utils';

const GetStarted = ({navigation}) => {
    return(
    <ImageBackground source = { ILGetStarted } style = {styles.page}> 
        <View>
            <ILLogo width = {80} height={80}/>
            <Text style = {styles.title}>Welcome to the My Doctor Application</Text>
        </View>
        <View>
            <Button title = "Get Started" onPress = {() => navigation.navigate('Register')}></Button>
            <View style = {{ height: 20 }}/>
            <Button type = 'secondary' title = "Sign In" onPress = {() => navigation.navigate('Login')}></Button>
        </View>
    </ImageBackground>
    )
};

export default GetStarted;

const styles = StyleSheet.create({
    page: {
        padding: 40,
        justifyContent: 'space-between',
        flex: 1,
        backgroundColor: colors.white,
    },
    title: {
        fontSize: 28,
        fontWeight: "600",
        color: colors.white,
        marginTop: 90,
    }
});

import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { ILLogo } from '../../assets';
import { Button, Link, Input, Gap, Loading } from '../../component';
import { Firebase } from '../../config';
import { colors, showError, storeData, useForm } from '../../utils';
import { useDispatch } from 'react-redux';

const Login = ({navigation}) => {
    const [form, setForm] = useForm({email: '', password: ''});
    const dispatch = useDispatch();

    const login = () => {
        dispatch({type: 'SET_LOADING', value: true});
        Firebase.auth()
        .signInWithEmailAndPassword(form.email, form.password)
        .then(res => {
            dispatch({type: 'SET_LOADING', value: false});
            Firebase.database()
            .ref(`users/${res.user.uid}/`)
            .once('value')
            .then(resDB => {
                if(resDB.val()){
                    storeData('user', resDB.val());
                    navigation.replace('MainApp')
                }
            })
        })
        .catch(error => {
            dispatch({type: 'SET_LOADING', value: false});
            showError(error.message);
        })
    }

    return (
        <View style = {styles.page}>
            <ScrollView showsVerticalScrollIndicator = {false}>
                <Gap height = {40}/>
                <ILLogo height = {80} width = {80}/>
                <Text style = {styles.title}>Enter and start consultation</Text>
                <Input label = "Email Address" value = {form.email} onChangeText = {value => setForm('email', value)}/>
                <Gap height = {24}/>
                <Input label = "Password" value = {form.password} onChangeText = {value => setForm('password', value)} secureTextEntry/>
                <Gap height = {10}/>
                <Link title ="Forgot My Password" size = {12}/>
                <Gap height = {40}/>
                <Button title = "Sign In" onPress = {login}></Button>
                <Gap height = {30}/>
                <Link title = "Create New Account" size = {16} align = "center" 
                onPress = {() => navigation.navigate('Register')}/>
            </ScrollView>
          
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    page: {
        padding: 40,
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: colors.white,
    },
    title: {
        fontSize: 24,
        fontWeight: "600",
        color: colors.text.primary,
        marginVertical: 40,
        maxWidth: 180, // create a max width so it will create a new line at "consultation".
    }
});
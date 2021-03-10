import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Input, Button, Gap, Header, Loading} from '../../component';
import { colors, showError, storeData, useForm } from '../../utils';
import { Firebase} from '../../config';

const Register = ({navigation}) => {

    const [form, setForm] = useForm({
        fullName: '',
        occupation: '',
        email: '',
        password: '',
    });

    const [loading, setLoading] = useState(false);
  
    const onContinue = () => {
        setLoading(true);
        Firebase.auth().createUserWithEmailAndPassword(form.email, form.password)
            .then(success => {
                setLoading(false);
                setForm('reset');

                const data = {
                    fullName: form.fullName,
                    occupation: form.occupation,
                    email: form.email,
                }

                Firebase.database()
                .ref('users/' + success.user.uid+ '/')
                .set(data);

                storeData('user', data);
                navigation.navigate('UploadPhoto', data);
            // Signed in 
            //var user = userCredential.user;
            // ...
        })
        .catch((error) => {
            setLoading(false);
            var errorCode = error.code;
            var errorMessage = error.message;
            showError(error.message);
            // ..
        });

    };

    return (
        <>
        <View style = {styles.page}>
            <Header label = "Register Account" onPress = {() => navigation.goBack() }/>
             <View style = {styles.content}>   
                <ScrollView showsVerticalScrollIndicator ={false}>  
                    <Input label = "Full Name" value = {form.fullName} onChangeText = {value => setForm('fullName', value)}/>
                    <Gap height = {20}/>
                    <Input label = "Occupation" value = {form.occupation} onChangeText = {value => setForm('occupation', value)}/>
                    <Gap height = {20}/>
                    <Input label = "Email Address" value = {form.email} onChangeText = {value => setForm('email', value)}/>
                    <Gap height = {20}/>
                    <Input label = "Password" value = {form.password} onChangeText = {value => setForm('password', value)} secureTextEntry/>
                    <Gap height = {40}/>
                    <Button title = "Continue" onPress = {onContinue}></Button>
                </ScrollView>   
            </View>
        </View>
        { loading && <Loading/>}
        </>
    );
};

export default Register;

const styles = StyleSheet.create({
    content: {
        padding: 40,
        paddingTop: 0,
        },
    page: {
        backgroundColor: colors.white,
        flex: 1,
    }
});
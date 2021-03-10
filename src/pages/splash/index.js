import React, { useEffect }from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ILLogo } from '../../assets';
import { colors } from '../../utils';
import Firebase from '../../config';


const Splash = ({navigation}) => {
    useEffect(() => {
        const unsubscribe = Firebase.auth().onAuthStateChanged((user)=> {
            setTimeout(() => {
                if(user){
                    //user is logging in
                    navigation.replace('MainApp');
                }
                else{
                    //user log out
                    navigation.replace('GetStarted');
                }
            }, 3000) 
        });
        return () => unsubscribe();
    }, []) //empty array is so the function wont be repeatedly called when being rendered.
    return(
    <View style = {styles.page}>
      <ILLogo width = {80} height={80}/>
      <Text style = {styles.title}>My Doctor</Text>
    </View>
    )
};

export default Splash;

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white, 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    title: {
        fontSize: 20, 
          fontWeight: '600', 
          marginTop: 20
    }
});
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../../component';
import DoctorList from '../../component/molecules/DoctorList';
import { Firebase } from '../../config';
import { colors } from '../../utils';

const ChooseDoctor = ({navigation, route}) => {
    const [listDoctor, setListDoctor] = useState([]);
    const itemCategory = route.params;
    useEffect(() => {
        callDoctorByCategory(itemCategory.category)
    }, []);

    const callDoctorByCategory = (type) => {
        Firebase.database().ref('doctors/').orderByChild('category').equalTo(type)
        .once('value')
        .then(res => {
            if(res.val()){
                setListDoctor(res.val());
            }
        })
    }
    return (
        <View style = {styles.page}>        
            <View style = {styles.header}>
                <Button type = "icon-only" icon = "back-light" onPress = {() => navigation.goBack()}></Button>
                <Text style = {styles.headerText}>{`Choose ${itemCategory.category}`}</Text>
            </View>    
            {
                listDoctor.map(item => {
                    return <DoctorList  key = {item.id} name = {item.name} practice = {item.practice} onPress = {() => navigation.navigate('DoctorProfile', item)}/>
                })
            }
        </View>
    )
};

export default ChooseDoctor; 

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: colors.darkBlue,
        padding: 30,
        paddingBottom: 40,
        alignItems: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    headerText: {
        color: colors.white,
        fontSize: 20,
        textAlign: 'center',
        flex: 1,
    },
    page: {
        backgroundColor: colors.white,
        flex: 1,
    }

});


import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ILPlaceHolderPhoto } from '../../../assets';
import { colors } from '../../../utils';

const ListHospitals = ({image, name, specialization, address}) => {
    return (
        <View style = {styles.content}>
            <Image source = {image} style = {styles.img}/>
            <View>
                <Text style = {styles.name}>{name}</Text>
                <Text style = {styles.subname}>{specialization}</Text>
                <Text style = {styles.address}>{address}</Text>
            </View>
           
        </View>
    );
};

export default ListHospitals;

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    name: {
        fontSize: 18,
        color: colors.text.primary,
    },
    subname: {
        fontSize: 16,
        color: colors.text.primary,
    },
    address: {
        fontSize: 14, 
        color: colors.text.secondary,
        marginTop: 6,
    },
    img: {
        height: 80,
        width: 100,
        borderRadius: 10,
        marginRight: 16,
    }
});
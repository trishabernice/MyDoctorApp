import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { ILTempBackground } from '../../assets';
import { ListHospitals } from '../../component';
import { colors } from '../../utils';

import { ILHosp1, ILHosp2, ILHosp3, ILHosp4 } from '../../assets';

const Hospitals = () => {
    return (
        <View style = {styles.page}>
            <ImageBackground source = {ILTempBackground} style = {styles.image}>
                <Text style = {styles.title}>Nearby Hospitals</Text>
                <Text style = {styles.text}>3 ready</Text>
            </ImageBackground>
            <View style = {styles.content}>
                <ListHospitals image={ILHosp1} name="Grey Sloan Memorial Hospital" specialization="General Hospital" address="265 W Gorham Ave, Marina, CA 95014"/>
                <ListHospitals image={ILHosp2} name="Evergreen Cherry Hospital" specialization="General Hospital" address="81 N Stelling Rd, Cupertino, CA 90085"/>
                <ListHospitals image={ILHosp3} name="James Childrens Hospital" specialization="Pediatric Hospital" address="1010 Brittingham Blvd, Orange, CA 90212"/>
                <ListHospitals image={ILHosp4} name="Institute of Cancer Hospital" specialization="Oncology Hospital" address="12 St Louis Rd, San Francisco, CA 95558"/>
            </View>
        </View>
    );
};

export default Hospitals;

const styles = StyleSheet.create({
    image: {
        height: 240,
        paddingTop: 30,
    },
    title: {
        fontSize: 30,
        color: colors.white,
        textAlign: 'center',
    },
    text: {
        fontSize: 16,
        color: colors.white,
        marginTop: 6,
        textAlign: 'center'
    },
    page: {
        backgroundColor: colors.primary,
        flex: 1,
    },
    content: {
        flex: 1,
        backgroundColor: colors.white,
        borderRadius: 30,
        marginTop: -30,
        paddingTop: 14,
    }
});
import React, { useState, useEffect }from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { DummyDoctor1, DummyDoctor2, DummyDoctor3} from '../../assets';
import { DoctorCategory, Gap, HomeProfile, RatedDoctor, NewsItem } from '../../component';
import { Firebase } from '../../config';
import { colors, showError } from '../../utils';

const Doctor = ({navigation}) => {
    const [news, setNews] = useState([]);
    const [doctorCategory, setDoctorCategory] = useState([]);
    const [doctors, setDoctors] = useState([]);


    useEffect(() => {
        Firebase.database().ref('news/').once('value')
        .then(res => { 
            if(res.val()){
                setNews(res.val());
            }
        })
        .catch(error => {showError(error.message);
        });

        Firebase.database().ref('doctor_category/').once('value')
        .then(res => { 
            if(res.val()){
                setDoctorCategory(res.val());
            }
        })
        .catch(error => {showError(error.message);
        })
        
        Firebase.database().ref('doctors/').once('value')
        .then(res => { 
            if(res.val()){
                setDoctors(res.val());
            }
        })
        .catch(error => {showError(error.message);
        })
    }, []);
    
    return (
        <View style = {styles.page}>
            <ScrollView showsVerticalScrollIndicator = {false}>
                <Gap height = {30}/>
                <HomeProfile onPress = {() => navigation.navigate('UserProfile')}/>
                <Gap height = {30}/>
                <Text style = {styles.welcome}>Who would you like to consult with today?</Text>
                <View style = {styles.wrapper}>
                    <ScrollView horizontal showsHorizontalScrollIndicator= {false}>
                        <View style = {styles.card}>
                            <Gap width = {16}/>
                            {
                                doctorCategory.map(item => {
                                    return <DoctorCategory key = {item.id}  docType = {item.category} onPress = {() => navigation.navigate('ChooseDoctor', item)}/>
                                })
                            }
                        </View>
                    </ScrollView>
                </View>
                <Text style = {styles.sectionLabel}>Top Rated Doctor</Text>
                {/* {
                    doctors.map(item => {
                        return <RatedDoctor key = {item.id} pic = {DummyDoctor1} name = {item.name} docType = {item.category} onPress = {() => navigation.navigate('DoctorProfile', item)}/>
                    })
                } */}
                <RatedDoctor pic = {DummyDoctor1} name = "Dr. Phill Pepper" docType = "Pediatrician"/>
                <RatedDoctor pic = {DummyDoctor2} name = "Dr. James Halpert" docType = "General"/>
                <RatedDoctor pic = {DummyDoctor3} name = "Dr. Monica Geller" docType = "Psychiatrist"/>

                <Text style = {styles.sectionLabel}>News</Text>
                {
                    news.map(item => {
                        return(
                            <NewsItem key = {item.id} title = {item.title} date = {item.date} image ={item.image}/>
                        )
                    })
                }
            </ScrollView>
        </View>
    );
};

export default Doctor;

const styles = StyleSheet.create({
    page: {
        paddingHorizontal: 16,
        backgroundColor: colors.white,
        flex: 1,
    },
    welcome: {
        fontSize: 24,
        maxWidth: 300,
        marginTop: 10,
        marginBottom: 16,        
    },
    card: {
        flexDirection: 'row',
    },
    wrapper: {
        marginHorizontal: -16,
    },
    sectionLabel: {
        fontSize: 20,
        marginTop: 30,
        marginBottom: 16,
    },
});
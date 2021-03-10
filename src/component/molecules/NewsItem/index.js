import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { colors } from '../../../utils';

const NewsItem = ({title, date, image}) => {
    return (
        <View style = {styles.container}>
            <View style = {styles.textBox}>
                <Text style = {styles.mainText}>{title}</Text>
                <Text style = {styles.date}>{date}</Text>
            </View>
            <Image source = {{uri: image}} style = {styles.news}/>
        </View>
    );
};

export default NewsItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: colors.blue,
        marginBottom: 10,
        borderRadius: 10,
    },
    mainText: {
        fontSize: 15,
        color: colors.text.primary,
        maxWidth: 220,
    },
    date: {
        fontSize: 12,
        color: colors.text.secondary
    },
    news: {
        height: 65,
        width: 100,
        borderRadius: 10,
    },
    textBox: {
        justifyContent: 'space-between',
        padding: 5,
    }
});
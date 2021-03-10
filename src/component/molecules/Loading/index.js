import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../utils';

const Loading = () => {
    return(
        <View style = {styles.wrapper}>
            <ActivityIndicator size = "large" color = {colors.primary}/>
            <Text style = {styles.text}>Loading...</Text>
        </View>
    )
};

export default Loading;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.loadingBackground,
        height: '100%',
        width: '100%'
    },
    text: {
        fontSize: 18,
        color: colors.primary,
        marginTop: 10,
    }
});
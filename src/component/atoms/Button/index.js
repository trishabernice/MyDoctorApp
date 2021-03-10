import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../../utils';
import IconOnly from './IconOnly';

const Button = ({type, title, onPress, icon, disable}) => {
    if(type === 'icon-only'){
        return <IconOnly icon = {icon} onPress={onPress}/>
    }
    if(disable === true){
        return (
            <View style = {styles.disableBg}>
                <Text style = {styles.disableText} >{title}</Text>
            </View>
        );
    };
    return(
    <TouchableOpacity style = {styles.container(type)} onPress = {onPress}>
      <Text style = {styles.text(type)} >{title}</Text>
    </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    container: (type) => ({
        paddingVertical: 10,
        backgroundColor: type === 'secondary' ? colors.darkBlue : colors.darkBlue,
        borderRadius: 10,
    }),
    disableBg: {
        paddingVertical: 10,
        backgroundColor: colors.disable.main,
        borderRadius: 10,
    },
    disableText: {
        fontSize: 20,
        textAlign: 'center',
        color: colors.disable.text,
    },
    text: (type) => ({
        fontSize: 20,
        fontWeight: "600",
        color: type === 'secondary'? colors.button.secondary.text : colors.button.primary.text,
        textAlign: 'center'
    })
    
});
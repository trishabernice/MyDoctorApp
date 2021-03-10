import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { launchImageLibrary} from 'react-native-image-picker';
import { useState } from 'react/cjs/react.development';
import { ILDefaultUser, TempIcon, TempIconOff } from '../../assets';
import { Header, Button, Link, Gap } from '../../component';
import { colors } from '../../utils';


const UploadPhoto = ({navigation, route}) => {
    const {fullName, occupation} = route.params;
    const [hasPhoto, setHasPhoto] = useState(false);
    const getImage = () => {
        launchImageLibrary({}, response => {
            console.log('response:' , response);
        });
    }
    return (  
        <View style = {styles.page}>
            <Header label = "Upload Photo" onPress = {() => navigation.goBack()}/>
            <View style = {styles.content}> 
                <View style = {styles.profile}>
                    <TouchableOpacity style = {styles.avatarWrapper} onPress = {getImage}>
                        <Image source = {ILDefaultUser} style = {styles.avatar}></Image>
                        {hasPhoto && <TempIconOff style = {styles.addPhoto}/>} 
                        {!hasPhoto && <TempIcon style = {styles.addPhoto}/>}
                    </TouchableOpacity>
                    <Text style = {styles.name}>{fullName}</Text>
                    <Text style = {styles.occupation}>{occupation}</Text>
                </View>
                <View>
                    <Button disable = {true} title = "Upload & Continue"></Button>
                    <Gap height = {30}/>
                    <Link title = "Skip this step" size = {16} align = "center" onPress = {() => navigation.navigate('MainApp')}/>
                </View>
            </View>
           
        </View>
        
    );
};

export default UploadPhoto;

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 40,
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: 64,
    },
    page: {
        flex: 1,
        backgroundColor: colors.white,
    },
    avatar: {
        height: 110,
        width: 110,
    },
    profile: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    avatarWrapper: {
        borderColor: colors.border,
        width: 130,
        height: 130,
        borderWidth: 1,
        borderRadius: 130/2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addPhoto: {
        position: 'absolute',
        bottom: 8,
        right: 6,
    },
    name: {
        fontSize: 24,
        color: colors.text.primary,
    },
    occupation: {
        fontSize: 18,
        color: colors.text.secondary,
    }
});
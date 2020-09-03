import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, Image, StatusBar } from 'react-native';
import fire from './config/fire';
 // importando a design 
 import styles from './styles';

function Loading({navigation}){
      
    useEffect(()=>{
        setTimeout(()=>{
            fire.auth().onAuthStateChanged(user =>{
            navigation.navigate(user ? 'Home' : 'Login');
            });
        },2500)
    })

    const newLocal = './android/app/src/main/res/mipmap-xxxhdpi/logo.png';
    return (
    <View style={styles.container}>
        <StatusBar backgroundColor="#333" barStyle="light-content" />
        <Image
        style={styles.Logo}
        source={require(newLocal)}
         />
    </View>
    );
}export default Loading;
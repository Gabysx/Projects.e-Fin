import React,{useEffect, useState} from 'react';
import { Text, TextInput, View, ToastAndroid, KeyboardAvoidingView, StatusBar, TouchableOpacity, } from 'react-native';
import  fire from '../../config/fire';
import auth from '@react-native-firebase/auth';

// importando os icons 
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// importando a design 
import styles from './styles';

//importando o botão 
import Btn from '../../shared/btn';

const Forgotpass = ({navigation})  =>{
    
  // conexão com firebase (autenticação)
 const [email,setEmail] = useState('');
 const [err, setErr] = useState('');
 const [initializing, setInitializing] = useState(true);
 const [user, setUser] = useState();

 // Handle user state changes
 function onAuthStateChanged(user) {
   setUser(user);
   if (initializing) setInitializing(false);
 }

 useEffect(() => {
   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
   return subscriber; // unsubscribe on unmount
 }, []);

 // autenticação do email e senha
 const handleForgot = ()=> {

 fire.auth().sendPasswordResetEmail(email)
 .then(() => {
   setEmail('');
   if (err){
   setErr('');
      ToastAndroid.showWithGravity(
     'Verifique o email cadastrado',
     ToastAndroid.SHORT,
     ToastAndroid.CENTER,
     ToastAndroid.TOP, )
     navigation.navigate('Login')
   } 
 }).catch((error)=> {
   setErr(error.message)
   });

   
 };
 const handleLogin = () => {
    navigation.navigate('Login')
  };

 return (

   <KeyboardAvoidingView style={styles.container}>
    <StatusBar backgroundColor="#6959CD" barStyle="light-content"  /> 
     <View
       style={styles.topocontainer} >
   
     </View>
       
      <View style={styles.meio}>
        
         <Text style={styles.Text}> Controle financeiro, </Text>
         <Text style={styles.Text3}> sua escolha inteligente </Text>
         <View style={styles.formulario}>
             
             <View>
                <Text style={[styles.Text,styles.login]}>
                 <FontAwesome5 name={'user'}  size={20} > 
                 </FontAwesome5>  Recuperar a Senha </Text> 
             </View>

           <View style={styles.meioform} >
            
             <View style={styles.forminput} >
          
                <Text>  <FontAwesome5  name={'envelope'} size={20} > </FontAwesome5> </Text>
                 <TextInput 
                   value={email}
                   style={styles.input}
                   placeholder ="Digite seu Email"
                   placeholderTextColor = "#A9A9A9"
                   autoCorrent = {false}
                   onChangeText = {(txt)=> setEmail(txt)}
                   autoCompleteType ={'email'}
                   keyboarShouldPersistTaps='never'
                   autoCapitalize = {'none'}
                 />
             </View>
                <Btn label = 'Redefinir a senha' onPress={ handleForgot} />

                <TouchableOpacity style={[styles.btnRegistro,{paddingTop:'10%',}]} onPress={handleLogin} >
                    <Text style={styles.registroTextES}> <Text>  <FontAwesome5  name={'arrow-left'} size={15} > </FontAwesome5> </Text> Voltar  </Text>
                </TouchableOpacity>
         </View>
         </View>
         
       </View>
  
   </KeyboardAvoidingView>   
 );
};

export default Forgotpass;

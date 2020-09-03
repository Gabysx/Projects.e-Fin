import React,{useState, useEffect} from 'react';
import { View, KeyboardAvoidingView , StatusBar,Text ,TextInput, TouchableOpacity, Alert,  Picker , ToastAndroid} from 'react-native';
import NumericInput from '@wwdrew/react-native-numeric-textinput'
import DatePicker from 'react-native-datepicker';


// importando a design 
import styles from './stylesEstoque';


// importando os icons 
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
 
//conexão com firebase
import fire from '../config/fire';



const Profile = ({navigation})  =>{

 
    useEffect(()=>{
        var user = fire.auth().currentUser;
        if (user != null) {
            user.providerData.forEach(function (profile) {
             var name, email, uid;

               uid = profile.uid;
               name = profile.displayName;
              email = profile.email;
              
              setEmail(email);
              setUid(uid);
         });
        }
      },[]);

      useEffect(()=>{
        fire.database().ref('users/'+email).once('value', (snapshot) => {
         console.log(snapshot.val());
        });
  
      },[]);

    // variaveis que guardam os valores que os usuarios fornecem 

    
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [cnpj,setCnpj] = useState();
    const [uid,setUid] = useState();
    const [CapitalI, setCapital] = useState();
    const [produto, setProduto] = useState();
   
//Adicionar produtos no estoque 
    const SaveProfile = () => {
        try{
        
            const users = fire.database().ref('Profile/users/'+uid);
            const usersave ={
                name,
                email, 
                cnpj,
                produto,
                complete:false,
            };
            users.push(usersave)
            toast();
        }
        catch (error){
            
            alert('Preencha todos os campos' )
        }
        finally{
            setName();
            setEmail();
            setCnpj();
            setProduto();
        }
    };
    // codigo para limpar os campos 
    const limpar = () => {
     
        setName();
        setEmail();
        setCnpj();
        setProduto();
       
    }; 

    const toast = () =>{
        ToastAndroid.showWithGravity(
            'Perfil alterado',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
            ToastAndroid.TOP,
        )
    };

    // ir para tela de home 
    const goHome = () => { navigation.navigate('Home')};
   
    return(
        <KeyboardAvoidingView style={styles.container}>
         <StatusBar backgroundColor="#6959CD" barStyle="light-content" />
       
         <View
         style={styles.topocontainer} >
         </View>
            
            <View style={styles.meio}> 
            <View style={styles.ViewTopo}> 
                
                 <View>
                     <TouchableOpacity style={styles.IconTopText} onPress={() => navigation.openDrawer()}>
                      <Text >
                      <FontAwesome5 
                        name={'bars'} 
                        size={25}
                        color = '#6959CD'
                         >
                        </FontAwesome5>
                        </Text>
                </TouchableOpacity>
                </View>

                <View>
                    <Text 
                    style={styles.TextTopo}>
                         Perfil 
                     </Text>

                </View>
            </View>
        
              <View style={styles.formulario}>

                <View style={styles.meioform}>
              
                  <View style={styles.forminput} >
                          <Text style={styles.Text} > Nome: {name} </Text> 
                        <Text style={styles.TextIconNP}>
                            <FontAwesome5 
                                name={'pen'} 
                                size={20}
                                color = '#00CED1' >  
                            </FontAwesome5>
                        </Text>    
                    </View>

                    
                    <View style={styles.forminput}>  
                        <Text style={styles.Text} > Email:{email} </Text> 
                            <Text style={styles.TextDes}>
                            <FontAwesome5 
                                name={'ellipsis-h'} 
                                size={23}
                                color = '#EE30A7' >
                            </FontAwesome5>
                            </Text> 
                     </View> 

                        <View style={styles.forminput}>  
                            <Text style={styles.Text} > Fornece/Presta </Text>  

                            <Picker
                            selectedValue={produto}
                            style={styles.inputV}
                            style = {{height:50, width:120}}
                            onValueChange={(itemValue, itemIndex) => setProduto(itemValue)}>
                          
                           <Picker.Item label='Escolha' value= 'escolha' />
                           <Picker.Item label='Produto' value= 'Produto' />
                           <Picker.Item label='Serviço' value= 'Serviço' />
                      </Picker>    
                     </View>
                       
                  <View style={styles.btns}>
                  <TouchableOpacity style={styles.btnSubmit} onPress={limpar} >
                      <Text style={styles.submitText}>
                          <FontAwesome5 
                            name={'times-circle'} 
                            size={30}
                            color = '#CD0000' >
                    </FontAwesome5>
                    </Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.btnSubmit} onPress={goHome}>
                      <Text style={styles.submitText}> 
                      <FontAwesome5 
                        name={'home'} 
                        size={30}
                        color = '#363636' >
                    </FontAwesome5>
                     </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnSubmit} onPress={SaveProfile}>
                      <Text style={styles.submitText}>
                      <FontAwesome5 
                        name={'check-circle'} 
                        size={30}
                        color = '#00CD66'
                         >
                    </FontAwesome5>
                    </Text>
                    </TouchableOpacity>
                  </View>
               </View>
              </View>
            </View>   
    </KeyboardAvoidingView>

 );
};export default Profile;
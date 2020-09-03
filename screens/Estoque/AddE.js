import React,{useState, useEffect} from 'react';
import { View, KeyboardAvoidingView , StatusBar,Text ,TextInput, TouchableOpacity, Alert, ToastAndroid } from 'react-native';
import NumericInput from '@wwdrew/react-native-numeric-textinput';
import DatePicker  from 'react-native-datepicker';
import fire from '../../config/fire'

// importando a design 
import styles from './stylesEstoque';

// importando os icons 
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Post = ({navigation})  =>{
    
    // variaveis que guardam os valores que os usuarios fornecem 
    const [valid, setValid] = useState();
    const [name,setName] = useState();
    const [cod,setCod] = useState();
    const [desc,setDesc] = useState();
    const [preC, setPreC] = useState();
    const [preV, setPreV] = useState();
    const [counter,setCounter] = useState(0);
    const [dateValid,setDateValid] = useState();
    const [uid, setUid] = useState();
    const  selectDate = (dateValid) => {setDateValid([dateValid]);}
    
 
    // contador  não aceitar numero negativo
    if (counter < 0) {
        setCounter(0)
        Alert.alert('Quantidade Invalida' )
    }

    useEffect(()=>{
        var user = fire.auth().currentUser;
        var  uid;
        if (user != null) {
        uid = user.uid;
        setUid(uid);
        }
    
      },[]);  

//Adicionar produtos no estoque 
    const createProdut = () => {

        setTimeout(()=>{
            try{

                const database = fire.database().ref(`/produtos/${uid}`);
                const dates ={
                    name,
                    cod,
                    desc,
                    counter,
                    preC,
                    preV,
                    dateValid,
                    complete:false,
                    
                };
                database.push(dates)
                toast();
            }
            catch (error){
                
                alert('Preencha todos os campos' )
            }
            finally{
                setName('');
                setCod('');
                setDesc('');
                setPreC('');
                setPreV('');
                setCounter(0);
                setDateValid();
               
            }
        },500)
     };
        const toast = () =>{
            ToastAndroid.showWithGravity(
                'Produto adicionado',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
                ToastAndroid.TOP,
            )
        };

    const toastL = () =>{
            ToastAndroid.showWithGravity(
                'Limpei :)',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
                ToastAndroid.TOP,
            )
        };

    // codigo para limpar os campos 
    const limpar = () => {
        
        setName('');
        setCod('');
        setDesc('');
        setPreC('');
        setPreV('');
        setCounter(0);
        setDateValid();
        toastL();
    
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
                     <TouchableOpacity style={styles.IconTopText} onPress={() => navigation.openDrawer()} >
                      <Text >
                      <FontAwesome5 
                        name={'bars'} 
                        size={25}
                        color = '#fff'
                         >
                        </FontAwesome5>
                        </Text>
                </TouchableOpacity>
                </View>

                <View>
                    <Text 
                    style={styles.TextTopo}>
                         Adicionar Produtos
                     </Text>

                </View>
            </View>
        
              <View style={styles.formulario}>

                <View style={styles.meioform}>

                    <View style={styles.forminput} >
                        <Text style={styles.Text} > Nome </Text> 
                        
                        <TextInput
                            value ={name}
                            style={styles.input}
                            autoCorrent = {false}
                            maxLength={35}
                            onChangeText = {(txt)=> setName(txt)}
                        />
                        <Text style={styles.TextIconNP}>
                            <FontAwesome5 
                                name={'pen'} 
                                size={20}
                                color = '#00CED1' >  
                            </FontAwesome5>
                        </Text>    
                    </View>

                    <View style={styles.forminput}>  
                        <Text style={styles.Text} > Código </Text> 
                        <TextInput 
                            value ={cod}
                            style={styles.input}
                            autoCorrent = {false}
                            keyboardType = {'numeric'}
                            textcolor = {'#000'}
                            placeholder ={'Max 8 digitos'}
                            maxLength={8}
                            onChangeText = {(cod)=> setCod(cod)}
                        />
                        <Text style={styles.TextCod}>
                            <FontAwesome5 
                                name={'barcode'} 
                                size={23}
                                color = '#6C7B8B' >
                            </FontAwesome5>
                        </Text> 
                    </View> 

                    <View style={styles.forminput}>  
                        <Text style={styles.Text} > Descrição </Text> 
                        <TextInput 
                            value ={desc}
                            style={styles.input}
                            autoCorrent = {false}
                            maxLength={45}
                            onChangeText = {(desc)=> setDesc(desc)}
                        />   
                            <Text style={styles.TextDes}>
                            <FontAwesome5 
                                name={'ellipsis-h'} 
                                size={23}
                                color = '#EE30A7' >
                            </FontAwesome5>
                            </Text> 
                     </View> 
                    <View style={styles.forminput}>  
                        <Text style={styles.Text} > Validade </Text> 
                           <DatePicker
                           style={styles.inputV}
                                value ={valid}
                               format  = 'DD/MM/YY'
                               date = {dateValid}
                               onDateChange = {selectDate}
                               onChangeText = {(valid)=> setValid(valid)}
                            />
                    </View>
                        <View style={styles.forminput}> 
                            <Text style={styles.TextQ} > Quantidade</Text>  
                            <TouchableOpacity onPress={() => setCounter(counter - 1)}>
                                <Text style={styles.IconV} >
                                    <FontAwesome5 
                                        name={'minus-square'} 
                                        size={25}
                                        color = '#CD0000' >
                                    </FontAwesome5>
                                </Text>
                            </TouchableOpacity>
                            <Text
                            style={styles.inputQ} 
                            value={counter} 
                            maxLength={2}> 
                            {counter}
                            </Text>

                            <TouchableOpacity 
                            onPress={() => setCounter(counter + 1)}>
                                <Text style={styles.TextIconV}>  
                                    <FontAwesome5 
                                        name={'plus-square'} 
                                        size={25} 
                                        color = '#00BFFF'>
                                    </FontAwesome5>  
                                </Text>
                            </TouchableOpacity> 
                        </View>

                        <View style={styles.forminput}>  
                            <Text style={styles.Text} > Preço de Custo </Text>     
                            
                            <NumericInput
                                style={styles.inputProduto}
                                type='currency'
                                locale='br-BR'
                                currency='BRL'
                                value={preC}
                                textcolor = {'#000'}
                                placeholder ={'R$'}
                                onUpdate={(preC) => setPreC(preC)} 
                                autoCorrent = {false}  
                                maxLength={10}
                                onChangeText = {(preC)=> setPreC(preC)}
                               
                            />
                                <Text style={styles.TextIconPreco}>
                                    <FontAwesome5 
                                        name={'file-invoice-dollar'} 
                                        size={23}
                                        color = '#CD0000' >
                                    </FontAwesome5>
                                </Text>
                        </View>
                              
                        <View style={styles.forminput}>
                            <Text style={styles.Text} > Preço de Venda </Text>   
                            <NumericInput
                                style={styles.inputProduto}
                                type='currency'
                                locale='br-BR'
                                currency='BRL'
                                value={preV}
                                textcolor = {'#000'}
                                placeholder ={'R$'}
                                onUpdate={(preV) => setPreV(preV)} 
                                autoCorrent = {false}  
                                maxLength={10}
                                onChangeText = {(preV)=> setPreV(preV)}
                            />
                            <Text style={styles.TextIconPreco}>
                                <FontAwesome5 
                                    name={'hand-holding-usd'} 
                                    size={23}
                                    color = '#43CD80' >
                                </FontAwesome5>
                            </Text>
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

                    <TouchableOpacity style={styles.btnSubmit} onPress={createProdut}>
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
};export default Post;
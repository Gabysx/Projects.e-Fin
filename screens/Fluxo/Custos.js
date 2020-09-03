import React,{useState, useEffect} from 'react';
import { View, KeyboardAvoidingView , StatusBar,Text ,TextInput, TouchableOpacity, Alert, Picker, ToastAndroid } from 'react-native';
import NumericInput from '@wwdrew/react-native-numeric-textinput';
import DatePicker  from 'react-native-datepicker';


// importando a design 
import styles from './stylesFluxo';

// importando os icons 
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
 
//conexão com firebase
import fire from '../../config/fire';

const Custos = ({navigation})  =>{


    // variaveis que guardam os valores que os usuarios fornecem 
    const [validComp, setValidComp] = useState();
    const [valid, setValid] = useState();
    const [fornecedor,setFornecedor] = useState();
    const [notaF,setNotaF] = useState();
    const [descs,setDescs] = useState();
    const [venc, setVenc] = useState();
    const [dtacom, setDtacom] = useState();
    const [valorTF,setValorTF] = useState();
    const [formaP,setFormaP] = useState();
    const [uid, setUid] = useState();

   const  selectDate = (venc) => {setVenc([venc]);}
   const  selectDateC = (dtacom) => {setDtacom([dtacom]);}

 // contador  não aceitar numero negativo
        if (valorTF < 0) {
            setValorTF(0)
            Alert.alert('Por favor coloque o valor da compra' )
        }
        useEffect(()=>{
            var user = fire.auth().currentUser;
            var  uid;
            
            if (user != null) {
              uid = user.uid;
              setUid(uid);
            }
          },[]);


//Adicionar  Despesas ao extrato
    const CustosP = () => {
        try{
        
            const databaseC = fire.database().ref('/extrato/'+uid);
            const dadosC ={
                fornecedor,
                notaF,
                descs,
                venc,
                dtacom,
                valorTF,
                formaP,
                complete:false,
                
            };
            databaseC.push(dadosC)
            toast(); 
        }
        catch (error){
            
            alert('Preencha todos os campos' )
        }
        finally{

            setFornecedor();
            setNotaF();
            setDescs();
            setVenc();
            setDtacom();
            setValorTF();
            setFormaP();  
  
            
        }
    };
  //mensagem
     const toast = () =>{
        ToastAndroid.showWithGravity(
            'Despesa adicionada',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
            ToastAndroid.TOP,
        )
    };
    //mensagem
    const limpei = () =>{
        ToastAndroid.showWithGravity(
            'Limpei',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
            ToastAndroid.TOP,
        )
    };

    // codigo para limpar os campos 
    const limpar = () => {
     
        setFornecedor('');
        setNotaF('');
        setDescs('');
        setValorTF('');
        setDtacom();
        setFormaP();
        setVenc();
        limpei();
    }; 
    
    const combo2 = () =>{
       
        if (CustosP() === ''){
            alert('Preencha todos os campos' )
        } 
    }

    // ir para tela de home 
    const goHome = () => { navigation.navigate('Home')};
   
    return(
        <KeyboardAvoidingView style={styles.containerC}>
         <StatusBar backgroundColor="#6959CD" barStyle="light-content" />
       
         <View
         style={styles.topocontainerC} >
         </View>
            
            <View style={styles.meio}> 
            <View style={styles.ViewTopo}> 
                
                 <View>
                     <TouchableOpacity style={styles.IconTopText} onPress={() => navigation.openDrawer()} >
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
                    style={styles.TextTopoC}>
                         Adicionar Custos
                     </Text>

                </View>
            </View>
        
              <View style={styles.formulario}>

                <View style={styles.meioform}>

                    <View style={styles.forminput} >
                        <Text style={styles.Text} > Fornecedor </Text> 
                        
                        <TextInput
                            value ={fornecedor}
                            style={styles.input}
                            autoCorrent = {false}
                            maxLength={35}
                            onChangeText = {(txt)=> setFornecedor(txt)}
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
                        <Text style={styles.Text} > Nota fiscal </Text> 
                        <TextInput 
                            value ={notaF}
                            style={styles.input}
                            autoCorrent = {false}
                            keyboardType = {'numeric'}
                            textcolor = {'#000'}
                            placeholder ={'Max 8 digitos'}
                            maxLength={8}
                            placeDecimal = {2}
                            onChangeText = {(notaF)=> setNotaF(notaF)}
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
                            value ={descs}
                            style={styles.input}
                            autoCorrent = {false}
                            maxLength={45}
                            onChangeText = {(descs)=> setDescs(descs)}
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
                        <Text style={styles.Text} >Vencimento </Text> 
                           <DatePicker
                           style={styles.inputV}
                                value ={valid}
                               format  = 'DD/MM/YY'
                               date = {venc}
                               onDateChange = {selectDate}
                               onChangeText = {(valid)=> setValid(valid)}
                            />
                    </View>
                    <View style={styles.forminput}>  
                        <Text style={styles.Text} >Data da compra </Text> 
                           <DatePicker
                           style={styles.inputV}
                                value ={validComp}
                               format  = 'DD/MM/YY'
                               date = {dtacom}
                               onDateChange = {selectDateC}
                               onChangeText = {(validComp)=> setValidComp(validComp)}
                            />
                    </View>
                   
                        <View style={styles.forminput}>  
                            <Text style={styles.Text} > Valor Total </Text>     
                            
                            <NumericInput
                                style={styles.inputProduto}
                                type='currency'
                                locale='br-BR'
                                currency='BRL'
                                value={valorTF}
                                textcolor = {'#000'}
                                placeholder ={'R$'}
                                onUpdate={(valorTF) => setValorTF(valorTF)} 
                                autoCorrent = {false}  
                                maxLength={10}
                                placeDecimal = {2}
                                onChangeText = {(valorTF)=> setValorTF(valorTF)}
                               
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
                        <Text style={styles.Text} > Forma de pagamento</Text> 
                       
                       <Picker
                            selectedValue={formaP}
                            style = {{height:50, width:123}}
                            onValueChange={(itemValue, itemIndex) => setFormaP(itemValue)}>
                          
                            <Picker.Item label='Escolha' value= 'Escolha' />
                           <Picker.Item label='Dinheiro' value= 'Dinheiro' />
                           <Picker.Item label='Cartão Débito' value= 'Cartão Dédito' />
                           <Picker.Item label='Cartão Crédito' value= 'Cartão Crédito' />
                           <Picker.Item label='Boleto' value= 'Boleto' />
                       
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

                    <TouchableOpacity style={styles.btnSubmit} onPress={ combo2}>
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
};export default Custos;
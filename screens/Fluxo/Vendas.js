import React,{useState,useEffect} from 'react';
import { View, KeyboardAvoidingView , StatusBar,Text ,TextInput, TouchableOpacity, Alert,  Picker , ToastAndroid} from 'react-native';
import NumericInput from '@wwdrew/react-native-numeric-textinput'
import DatePicker  from 'react-native-datepicker';


// importando a design 
import styles from './stylesFluxo';


// importando os icons 
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
 
//conexão com firebase
import fire from '../../config/fire';



const Vendas = ({navigation})  =>{

  

    // variaveis que guardam os valores que os usuarios fornecem 

    const [validP, setValidP] = useState();
    const [validV, setValidV] = useState();
    const [cliente,setCliente] = useState();
    const [notaC,setNotaC] = useState();
    const [descs,setDescs] = useState();
    const [dvenda, setDvenda] = useState();
    const [dpagm, setDpagm] = useState();
    const [valorTC,setValorTC] = useState();
    const [formaP,setFormaP] = useState();
    const [formaPV, setFormaPV] = useState();
    const [uid, setUid] = useState();


    // contador  não aceitar numero negativo
   const  selectDateV = (dvenda) => {setDvenda([dvenda]);}
   const  selectDateP = (dpagm) => {setDpagm([dpagm]);}

        if (valorTC < 0) {
            setValorTC(0)
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
   
//Adicionar produtos no estoque 
    const VendasE = () => {

        try{
        
            const databaseV = fire.database().ref('/extrato/'+uid);
            const dadosVenda ={
                cliente,
                notaC,
                descs,
                dvenda,
                dpagm,
                valorTC,
                formaP,
                formaPV,
                complete:false,
            };
            databaseV.push(dadosVenda)
            toast();
        }
        catch (error){
            
            alert('Preencha todos os campos' )
        }
        finally{

            setCliente();
            setNotaC();
            setDescs();
            setValorTC();
            setDpagm();
            setDvenda();
            setFormaPV();
            setFormaP();
        
        }
    };
    // codigo para limpar os campos 
    const limpar = () => {
     
        setCliente();
        setNotaC();
        setDescs();
        setValorTC();
        setDpagm();
        setDvenda();
        setFormaPV();
        setFormaP();
        limpei();
       
    }; 

    const toast = () =>{
        ToastAndroid.showWithGravity(
            'Venda adicionada',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
            ToastAndroid.TOP,
        )
    };

        //mensagem
        const limpei = () =>{
            ToastAndroid.showWithGravity(
                'Limpei :)',
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
                         Vendas Diarias 
                     </Text>

                </View>
            </View>
        
              <View style={styles.formulario}>

                <View style={styles.meioform}>

                    <View style={styles.forminput} >
                        <Text style={styles.Text} > Cliente </Text> 
                        
                        <TextInput
                            value ={cliente}
                            style={styles.input}
                            autoCorrent = {false}
                            maxLength={12}
                            onChangeText = {(txt)=> setCliente(txt)}

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
                            value ={notaC}
                            style={styles.input}
                            autoCorrent = {false}
                            keyboardType = {'numeric'}
                            textcolor = {'#000'}
                            placeholder ={'Max 8 digitos'}
                            maxLength={8}
                            onChangeText = {(notaC)=> setNotaC(notaC)}
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
                            maxLength={18}
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
                        <Text style={styles.Text} > Data Venda  </Text> 
                           <DatePicker
                           style={styles.inputV}
                                value ={validV}
                               format  = 'DD/MM/YY'
                               date = {dvenda}
                               onDateChange = {selectDateV}
                               onChangeText = {(validV)=> setValidV(validV)}
                  
                       
                            />
                    </View>
                    <View style={styles.forminput}>  
                        <Text style={styles.Text} >Data de Pagamento  </Text> 
                           <DatePicker
                           style={styles.inputV}
                                value ={validP}
                               format  = 'DD/MM/YY'
                               date = {dpagm}
                               onDateChange = {selectDateP}
                               onChangeText = {(validP)=> setValidP(validP)}
                            />
                    </View>
                   
                        <View style={styles.forminput}>  
                            <Text style={styles.Text} > Valor </Text>  

                            <Picker
                            selectedValue={formaPV}
                            style={styles.inputV}
                            style = {{height:50, width:120}}
                            onValueChange={(itemValue, itemIndex) => setFormaPV(itemValue)}>
                          
                           <Picker.Item label='Escolha' value= 'vista1' />
                           <Picker.Item label='á vista' value= 'vista' />
                           <Picker.Item label='2x' value= '2x' />
                           <Picker.Item label='3x' value= '3x' />
                         
                      </Picker>    
                            
                            <NumericInput
                                style={styles.inputProduto}
                                type='currency'
                                locale='br-BR'
                                currency='BRL'
                                value={valorTC}
                                textcolor = {'#000'}
                                placeholder ={'R$'}
                                onUpdate={(valorTC) => setValorTC(valorTC)} 
                                autoCorrent = {false}  
                                maxLength={10}
                                placeDecimal={2}
                                onChangeText = {(valorTC)=> setValorT(valorTC)}
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

                    <TouchableOpacity style={styles.btnSubmit} onPress={VendasE}>
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
};export default Vendas;
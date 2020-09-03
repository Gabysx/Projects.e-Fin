  import React, {useState, useEffect} from 'react';
  import { KeyboardAvoidingView,StatusBar, TouchableOpacity,Text, View, ToastAndroid, FlatList, Modal, TouchableHighlight } from 'react-native';
  import NumericInput from '@wwdrew/react-native-numeric-textinput'
  import { Button, Paragraph, Dialog, Portal, Provider,Card }  from 'react-native-paper';

  //conexão com firebase
  import fire from '../config/fire';
  
  // importando a design 
  import styles from './styles';
  
  // importando os icons 
  import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
  import { ScrollView } from 'react-native-gesture-handler';
  
  
  const Home = ({navigation})  =>{

    const [visible, setVisible] =useState(false);
    const [email, setEmail] =useState();
    const [user, setUser] =useState();
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);
    const [lista, setLista] = useState('');
    const [listaV, setListaV] = useState('');
    
    const [invest, setInvest ] = useState(); 


    useEffect(() => {

      var user = fire.auth().currentUser;
           var uid;
           if (user != null) {
             uid = user.uid;
             setUser(uid);
           }
   
         setTimeout(() => { 
             
           try{
               const listaC = fire.database().ref('/extrato/'+uid);
               listaC.on('value', (snapshot)=>{
                   const flatListCustos = [];
                   const flatListVendas = [];
                   snapshot.forEach(childrenItem => {
                       flatListCustos.push({
                           key: childrenItem.key,
                           fornecedor: childrenItem.val().fornecedor,
                           notaF: childrenItem.val().notaF,
                           valorTF: childrenItem.val().valorTF,   
                              cliente: childrenItem.val().cliente,
                          notaC: childrenItem.val().notaC,
                          valorTC: childrenItem.val().valorTC,
                          
                       });
                   });
                   setLista(flatListCustos)
               })
           }
           catch (error){
                alert(error) 
           }
             
         }, 500);
          
   }, [])

  
    useEffect(()=>{
      var user = fire.auth().currentUser;
      var  email, uid;
      
      if (user != null) {
        email = user.email;
        uid = user.uid;
        setEmail(email);
        setUser(uid);
      } 
      
      setTimeout(() => {
        fire.database().ref('investimento/'+uid).on('value', (snapshot) => {
          setInvest(snapshot.val());
      });
      }, 500);
      
    },[]);

    const Profile = () => { navigation.navigate('Profile')};
   

   const investimento = () => {
    try{
      fire.database().ref('investimento/'+user).set(invest);
      hideDialog();
      ToastAndroid.showWithGravity(
        'Guardei',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
        ToastAndroid.TOP,
        )
        
    } catch (error){
      alert('Ops ... Tente novamente ' )
    }

  };
  
  const sair = () =>  {
    ToastAndroid.showWithGravity(
      'Volte Logo',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
      ToastAndroid.TOP,
      )
      fire.auth().signOut();
      
    };
    
return (
     <Provider>
      <KeyboardAvoidingView style={styles.container}>
      <StatusBar backgroundColor="#6959CD" barStyle="light-content"  /> 
      
        <View style={styles.topocontainer} >
       
        </View>
        
      <View style={styles.meio}>

        <View style={styles.search}>
          <View style={styles.viewT}>
            <TouchableOpacity style={[styles.IconTopText,{marginLeft:20}]} onPress={() => navigation.openDrawer()} >
              <Text >
                <FontAwesome5 
                name={'bars'} 
                size={30}
                color = '#fff'
                >
                </FontAwesome5>
              </Text>
            </TouchableOpacity>
          </View>

        <View style={styles.viewT}>
            <TouchableOpacity style={[styles.IconTopText,{marginLeft:40}]} onPress={sair} >
              <Text >
                <FontAwesome5 
                name={'sign-out-alt'} 
                size={30}
                color = '#fff'
                >
                </FontAwesome5>
            </Text>
            </TouchableOpacity>
          </View>
        </View>
        
        
           <TouchableOpacity style={styles.meio2} onPress={Profile}>
            <Text style={styles.textmeio}  >
              <FontAwesome5 
              name={'user'} 
              size={90}
              color = '#333'
              >
              </FontAwesome5>
            </Text>
          <Text  style={styles.TextI} >{email}</Text>
            <Text   style={styles.TextI}> R${invest}  </Text> 
            
        </TouchableOpacity>
      
   

        <View style={styles.buttonView}> 
        <ScrollView 
          horizontal= {true}
          showsHorizontalScrollIndicator = {false}> 
            <View style={styles.buttonhome}>

            <TouchableOpacity
              style={[styles.openButton,{marginTop:20}]}
              onPress={showDialog}>
              <Text style={[styles.textStyle, {fontSize:10}]}>Investimento</Text>
            </TouchableOpacity>
              <Portal>
              <Dialog visible={visible} onDismiss={hideDialog}>
                <Dialog.Title style={styles.modal1}>Investimento Inicial</Dialog.Title>
                  <Dialog.Content>
                    <Paragraph style={styles.modal2}>Qual o valor que vamos começamos? </Paragraph>
                      <NumericInput
                      value={invest}
                      keyboardType='numbers-and-punctuation'
                      maxLength={6}
                      style={styles.modal3}
                      onChangeText = {(invest)=> setInvest(invest)}
                      type='currency'
                      locale='br-BR'
                      currency='BRL'
                      textcolor = {'#000'}
                      placeholder ={'R$'}
                      onUpdate={(invest) => setInvest(invest)} 
                      autoCorrent = {false}  
                      maxLength={10}
                      placeDecimal = {2}
                      />
                  </Dialog.Content>
                <Dialog.Actions>
                <Button onPress={investimento} >Ok</Button>
                <Button onPress={hideDialog}>   Depois</Button>
                </Dialog.Actions>
              </Dialog>
            </Portal> 
          </View> 
          
      
        <View style={styles.buttonhome}>
            <View style={styles.centeredView}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible2}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                }}
              >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
              <View style={styles.topper1}>
                        <View style={styles.table}>
                            <View >
                                <Text style={[styles.rows,{marginLeft:20}]}> Nome </Text>
                            </View>  
                            <View > 
                                <Text style={[styles.rows, {marginLeft:30}]}>Nota</Text>
                            </View>
                      
                            <View > 
                                <Text style={[styles.rows,{marginLeft:25}]}> Valor </Text>
                            </View> 
                        </View>

                    </View>
                        <FlatList data ={lista} keyExtractior={(item) => item.key}
                    renderItem = {({item})=>
                        
                    <View style={styles.topper}>

                        <TouchableOpacity> 
                            <Card style={styles.card} >
                    
                            <View  style={styles.table}>      
                                    <View style={styles.col}> 
                                    <Text style={[styles.rowsD,{marginLeft:20}]}> {item.fornecedor}</Text>
                                    </View>
                                    <View style={styles.col}>
                                    <Text style={[styles.rowsD, {marginLeft:30}]}>{ item.notaF }</Text>
                                    </View>    
                                    <View style={styles.col}> 
                                    <Text style={[styles.rowsD,{marginLeft:25}]}> { item.valorTF }</Text>
                                </View>      
                                </View>
                            </Card>
                            </TouchableOpacity>
                        </View>
                } />

            <TouchableOpacity
              style={{ ...styles.openButton, backgroundColor: "#2196F3" ,  marginTop:20}}
              onPress={() => {
                setModalVisible2(!modalVisible2);
              }}
            >
              <Text style={[styles.textStyle, {color:'#fff'}]}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        style={styles.openButton}
        onPress={() => {
          setModalVisible2(true);
        }}>
        <Text style={[styles.textStyle,{fontSize:15}]}>Despesas</Text>
      </TouchableOpacity>
    </View>
        </View>

        <View style={styles.buttonhome}>
            <View style={styles.centeredView}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                }}
              >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
              <View style={styles.topper1}>
                        <View style={styles.table}>
                            <View >
                                <Text style={[styles.rows,{marginLeft:20}]}> Nome </Text>
                            </View>  
                            <View > 
                                <Text style={[styles.rows, {marginLeft:30}]}>Nota</Text>
                            </View>
                      
                            <View > 
                                <Text style={[styles.rows,{marginLeft:25}]}> Valor </Text>
                            </View> 
                        </View>

                    </View>
                        <FlatList data ={lista} keyExtractior={(item) => item.key}
                    renderItem = {({item})=>
                        
                    <View style={styles.topper}>

                        <TouchableOpacity> 
                            <Card style={styles.card} >
                    
                            <View  style={styles.table}>      
                                    <View style={styles.col}> 
                                    <Text style={[styles.rowsV,{marginLeft:20}]}> {item.cliente}</Text>
                                    </View>
                                    <View style={styles.col}>
                                    <Text style={[styles.rowsV, {marginLeft:30}]}>{ item.notaC }</Text>
                                    </View>    
                                    <View style={styles.col}> 
                                    <Text style={[styles.rowsV,{marginLeft:25}]}> { item.valorTC }</Text>
                                </View>      
                                </View>
                            </Card>
                            </TouchableOpacity>
                        </View>
                } />

            <TouchableOpacity
              style={{ ...styles.openButton, backgroundColor: "#2196F3" ,  marginTop:20}}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={[styles.textStyle, {color:'#fff'}]}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={[styles.textStyle,{fontSize:15}]}>Receita</Text>
      </TouchableOpacity>
    </View>
        </View>
          <View style={styles.buttonhome} >
            <Button onPress={showDialog}>Tarefas</Button>
              <Portal>
                <Dialog visible={visible} onDismiss={hideDialog}>
                  <Dialog.Title style={styles.modal1}>Investimento Inicial</Dialog.Title>
                    <Dialog.Content>
                      <Paragraph style={styles.modal2}>Qual o valor que vamos começamos? </Paragraph>
                      <NumericInput
                      value={invest}s
                      keyboardType='numbers-and-punctuation'
                      maxLength={6}
                      style={styles.modal3}
                      onChangeText = {(invest)=> setInvest(invest)}
                      type='currency'
                      locale='br-BR'
                      currency='BRL'
                      textcolor = {'#000'}
                      placeholder ={'R$'}
                      onUpdate={(invest) => setInvest(invest)} 
                      autoCorrent = {false}  
                      maxLength={8}
                      placeDecimal = {3}
                      />
                    </Dialog.Content>
                  <Dialog.Actions>
                    <Button  onPress={investimento} >Ok</Button>
                    <Button onPress={hideDialog}>   Depois</Button>
                  </Dialog.Actions>
                </Dialog>
              </Portal>  
          </View> 
        </ScrollView>
      </View>
      </View>
      </KeyboardAvoidingView>  
  </Provider>
);

};export default Home ;


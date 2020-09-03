import React,{useEffect, useState} from 'react';
import { View, Text, FlatList, TouchableOpacity , KeyboardAvoidingView, StatusBar} from 'react-native';
import { Card } from 'react-native-paper';

//conexão com firebase
import fire from '../../config/fire';

// importando a design 
import styles from './stylesFluxo';

function Extrato(){

    const [uid, setUid] = useState();
    const [lista, setLista] = useState('');

  useEffect(() => {

   var user = fire.auth().currentUser;
        var uid;
        if (user != null) {
          uid = user.uid;
          setUid(uid);
        }

      setTimeout(() => { 
          
        try{
            const listaC = fire.database().ref('/extrato/'+uid);
            listaC.on('value', (snapshot)=>{
                const flatListCustos = [];
                snapshot.forEach(childrenItem => {
                    flatListCustos.push({
                        key: childrenItem.key,
                        fornecedor: childrenItem.val().fornecedor,
                        notaF: childrenItem.val().notaF,
                        venc: childrenItem.val().venc,
                        valorTF: childrenItem.val().valorTF,
                        cliente: childrenItem.val().cliente,
                        notaC: childrenItem.val().notaC,
                        dvenda: childrenItem.val().dvenda,
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

    return(
        <KeyboardAvoidingView style={styles.containerL}>
            <StatusBar backgroundColor="#6959CD" barStyle="light-content" />

                <View style={styles.topper1}>
                    <View style={styles.table}>
                        <View >
                            <Text style={[styles.rows,{marginLeft:20}]}> Nome </Text>
                        </View>  
                        <View > 
                            <Text style={[styles.rows, {marginLeft:30}]}>Nota</Text>
                        </View>
                        <View >  
                            <Text style={[styles.rows,{marginLeft:20}]}>Data </Text>
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
                                    <Text style={[styles.rowsV,{marginLeft:20}] }>{item.cliente}</Text> 
                                </View>

                                <View style={styles.col} >
                                <Text style={[styles.rowsD,{marginLeft:20}]}> {item.fornecedor}</Text>
                            </View > 

                                <View style={styles.col}>
                                    
                                    <Text style={[styles.rowsV, {marginLeft:30}]} >  {item.notaC}</Text>
                                </View>    
                                <View style={styles.col}> 
                                <Text style={[styles.rowsD, {marginLeft:30}]}>{ item.notaF }</Text>
                                </View>
                                <View style={styles.col}>
                        
                                    <Text style={[styles.rowsV,{marginLeft:20} ]}>  { item.dvenda }</Text>
                                </View>
                                <View style={styles.col}>  
                                <Text style={[styles.rowsD,{marginLeft:20}]}>{ item.venc }</Text>
                            </View>
                                <View style={styles.col} >
                            
                                    <Text style={[styles.rowsV,{marginLeft:25} ]}>   { item.valorTC }</Text>
                                </View>   
                                <View style={styles.col}> 
                                <Text style={[styles.rowsD,{marginLeft:25}]}> { item.valorTF }</Text>
                            </View>      
                            </View>
                        </Card>
                        </TouchableOpacity>
                
                    </View>
            } />
        </KeyboardAvoidingView>
    );
};
export default Extrato;
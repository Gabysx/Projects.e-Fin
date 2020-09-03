
import React,{useEffect, useState} from 'react';
import { View, Text, FlatList, KeyboardAvoidingView , StatusBar, alert, RefreshControl,TouchableOpacity, Animated} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Card}  from 'react-native-paper';



//conexão com firebase
import fire from '../../config/fire';

// importando os icons 
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// importando a design 
import styles from './stylesEstoque';

function List({navigation}){

    const [listP, setLisP] = useState('');
    const [uid, setUid] = useState();
    const [loading,setLoading] = useState(false);

  useEffect(() => {
      
    var user = fire.auth().currentUser;
        var  uid;
        if (user != null) {
        uid = user.uid;
        setUid(uid);
     }

      setTimeout(() => {
           try{
            const list = fire.database().ref('/produtos/'+uid);
            list.on('value', (snapshot)=>{
                const flatList =[];
            snapshot.forEach(childrenItem => {
               flatList.push({
                    key: childrenItem.key,
                    name: childrenItem.val().name,
                    cod: childrenItem.val().cod,
                    desc: childrenItem.val().desc,
                    counter: childrenItem.val().counter,
                    preC: childrenItem.val().preC,
                    preV: childrenItem.val().preV,
                    dateValid: childrenItem.val().dateValid
                });
            });
            setLisP(flatList)
        })
    }
    catch (error){
        alert(error)
    }
      },100);
   
}, []);
    
function Editar(progress, dragX){

    const scale = dragX.interpolate({
        inputRange:[0,100],
        outputRange:[0,1],
        extrapolate:'clamp',
    })
    return (
        <View style={styles.ViewAction}>
            <TouchableOpacity>
                <Animated.Text style={[styles.TextAction, {transform:[{scale}] }]}>
                <FontAwesome5 
                    name={'edit'} 
                    size={40}
                    color = '#fff'>
                </FontAwesome5>
                </Animated.Text>
            </TouchableOpacity>
        </View>
    )
}
function Excluir(progress, dragX){

    const scale = dragX.interpolate({
    inputRange:[-100,0],
    outputRange:[1,0],
    extrapolate:'clamp',
    })

    return (
    <View style={styles.ViewActionTrash}>
    <TouchableOpacity>
    <Animated.Text style={[styles.TextAction, {transform:[{scale}] }]}> 
    <FontAwesome5 
        name={'trash-alt'} 
        size={35}
        color = '#fff'>
        </FontAwesome5>
    </Animated.Text> 
    </TouchableOpacity>
    </View>
    )
}


const onRefresh=()=>{
    setLoading(true);
    setTimeout(() => {
        setLoading(false)
    },500);
  };


    return( 
        <KeyboardAvoidingView style={styles.containerL}>
            <StatusBar backgroundColor="#6959CD" barStyle="light-content" />
        
            <View
            style={styles.topocontainer} >
            </View>
            <View style={styles.meio2}> 
                <View style={styles.ViewTopo}> 
                    <View>
                        <TouchableOpacity style={styles.IconTopTextEs} onPress={() => navigation.openDrawer()}  >
                        <Text >
                        <FontAwesome5 
                        name={'bars'} 
                        size={25}
                        color = '#fff'>
                        </FontAwesome5>
                        </Text>
                        </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.TextTop22}>
                    Meu Estoque   <FontAwesome5 name={'boxes'} size={30}color = '#00CED1' >  
                        </FontAwesome5>
                    </Text>
                </View>
            </View>
                <View style={styles.formularioE}>
            
            <View style={styles.ViewCard}>
                <FlatList
                 showsVerticalScrollIndicator = {false} data ={listP} keyExtractior={item => item.key} 
                renderItem = {({item}) => (
                    <Swipeable 
                    renderLeftActions={Editar}
                    renderRightActions={Excluir}
                    >
                <View>
        
                <Card  style={styles.Cards}>
                    
                    <View  style={styles.labels}> 
                        <View style={styles.rows} >
                            <Text style={[styles.labelsN,{color:'#6C7B8B'}]}><FontAwesome5 name={'pen'} size={10}color = '#00CED1' >   </FontAwesome5>Produto: </Text>
                            <Text style={styles.labelsN} >  {item.name }</Text>
                        </View>
                        <View style={styles.rows3} >
                            <Text style={[styles.labelsC,{color:'#6C7B8B'}]}><FontAwesome5 name={'barcode'} size={10}color = '#6C7B8B' ></FontAwesome5>  Código:<Text style={styles.labelsCN}>   { item.cod }</Text> </Text>
                            
                            <Text style={[styles.labelsQ,{color:'#6C7B8B'}]}><FontAwesome5 name={'box'} size={10}color = '#363636' >   </FontAwesome5>Quant: <Text style={styles.icon}> { item.counter }</Text> </Text>
                        </View>
        
                        <View style={styles.rows1} >
                            <Text style={[styles.labelsDs,{color:'#6C7B8B'}]}><FontAwesome5 name={'ellipsis-h'} size={10}color = '#EE30A7' >   </FontAwesome5>Desc: <Text style={styles.icon}>  { item.desc }</Text> </Text>
                            <Text style={[styles.labelsV,{color:'#6C7B8B'}]}><FontAwesome5 name={'calendar-times'} size={12}color = '#FFFF00'>   </FontAwesome5>Validade:   <Text style={styles.icon}>{item.dateValid }</Text> </Text>
                        </View>
                        
                        <View style={styles.rows2} >
                            <Text style={[styles.labelsPc,{color:'#6C7B8B'}]}><FontAwesome5 name={'file-invoice-dollar'} size={10}color = '#CD0000' >   </FontAwesome5>Custo R$<Text style={styles.icon}> {item.preC }</Text> </Text>
                            <Text style={[styles.labelsPv,{color:'#6C7B8B'}]}><FontAwesome5 name={'hand-holding-usd'} size={10}color = '#43CD80' >   </FontAwesome5>Venda R$<Text style={styles.icon}> { item.preV }</Text> </Text>
                        </View>
                    </View>    
                      
                </Card>
                    
                </View>
                </Swipeable>)}
                  refreshControl={
                      <RefreshControl
                        refreshing={loading}
                        onRefresh={onRefresh}
                      />
                  } />
                </View>
                </View>
            </View>   
        </KeyboardAvoidingView>

);};export default List;
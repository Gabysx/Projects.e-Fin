import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({

  container:{
    flex: 1,
    alignItems:'center',
    position:'relative',
    backgroundColor:'#FFF',
  },

  containerL:{
    flex: 1,
    alignItems:'center',
    position:'relative',
    backgroundColor:'#F5F5F5',
  },

  topocontainer:{
    position:'relative',
    backgroundColor:'#6959CD',
    paddingRight:12.7,
    paddingLeft:12.7,
    height:270,
    width:'100%',
  },
formulario:{
    alignSelf:'center',
   backgroundColor: '#6959CD',
   width:'105%',
   top:'5%',
   paddingBottom:15,
   borderRadius:20,
   alignItems:'center',
   
  },
  formularioE:{
    alignSelf:'center',
    backgroundColor: '#4F4F4F',
    width:'100%',
    top:'6%',
    borderRadius:5,
    alignItems:'center',
   
  },
meioform:{
    width:'95%',
    backgroundColor:'#FFF',
    alignItems:'center',
    borderRadius:15,
    top:'2%'
  },

  meio:{
  width:'100%',
  height:'100%',
  flex:1,
  position:'absolute',
  zIndex:2,
  backgroundColor:'transparent',
  paddingLeft:26.3,
  paddingRight:26.3,
  },
  
  meio2:{
    width:'112%',
    height:'100%',
    flex:1,
    position:'absolute',
    zIndex:2,
    backgroundColor:'transparent',
    paddingLeft:26.3,
    paddingRight:26.3,
    },

forminput:{  
    top:'5%',
    width:'95%',
    backgroundColor:'transparent',
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between',
    marginLeft:20,
    marginRight:20,
    borderColor:'#7B68EE',
    borderWidth:1,
    marginBottom:13,
    borderRadius:15,
  
  },

   btns:{
    flexDirection:"row",
  },
  
  btnSubmit:{
  width:"30%",
  height: 45,
  alignItems:"center",
  justifyContent:"center",
  marginTop:17,
  marginRight:2,
  marginLeft:2,
  paddingBottom:10,

},

submitText:{
  color:"#fff",
  fontSize:16,
},

input:{
    backgroundColor:"#FFF",
    width:"50%",
    marginBottom:1,
    color:"#222",
    fontSize: 14,
    paddingBottom:3,
    textAlign:'center',
    borderRadius:9,
    height:'85%'
    
  },
  inputQ:{
    backgroundColor:"#FFF",
    width:"28%",
    marginBottom: 3,
    color:"#222",
    fontSize: 17,
    paddingBottom: 8,
    textAlign:'center',
    borderRadius: 9, 
    paddingTop:4,

  }, 

  inputProduto:{
    backgroundColor:"#FFF",
    width:"40%",
    marginBottom:3,
    color:"#222",
    fontSize: 13,
    paddingBottom: 1,
    textAlign:'center',

  },

  inputV:{
    backgroundColor:"#FFF",
    width:"50%",
    marginBottom:3,
    color:"#222",
    fontSize: 14,
    marginTop:5,
    textAlign:'center',
    borderRadius:9,
  
  },

  TextQ:{
    marginLeft:5,
    paddingRight:'15%',
    color:'#4169E1',
    fontSize:17,
    position:'relative',
    fontWeight:'bold',
  },

  Text:{
    marginLeft:8,
    color:'#4169E1',
    fontSize:15,
    paddingRight:5,
    position:'relative',
    fontWeight:'bold',
    
  },
  TextTopo:{
    
    color:'#fff',
    fontSize:25,
    position:'relative',
    fontWeight:'bold',

  },
    

  ViewTopo:{
    top:'8%',
    width:'100%',
    alignItems:'center',
    marginBottom:'1%',
    justifyContent:'flex-start',
    flexDirection:'row',
    },

    ViewTopo2:{
      top:'10%',
      width:'100%',
      alignItems:'center',
      marginBottom:'1%',
      justifyContent:'flex-start',
      flexDirection:'row',
      },

  IconTopText:{
   
    paddingRight:'3%',
    marginLeft:'10%',

  },
  
  IconTopTextEs:{
    
    marginLeft:'25%',

  },
  
  TextIconV:{
    marginRight:'5%',
  },

  TextIconNP:{
    marginRight:'5%',
  },

  TextDes:{
   marginRight:5,
  },

  TextCod:{
    marginRight:5,
  },

  TextIconValid:{
    marginRight:5
  },

  TextIconPreco:{
    marginRight:5,
  },
  ViewCard:{
    top:'1%',
    width:'98%',
    marginBottom:'5%',
    paddingBottom:'18%',
  },
  Cards:{
   marginBottom:'2%',
    borderColor:'#333',
    borderWidth:0.5,
  },

  labels:{
    paddingBottom:'3%',
    paddingLeft:'3%',
    paddingTop:'2%',
    paddingRight:'5%',

  },
  labelsN:{
    paddingBottom:'0.5%',
    fontSize:16,
    marginBottom:2,

  },
  labelsC:{
    paddingBottom:'0.5%',
    fontSize:14,
    marginBottom:2,
  
   
  },

  labelsCN:{
    paddingBottom:'0.5%',
    fontSize:14,
    marginBottom:2,

   
  },
  
  labelsDs:{
    paddingBottom:'0.5%',
    fontSize:14,
    marginBottom:2,

  },
  labelsV:{
    paddingBottom:'0.5%',
    fontSize:14,
    marginBottom:2,

  },
  labelsQ:{
    paddingBottom:'0.5%',
    fontSize:14,
    marginBottom:2,
  
  },
  labelsPc:{
    paddingBottom:'0.5%',
    fontSize:14,
    marginBottom:2,
  },
  labelsPv:{
    paddingBottom:'0.5%',
    fontSize:14,
    marginLeft:25,
    marginBottom:2,
  
  },
  ViewTop2:{
    backgroundColor:'#333',
    position:'relative',
    paddingRight:12.7,
    paddingLeft:12.7,
    height:270,
    width:'100%',

  },
  TextTop2:{
    fontSize:25,
    fontWeight:'bold',
    top:'3%',
    color:'#fff',
    paddingBottom:'3%',
    marginLeft:'3%',
  },
  TextTop22:{
    fontSize:25,
    fontWeight:'bold',
    top:'3%',
    color:'#fff',
    paddingBottom:'3%',
  },
  icon:{
    color:'#333',
  },

  rows:{
    flexDirection:'row',
    justifyContent:'center',
  },
  rows1:{
    flexDirection:'row',
    justifyContent:'space-between',

  },
  rows2:{
    flexDirection:'row',
    justifyContent:'space-between',

  },
  rows3:{
    flexDirection:'row',
    justifyContent:'space-between',

  },
  ViewAction:{
    backgroundColor:'#20B2AA',
    justifyContent:'center',
    flex:1,
    marginBottom:8,
  },
  ViewActionTrash:{
    backgroundColor:'#CD0000',
    justifyContent:'center',
    marginBottom:8
  
  },
  TextAction:{
    color:'#fff',
    fontSize:20,
    padding:20,
  },
    
});

export default styles;

  
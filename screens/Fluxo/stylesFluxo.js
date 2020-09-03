import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({

  containerC:{
    flex: 1,
    alignItems:'center',
    position:'relative',
    backgroundColor:'#6959CD',
  },
  
  container:{
    flex: 1,
    alignItems:'center',
    position:'relative',
    backgroundColor:'#6959CD',
  },
  containerL:{
    flex: 1,
    alignItems:'center',
    position:'relative',
    backgroundColor:'#F8F8FF',
  },



  topocontainerC:{
    position:'relative',
    backgroundColor:'#fff',
    paddingRight:12.7,
    paddingLeft:12.7,
    height:270,
    width:'100%',
  },

  topocontainer:{
    position:'relative',
    backgroundColor:'#333',
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

  forminput:{  
    top:'4%',
    width:'95%',
    backgroundColor:'transparent',
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between',
    marginLeft:30,
    marginRight:30,
    borderBottomColor:'#7B68EE',
    borderBottomWidth:1,
    marginBottom:10,
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
    width:"30%",
    marginBottom:3,
    color:"#222",
    fontSize: 13,
    paddingBottom: 1,
    textAlign:'center',
    marginLeft:5,
  },

  inputV:{
    backgroundColor:"#FFF",
    width:"47%",
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
    paddingRight:6,
    position:'relative',
    fontWeight:'bold',
  },

  TextTopo:{
    color:'#fff',
    fontSize:25,
    position:'relative',
    fontWeight:'bold',
  },

  TextTopoC:{
    color:'#6959CD',
    fontSize:25,
    position:'relative',
    fontWeight:'bold',
  },

  ViewTopo:{
    top:'5%',
    width:'100%',
    alignItems:'center',
    marginBottom:'1%',
    justifyContent:'flex-start',
    flexDirection:'row',
  },

  IconTopText:{
    paddingRight:'10%',
    marginLeft:'10%',
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

  table:{
    flexDirection:'row',
     justifyContent: 'space-around',
      marginEnd:'4%',
  },

  rowsD:{
    flex:1,
    fontSize:13,
    marginRight:'4%',
    color:'#FF0000',

  },
  rowsV:{
    flex:1,
    fontSize:14,
    color:'#008B00',
    marginRight:'1.5%',
  },

  topper:{
      marginTop:'3%',
  },

  topper1:{
    backgroundColor:'#fff',
    paddingBottom:4,
    marginTop:'2%', 
    borderBottomColor:'#333',
    borderBottomWidth:1,
    borderRadius:4,
},
rows:{
 marginEnd:'8%',
 fontSize: 20,
 textAlign:'center',
 flexDirection:'row',
 justifyContent:'flex-end',
},

col:{
  justifyContent:'space-between'
},
card:{
  marginLeft:'2%',
  alignContent:'center',
  alignItems:'center',
  width:'95%',

}
});

export default styles;

  
import {StyleSheet} from 'react-native';



const styles = StyleSheet.create({
  
  container:{
    flex: 1,
    alignItems:'center',
    position:'relative',
    backgroundColor:'#333',
  },

  topocontainer:{
    position:'relative',
    backgroundColor:'#6959CD',
    paddingRight:12.7,
    paddingLeft:12.7,
    height:290,
    width:'100%',
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
    alignSelf:'center',
    backgroundColor:'#fff',
    width:'90%',
    height:'40%',
    top:'15%',
    borderRadius:9,
    alignItems:'center',
   
  },

  search:{
    alignSelf:'center',
    backgroundColor:'transparent',
    top:'8%',
    borderRadius:12,
    alignItems:'center',
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-between',
   
  },
  textmeio:{
    marginTop:45,
    color:'#fff'


  },
  modal1:{
    alignItems:'center',
    textAlign:"center",
  },
  modal2:{
    alignItems:'center',
    textAlign:"center",
  },
  modal3:{
    alignItems:'center',
    textAlign:"center",
    borderBottomColor:'#6959CD',
    borderBottomWidth:0.5,
    marginTop:'5%',
  },
  modal4:{
    alignItems:'center',
    textAlign:"center",
    fontSize:1,
  },
  title:{
    alignItems:'center',
    justifyContent:'center',
  },

  meioform:{
    width:'100%',
    backgroundColor:'#fff',
    alignItems:'center',
 },

 viewT:{
   
   flexDirection:'row',
},
 buttonhome:{
   backgroundColor:'#fff',
   width:120,
   height:100,
   borderRadius:9,
   marginEnd:5,
   marginStart:5,
   alignItems:'center',
   justifyContent:'center',
   },

 buttonView:{
  flexDirection:'row',
  top:'50%',

 },
 TextI:{
   paddingTop:15,
  color:'#333',
  fontSize:15,
  },
 centeredView: {
  
  justifyContent: "center",
  alignItems: "center",
  marginTop: 22
},
modalView: {
  top:'40%',
  margin: 20,
  width:'90%',
  backgroundColor: "#fff",
  borderRadius: 20,
  padding: 35,
  alignItems: "center",
  shadowColor: "#E6E6FA",
  shadowOffset: {
    width:0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5
},
openButton: {
  marginBottom:10,
  justifyContent:'center',
  backgroundColor: "#fff",
  borderRadius: 20,
  padding: 20,

},
textStyle: {
  color: "#7D26CD",
  fontWeight: "bold",
  textAlign: "center",
  fontSize:18,
},
modalText: {
  marginBottom: 15,
  textAlign: "center"
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

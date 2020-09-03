
import React from 'react';
import { TouchableOpacity, Text,StyleSheet } from 'react-native';

//import styles from '..screens/styles';

const Btn = ({onPress, label}) => {
  return (
    <TouchableOpacity style={styles.btnSubmit}
    onPress={onPress}> 
      <Text style={styles.submitText} >{label}</Text>
    </TouchableOpacity>
  );
};
export default Btn;

const styles = StyleSheet.create({

  btnSubmit:{
    width:"60%",
    height: 40,
    alignItems:"center",
    justifyContent:"center",
    borderRadius: 9, 
    backgroundColor:"#008B8B",
    marginTop:10,
  },
  submitText:{
    color:"#fff",
    fontSize:16,
  },

})

//
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    inlineStyle:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding:10
  },
  buttonStyle:{
    backgroundColor:'$purpleColor',
    width:'90%',
    marginTop:5,
    marginRight:'5%',
    marginLeft:'5%',
   
},
titleButtonStyle:{
  fontFamily:'proxima-nova-bold',
  color:'$whiteColor',
},

});

export default styles;
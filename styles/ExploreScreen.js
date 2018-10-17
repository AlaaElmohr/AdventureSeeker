import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({

  containerStyle:{
    backgroundColor:'$whiteColor',
  },
  contentStyle:{
    marginTop:20,
    marginLeft:15
  },
  inlineStyle:{
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buttonStyle:{
    backgroundColor:'transparent',
    borderColor:'$fusciaColor',
    borderWidth: 1,
    elevation: 0,
    marginRight:10
   
   
},
titleButtonStyle:{
  fontFamily:'proxima-nova',
  color:'$fusciaColor',
  fontSize:13
},
 

});

export default styles;
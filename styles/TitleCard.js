import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  inlineStyle:{
    backgroundColor:'$whiteColor',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    height:80,
    padding:20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
  titleStyle:{
      color:'$blackColor',
      fontFamily:'proxima-nova-semibold',
      fontSize:15,
      marginTop:10
      
  },
  spanStyle:{
    color:'$fusciaColor',
    fontFamily:'proxima-nova',
    fontSize:13,
  },
  imageStyle:{
      width:50,
      height:50
  }

  

});

export default styles;
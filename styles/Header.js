import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const HALF_WIDTH= SCREEN_WIDTH / 2;
const styles = EStyleSheet.create({

  wrapperStyle:{
    backgroundColor:'$whiteColor',
    marginBottom:10,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
 
   
  },
  containerStyle:{
    flex:1,
    flexDirection:'row',
    justifyContent: 'space-between',
    
    paddingTop:20,
  },
  titleStyle:{
      color:'$blackColor',
      fontFamily:'proxima-nova-bold',
      fontSize:15,
      
  },
  spanStyle:{
    color:'$fusciaColor',
    fontFamily:'proxima-nova',
    fontSize:12,
    textAlign:'center'
    
},
  iconMenuStyle:{
    paddingLeft:10
  },
  iconSearchStyle:{
    paddingRight:10
  },

  inputStyle:{
    color: '$spanColor',
    fontFamily: "proxima-nova"
  },
    inputContainerStyle: {
    paddingLeft:20,
    paddingTop:10,
    color:"#fff",
    
 },

  

});

export default styles;
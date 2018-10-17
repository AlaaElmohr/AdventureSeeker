import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width-40;

const styles = EStyleSheet.create({
  containerstyle:{    
    flexDirection:'row',
    justifyContent:'space-between',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
    marginTop:15
  },
  imageStyle:{
    width:SCREEN_WIDTH/2,
    height:170,
    borderRadius: 10,
    borderBottomWidth:0
  },
  imageContainerStyle:{
    width:SCREEN_WIDTH/2,
    height:170,
  },
  contentStyle:{
    width:SCREEN_WIDTH/2,
    height:170,
    justifyContent:'center',
    paddingLeft:20

  },
  titleStyle:{
    fontFamily:'proxima-nova-bold',
    color:'$blackColor',
    fontSize:14,
  },
  spanStyle:{
    fontFamily:'proxima-nova-semibold',
    color:'$spanColor',
    fontSize:13,
  },
  descStyle:{
    marginTop:5,
    fontFamily:'proxima-nova',
    color:'$paragraphColor',
    fontSize:13,
  },
  priceStyle:{
    fontFamily:'proxima-nova-semibold',
    color:'$fusciaColor',
    fontSize:13,
    marginTop:5,
  }
  
});

export default styles;
/*******
 * containerstyle:{
    flexDirection:'row',
    marginLeft:10,
    marginRight:10,
    marginTop:10,
    backgroundColor:'$whiteColor',
    height:170,
   
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 7,
  },
  imageStyle:{
    width:SCREEN_WIDTH/2,
    height:170,
  },
  contentStyle:{
    width:SCREEN_WIDTH/2,
  },
  titleStyle:{
    fontFamily:'proxima-nova-bold',
    color:'$blackColor',
    fontSize:14,
  },
  spanStyle:{
    fontFamily:'proxima-nova-semibold',
    color:'$spanColor',
    fontSize:13,
  },
  descStyle:{
    marginTop:5,
    fontFamily:'proxima-nova',
    color:'$paragraphColor',
    fontSize:13,
  },
  priceStyle:{
    fontFamily:'proxima-nova-semibold',
    color:'$fusciaColor',
    fontSize:13,
    marginTop:5,
  }
 * 
 */
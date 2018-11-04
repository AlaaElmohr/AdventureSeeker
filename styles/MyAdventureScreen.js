import EStyleSheet from 'react-native-extended-stylesheet';


const styles = EStyleSheet.create({
 titleStyle:{
    fontFamily:'proxima-nova',
    color:'$spanColor',
    marginTop:5
 },
 containerStyle:{
    flex:1,
    backgroundColor:'#fff',
    position:'absolute',
    width:'100%',
    height:'100%',
    
 },
 titleCardStyle:{
    zIndex:2,
    width:'80%',
    marginTop:-50,
    marginLeft:'10%',
    marginRight:'10%',
    
 },
 contentStyle:{
    paddingLeft:15,
    paddingRight:15,
    marginTop:20
 },
 ptop10:{
     marginTop:10
 }

});

export default styles;
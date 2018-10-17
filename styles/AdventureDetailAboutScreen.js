import EStyleSheet from 'react-native-extended-stylesheet';


const styles = EStyleSheet.create({
    containerStyle:{
        backgroundColor:'$whiteColor',
        flex:1,
        zIndex:1,
        width:'100%',
        

    },
    detailStyle:{
        backgroundColor:'$whiteColor',
        marginTop:-27,
        width:'90%',
        marginLeft:'5%',
        borderRadius:10,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 8,
        elevation: 7,
        overflow: 'visible',
       
    },
    mainIconContainerStyle:{
        backgroundColor:'$whiteColor',
        borderRadius:128,
        height:64,
        width:64,
        marginTop:-32,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 20,
        elevation: 10,
        justifyContent:'center',
        alignItems:'center'
      },
      mainIconStyle:{
          height:32,
          width:32,
          justifyContent:'center',
      },
});

export default styles;
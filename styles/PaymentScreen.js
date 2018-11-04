import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    containerStyle:{
        flex:1,
        backgroundColor:'$whiteColor'
    },
    headerStyle:{
       height:200,
       marginTop:-10,

    },
    priceStyle:{
        color:'$whiteColor',
        fontFamily: "proxima-nova-bold",
        fontSize:40,
        justifyContent:'center',
        alignItems:'center'
    },
    titleStyle:{
        color:'$blackColor',
        fontFamily: "proxima-nova-bold",
        fontSize:17,
        marginTop:10,
    
    },
    descStyle:{
        color:'$spanColor',
        width:'85%',
        fontFamily: "proxima-nova",
    },
    inlineStyle:{
        flexDirection:'row',
        marginTop:5,
        alignItems:'center',
    },
    contentStyle:{
        padding:20
    },
    imageStyle:{
     width:140,
     height:50
    },
    cardTitleStyle:{
        color:'$blackColor',
        fontFamily: "proxima-nova-bold",
        fontSize:15,
        marginLeft:10
    },
    cardListStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderWidth: 1,
        height:80,
        marginTop:10,
        padding:20,
        borderRadius: 10,
        borderColor: '#eee',
        shadowColor: '#ddd',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 3,
    }


});

export default styles;
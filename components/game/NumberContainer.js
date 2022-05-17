import { View,Text,StyleSheet,Dimensions } from "react-native";
import Colors from "../../constants/Color";


function NumberContainer ({children}){

    return (<View style ={styles.container}>
        <Text style = {styles.numberText}>{children}</Text>
    </View>)
}

export default NumberContainer;

const {width} = Dimensions.get('window').width; // see whether the screen size
const styles = StyleSheet.create({
    container:{
        borderWidth:4,
        borderColor: Colors.primary500,
        padding:width <450 ? 12: 24,
        borderRadius:8,
        margin: width <450 ? 12: 24, // specific size for specific
        alignItems:'center',
        justifyContent:'center',

    },
    numberText:{
        color:Colors.primary500,
        fontSize:width <380 ? 28: 36,
        fontFamily:'mon-serrat-bold',
        fontWeight:'bold',

    }
    
  });
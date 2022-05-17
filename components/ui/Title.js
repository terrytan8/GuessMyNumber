import { View,Text ,StyleSheet,Platform } from "react-native";
import Colors from "../../constants/Color";

function Title({children}){

    return(
    <Text style ={styles.title}> {children}</Text>
    );
}



export default Title;








const styles = StyleSheet.create({
    
    title:{
        fontFamily:'mon-serrat-bold',
        fontSize:24,
        color:Colors.secondary500,
        textAlign:'center',
        //borderWidth:Platform.OS === 'android' ? 2 : 0, // change platform
        borderWidth:Platform.select({ios:0, android:2}),
        borderColor:Colors.secondary500,
        padding:8,
        borderRadius:28,
        maxWidth: '80%'

    }
    
  });
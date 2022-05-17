import {View,Text, StyleSheet} from 'react-native'
import { exp } from 'react-native/Libraries/Animated/Easing'
import Colors from '../../constants/Color';

function GuessLogItem ( {roundsNumber, guess}){

    return(
        <View style ={styles.listItem}>
            <Text style ={styles.itemText}>
                #{roundsNumber}
            </Text>
            <Text style ={styles.itemText}>
               Opponent Guess: {guess}
            </Text>
        </View>
    )

}

export default GuessLogItem;

const styles = StyleSheet.create({
    
    listItem:{
        borderColor:Colors.secondary500,
        borderWidth:1,
        borderRadius:40,
        padding:12,
        marginVertical:8,
        backgroundColor:Colors.primary500,
        flexDirection:'row',
        justifyContent:'space-between',
        width: '100%',
        elevation:4,
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowRadius:3
    },
    itemText:{
        fontFamily:'mon-serrat',
        color:'white',
        
    }
  });
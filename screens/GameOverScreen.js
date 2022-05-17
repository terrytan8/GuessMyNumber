
import { View, Image,Text,StyleSheet,Dimensions,useWindowDimensions,ScrollView } from 'react-native'
import Colors from '../constants/Color';
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';

function GameOverScreen ({roundsNumber,userNumbers,onStartNewGame}){

    const {width,height} = useWindowDimensions();

    let imageSize = 300;

    if (width < 380){
        imageSize = 150;
    }

    if (height <400){
        imageSize = 100;
    }

    const imageStyle = {
        width:imageSize,
        height:imageSize,
        borderRadius: imageSize /2
    }

    return (
        <ScrollView style = {styles.screen}>

     
        <View style ={styles.rootContainer}>
            <Title>Game Over!</Title>
            <View style = {[styles.imageContainer,imageStyle]}>
            <Image style = {styles.image} source={require ('../assets/images/success.jpg')}/>
            </View>
          <Text style ={styles.summaryText}>Your phone needed 
              <Text style ={styles.highlight}> {roundsNumber}</Text> 
              rounds to guess the Number 
              <Text style ={styles.highlight}> {userNumbers}</Text>.
              </Text>
              <PrimaryButton onPress ={onStartNewGame}>
                  Start New Game
              </PrimaryButton >
        </View>
        </ScrollView>
    )
}

export default GameOverScreen;

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    screen:{
        flex:1,
    },
    rootContainer:{
        flex:1,
        padding:24,
        justifyContent:'center',
        alignItems:'center'

    },
    imageContainer:{ //Create a circle
        // width: width < 380 ? 150 : 300,
        // height: width < 380 ? 150 : 300,
        // borderRadius:width < 380 ? 75 : 150,
        overflow:'hidden',
        borderWidth:3,
        borderColor:Colors.primary500,
        margin:36,
    },
    image:{
        width:'100%',
        height:'100%'
    },
    summaryText:{
        fontFamily:'mon-serrat',
        fontSize:24,
        textAlign:'center',
        marginVertical:24
    },
    highlight:{
        fontFamily:'mon-serrat-bold',
        color:Colors.secondary500
    }
});
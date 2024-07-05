import {React,useState}from 'react';
import {
    ImageBackground,
    SafeAreaView,
    Text,
    View,
    Button,
    StatusBar,
    Pressable,
    StyleSheet,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SliderBox } from "react-native-image-slider-box";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './LoginScreen';
import Products from './Product';
import Loading from './LoadingScreen';




function HomeScreen() {
    const navigation = useNavigation();
    const [images,setImage]=useState([
        require('./assets/Image/home1.jpg'),
        require('./assets/Image/home2.jpg'),
        require('./assets/Image/home3.jpg'),
    ]
    )
    return (
        <SafeAreaView style={{height:hp('100%'),width:wp('100%'),flexDirection:'column',backgroundColor:'seagreen'}}>
            <StatusBar backgroundColor={'seagreen'}></StatusBar>
            <View></View>
            <ImageBackground>
            <SliderBox
            images={images}
            autoplay
            circleLoop
            sliderBoxHeight={700}
            onCurrentImagePressed={index=>console.warn(`image${index}pressed`)}
            dotColor="gold"    
            inactiveDotColor="gainsboro"
            ></SliderBox>
            
            <View style={{width:wp('100%'),height:hp('100%'),padding:10,position:'absolute',marginTop:410}}>
            <Text style={{color:'white',fontSize:26,textAlign:'center',fontWeight:600,marginTop:130,justifyContent:'center',alignContent:'center'}}>Treat Yourself to the finest, freshly sourced products on the market</Text>
                <View style={{marginTop:60}}>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.text}>Get Started</Text>
                </Pressable>
                </View>
                
            </View>
            

        </ImageBackground>
        </SafeAreaView>
    );
}

function DetailsScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }

const Stack = createNativeStackNavigator();

function Main() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Loading" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Loading" component={Loading}/>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Products" component={Products}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 30,
        backgroundColor: 'gold',
        width: 300,
        height: 40,
        borderRadius: 10
    },
    text: {
        fontSize: 20,
        fontWeight: '400',
        color: 'black'

    }
})


export default Main;
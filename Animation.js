import React,{useState,useEffect,useRef} from 'react';
import { View,Image,StyleSheet,ActivityIndicator,Animated,Easing } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import HomeScreen from './Home'


const Animator=()=>{
    const navigation = useNavigation();
    const [isImageLoaded,setIsImageLoaded]=useState(false);
    const rotation=useRef(new Animated.Value(0)).current;
    useEffect(()=>{
        Animated.loop(
            Animated.timing(rotation,{
                toValue:1,
                duration:2000,
                easing:Easing.linear,
                useNativeDriver:true,
            })
        ).start();
    },[navigation,rotation]);
    const rotate=rotation.interpolate({
        inputRange:[0,1],
        outputRange:["0deg","360deg"]
    });
}
import React,{useState,useEffect,useRef} from 'react';
import { View,Image,StyleSheet,ActivityIndicator,Animated,Easing } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Loading=()=>{
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
        if(isImageLoaded){
            const timer=setTimeout(()=>{
                navigation.navigate('Home');
            },2000);
            return ()=>clearTimeout(timer);
        }
    },[isImageLoaded,navigation,rotation]);
    const rotate=rotation.interpolate({
        inputRange:[0,1],
        outputRange:["0deg","360deg"]
    });
    return(
        <SafeAreaView style={{width:wp('100%'),height:hp('100%'),flex:1}}>
           <View style={{width:wp('100%'),height:hp('100%'),alignItems:'center',justifyContent:'center'}}>
           <Animated.Image 
            source={require('./assets/Image/kpn-logo.png')}
            onLoad={()=>setIsImageLoaded(true)}
            style={[styles.image,{transform:[{rotate}],resizeMode:'contain'}]}
            />
            {!isImageLoaded && <ActivityIndicator size="small" style={styles.activityIndicator}/>}
           </View>
            
        </SafeAreaView>
    )

}

const styles=StyleSheet.create({
    image:{
        width:wp('20%'),
        height:hp('10%'),        
    },
    activityIndicator:{
        position:'absolute'
    }
})

export default Loading;
import React,{useState} from 'react';
import { View, Text, Image, TextInput, Button, Pressable, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, ScrollView, StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';


const Login = () => {
    const navigation = useNavigation();
    const [isHovered,setIsHovered]=useState(false);
    const handlePressIn=()=>{
        setIsHovered(true);
        
    }
    const handlePressOut=()=>{
        setIsHovered(false);
      
    }
    return (
        <SafeAreaView style={{ flex: 1, width: wp('100%'), height: hp('100%') }}>
            <View style={{ backgroundColor: 'seagreen' }}>
                <View>
                    <Image style={{ width: wp('30%'), height: hp('14%'), margin: 15 }} source={require('./assets/Image/kpn-logo.png')}></Image>
                </View>
                <View style={{ width: wp('85%'), alignItems: 'center', alignSelf: 'center' }}>
                    <Text style={{ width: wp('90%'), fontSize: 31, fontWeight: '400', color: 'white', textAlign: 'left', }}>Get farm-fresh products straight from the nearest KPN Store</Text>
                </View>
                <View style={{}}>
                    <Image style={{ width: wp('80%'), height: hp('26%'), justifyContent: 'flex-start', alignSelf: 'flex-end' }} source={require('./assets/Image/kpn-main-banner.png')}></Image>
                </View>
            </View>

            {/* <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
                style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={StyleSheet.scrollViewContainer}> */}
                {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
                    <View style={[isHovered?styles.hovered:null,{width: wp('100%'), height: hp('100%'), backgroundColor: 'white', borderRadius: 14}]}>

                        <View style={{ flexDirection: "row", gap: 5, paddingLeft: 20, marginTop: 10 }}>
                            <Text style={{ fontSize: 20, fontWeight: '500', color: 'black' }}>Login</Text>
                            <Text style={{ fontSize: 15, fontWeight: '400', color: 'black', marginTop: 4 }}>Or</Text>
                            <Text style={{ fontSize: 20, fontWeight: '500', color: 'black' }}>Signup</Text>
                        </View>

                        <View style={{ width: wp('90%'), height: hp('20%'), flexDirection: 'column', gap: 40, alignSelf: 'center', marginTop: 40 }}>
                            <View style={{ borderRadius: 8, borderColor: 'lightgrey', borderWidth: 1, flexDirection: "row", paddingLeft: 10, alignItems: 'center' }}>
                                <Text>+91   |</Text>
                                <TextInput 
                                keyboardType="number-pad" 
                                onSubmitEditing={handlePressOut}
                                onFocus={handlePressIn}
                                placeholder="Phone Number"></TextInput>
                                
                            </View>
                            <Pressable style={{ backgroundColor: '#ecfffa', borderRadius: 8 }} onPress={() => navigation.navigate('Products')}>
                                <Text style={{ color: '#98d0b8', fontWeight: '500', padding: 14, textAlign: 'center' }}>Continue</Text>
                            </Pressable>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 13, fontWeight: '500' }}>By continuing, you agree to the </Text>
                                <Text style={{ fontSize: 13, color: 'hotpink', fontWeight: '500' }}>Terms of use</Text>
                                <Text style={{ fontSize: 13, fontWeight: '500' }}> & </Text>
                                <Text style={{ fontSize: 13, color: 'hotpink', fontWeight: '500' }}>Privacy Policy</Text>
                            </View>
                        </View>


                    </View>
                {/* </TouchableWithoutFeedback> */}

                {/* </ScrollView>
            </KeyboardAvoidingView> */}

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    hovered:{
        position:'absolute',
        marginTop:280,
    }
})

export default Login;
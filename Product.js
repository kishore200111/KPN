import React from "react";
import { View, Text, ImageBackground } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import { Searchbar, TextInput } from "react-native-paper";
import { white } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import { Image } from "react-native-svg";




const Products = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    return (
        <SafeAreaView style={{ width: wp('100%'), height: hp('100%'), flex: 1 }}>
            
                <ImageBackground style={{ width: wp('100%'), height: hp('50%') }} source={require('./assets/Image/image.png')}>
                    <View style={{marginTop:100,marginLeft:40,width: wp('80%'),height:hp('20%')}}>
                        <Searchbar
                            placeholder="Search for fresh gooodness"
                            mode="bar"
                            onChangeText={setSearchQuery}
                            value={searchQuery}
                            icon={require('./assets/Image/search.png')}
                            clearIcon={require('./assets/Image/search.png')}
                            style={{justifyContent: 'center', alignItems: 'center',color:'grey'}}
                            
                        />
                        {/* <Image source={uri:'https://storagelpklpiweb.blob.core.windows.net/lpkl/Image/Upload/20230824/6382846515825236775220281.jpg'}/> */}
                    </View>

                </ImageBackground>
           
        </SafeAreaView>

    );
}
export default Products;



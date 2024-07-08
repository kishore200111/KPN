import React from "react";
import { View, Text, ImageBackground, Image, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMagnifyingGlass, height } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import { Searchbar, TextInput } from "react-native-paper";
import { white } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import LinearGradient from 'react-native-linear-gradient';
import Banner from './Bannerscroll'
import Vegetables from "./VegetableFlatlist";


const Data = [
    {
        id: 1,
        image: require('./assets/Image/Masalas.png'),
        title: 'Masalas',
    },
    {
        id: 2,
        image: require('./assets/Image/Dryfruits.webp'),
        title: 'Dry Fruits',
    },
    {
        id: 3,
        image: require('./assets/Image/spices.webp'),
        title: 'Whole Spices',
    },
    {
        id: 4,
        image: require('./assets/Image/juices.png'),
        title: 'Juices',
    },
    {
        id: 5,
        image: require('./assets/Image/Riceproducts.webp'),
        title: 'Rice Products',
    },
    {
        id: 6,
        image: require('./assets/Image/yogurt.png'),
        title: 'Curd & Yogurt',
    },
    {
        id: 7,
        image: require('./assets/Image/chips.png'),
        title: 'Snacks',
    },
    {
        id: 8,
        image: require('./assets/Image/soap.png'),
        title: 'Soap and liquids',
    },
    {
        id: 9,
        image: require('./assets/Image/oils.png'),
        title: 'Oils',
    },

]

const Products = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    return (
        <SafeAreaView style={{ width: wp('100%'), height: hp('100%'), flex: 1 }}>

            {/* <ImageBackground style={{ width: wp('100%'), height: hp('50%') }} source={require('./assets/Image/image.png')}>
                    <View style={{marginTop:100,marginLeft:40,width: wp('80%'),height:hp('20%'),gap:30,justifyContent:'center',alignItems:'center',backgroundColor:'violet'}}>
                        <Searchbar
                            placeholder="Search for fresh gooodness"
                            mode="bar"
                            onChangeText={setSearchQuery}
                            value={searchQuery}
                            icon={require('./assets/Image/search.png')}
                            clearIcon={require('./assets/Image/search.png')}
                            style={{justifyContent: 'center', alignItems: 'center',color:'grey'}}
                            
                        />
                        <View style={{width:wp('50%'),height:hp('10%'),backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>
                       
                        </View>
                        <Text style={{color:'violet',width:wp('60%')}}>Get Minimum 20% 0ff on all essentials</Text>
                    </View>

                </ImageBackground> */}
            <View  style={{}}>
                <LinearGradient
                    colors={['rgba(239,135,190,1)', 'rgba(255,206,230,1)']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }} style={{ width: wp('100%'),height:hp('52%')}}
                >
                    <View style={{ width: wp('25%'), height: hp('4%'), justifyContent: 'space-evenly', alignItems: 'center', marginTop: 20, alignSelf: 'flex-end', flexDirection: 'row', gap: 10, }}>
                        <View>
                            <Text style={{ width: wp('10%'), backgroundColor: 'yellow', textAlign: 'center', borderRadius: 10, padding: 5, fontWeight: '600', fontSize: 16, color: 'black' }}>₹0</Text>
                        </View>
                        <View>
                            <Image style={{ width: wp('6.2%'), height: hp('2.9%'), marginRight: 10, resizeMode: 'cover' }} source={require('./assets/Image/user.png')}></Image>
                        </View>

                    </View>
                    <View style={{ margin: 50, width: wp('90%'), height: hp('20%'), gap: 30, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>

                        <Searchbar
                            placeholder="Search for fresh gooodness"
                            mode="bar"
                            onChangeText={setSearchQuery}
                            value={searchQuery}
                            icon={require('./assets/Image/search.png')}
                            clearIcon={require('./assets/Image/search.png')}
                            style={{ justifyContent: 'center', alignItems: 'center', color: 'grey', borderRadius: 10, shadowColor: 'red', shadowOpacity: 0.8, shadowOffset: { width: 0, height: 2 }, shadowRadius: 3, elevation: 5 }}


                        />
                        {/* <View style={{width:wp('80%'),height:hp('5.5%'),flexDirection:'row',backgroundColor:'white'}}>
                            <View>
                            <Image  style={{width:wp('6%'),height:hp('3'),margin:10}}source={require('./assets/Image/search.png')}></Image>
                            </View>
                            <View>
                            <TextInput style={{textAlign:'center',justifyContent:'center',alignItems:'center',alignSelf:'center'}} placeholder="Search for fresh goodness"></TextInput>
                            </View>
                        </View> */}
                        <View style={{ width: wp('50%'), height: hp('10%'), justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={styles.shade} source={require('./assets/Image/blockbuster.jpg')}></Image>
                        </View>
                        <Text style={{ color: 'indigo', width: wp('60%'), fontStyle: 'italic', fontFamily: 'fantasy', fontWeight: '900', width: wp('100%'), textAlign: 'center' }}>Get minimum 20% 0ff on all essentials</Text>
                    </View>
                    <FlatList
                        data={Data}
                        renderItem={({ item }) => Grocery(item)}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                    {/* <View style={{width:wp('18%'),height:hp('11%'),backgroundColor:'white',borderRadius:5,justifyContent:'center'}}>
                            <Image  style={{width:wp('18%'),height:hp('8%')}}source={require('./assets/Image/Masalas.webp')}></Image>
                            <Text style={{fontWeight:'400',color:'black',textAlign:'center'}}>Masalas</Text>
                        </View>
                        <View></View>
                        <View></View>
                        <View></View> */}
                </LinearGradient>
            </View>
            <View style={{ width: wp('100%'),marginTop:10 }}>
                <Text style={{ fontSize: 15, fontWeight: '600', color: 'black', fontStyle: 'normal',marginLeft:20 }}>Top Picks for You</Text>
                <Vegetables></Vegetables>
                <Banner></Banner>
            </View>

        </SafeAreaView>

    );
}

const Grocery = (item) => {
    return (
        <View style={{ flexDirection: 'row', alignSelf: 'flex-start', marginLeft: 20, flex: 1 }}>

            <View style={{ width: wp('24%'), height: hp('11.2%'), backgroundColor: 'white', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ marginTop: 5 }}>
                    <Image style={{ width: wp('18%'), height: hp('8%'), resizeMode: 'contain' }} source={item.image}></Image>
                    <Text style={{ fontWeight: '400', flex: 1, color: 'black', textAlign: 'center', fontSize: 12 }}>{item.title}</Text>
                </View>

            </View>
        </View>
    )
}
export default Products;

const styles = StyleSheet.create({
    shade: {
        width: wp('66%'),
        height: hp('12%'),
        shadowColor: 'grey',
        shadowOffset: { width: 20, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 20,
        resizeMode: 'cover',
    },


})



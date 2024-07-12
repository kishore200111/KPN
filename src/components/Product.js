import React from "react";
import { View, Text, ImageBackground, Image, StyleSheet, FlatList, StatusBar, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMagnifyingGlass, height } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import { Searchbar, TextInput } from "react-native-paper";
import { white } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import LinearGradient from 'react-native-linear-gradient';
import Banner from './Bannerscroll'
import Vegetables from "./VegetableFlatlist";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


const Data = [
    {
        id: 1,
        image: require('../assets/Image/Masalas.png'),
        title: 'Masalas',
    },
    {
        id: 2,
        image: require('../assets/Image/Dryfruits.webp'),
        title: 'Dry Fruits',
    },
    {
        id: 3,
        image: require('../assets/Image/spices.webp'),
        title: 'Whole Spices',
    },
    {
        id: 4,
        image: require('../assets/Image/juices.png'),
        title: 'Juices',
    },
    {
        id: 5,
        image: require('../assets/Image/Riceproducts.webp'),
        title: 'Rice Products',
    },
    {
        id: 6,
        image: require('../assets/Image/yogurt.png'),
        title: 'Curd & Yogurt',
    },
    {
        id: 7,
        image: require('../assets/Image/chips.png'),
        title: 'Snacks',
    },
    {
        id: 8,
        image: require('../assets/Image/soap.png'),
        title: 'Soap and liquids',
    },
    {
        id: 9,
        image: require('../assets/Image/oils.png'),
        title: 'Oils',
    },

]

const Products = () => {
    const Tab = createBottomTabNavigator();
    const [searchQuery, setSearchQuery] = React.useState('');
    return (

        <SafeAreaView style={{ width: wp('100%'), height: hp('100%'), flex: 1 }}>
            <ScrollView>
                <StatusBar backgroundColor={'rgba(255,206,230,1)'}></StatusBar>
                <LinearGradient
                    colors={['rgba(239,135,190,1)', 'rgba(255,206,230,1)']}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 1, y: 0 }} style={{ width: wp('100%'), height: hp('54%') }}
                >
                    <View style={{ width: wp('25%'), height: hp('4%'), justifyContent: 'space-evenly', alignItems: 'center', marginTop: 20, alignSelf: 'flex-end', flexDirection: 'row', gap: 10, }}>
                        <View style={{ backgroundColor: 'yellow', borderRadius: 10, width: wp('10%') }}>
                            <Text style={{ textAlign: 'center', padding: 5, fontWeight: '600', color: 'black' }}>₹0</Text>
                        </View>
                        <View>
                            <Image style={{ width: wp('6.2%'), height: hp('2.9%'), marginRight: 10, resizeMode: 'contain' }} source={require('../assets/Image/user.png')}></Image>
                        </View>

                    </View>
                    <View style={{ margin: 50, width: wp('90%'), height: hp('20%'), gap: 30, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>

                        <Searchbar
                            placeholder="Search for fresh gooodness"
                            mode="bar"
                            onChangeText={setSearchQuery}
                            value={searchQuery}
                            icon={require('../assets/Image/search.png')}
                            clearIcon={require('../assets/Image/search.png')}
                            style={{ justifyContent: 'center', alignItems: 'center', color: 'grey', borderRadius: 10, shadowColor: 'red', shadowOpacity: 0.8, shadowOffset: { width: 0, height: 2 }, shadowRadius: 3, elevation: 5 }}


                        />
                        {/* <View style={{width:wp('80%'),height:hp('5.5%'),flexDirection:'row',backgroundColor:'white'}}>
                            <View>
                            <Image  style={{width:wp('6%'),height:hp('3'),margin:10}}source={require('../assets/Image/search.png')}></Image>
                            </View>
                            <View>
                            <TextInput style={{textAlign:'center',justifyContent:'center',alignItems:'center',alignSelf:'center'}} placeholder="Search for fresh goodness"></TextInput>
                            </View>
                        </View> */}
                        <View style={{ width: wp('50%'), height: hp('10%'), justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={styles.shade} source={require('../assets/Image/blockbuster.jpg')}></Image>
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
                </LinearGradient>
                <View style={{ flexDirection: 'row', marginLeft: 5, marginTop: 12 }}>
                    <Text style={{ fontSize: 16, color: 'black', fontWeight: '500', marginLeft: 10 }}>Top Picks for You  </Text>
                    <View style={{ flex: 1, height: 1, backgroundColor: 'lightgrey', alignSelf: 'center' }} />
                </View>


                <View style={{ width: wp('80%'), justifyContent: 'center' }}>
                    <Vegetables></Vegetables>
                    <Banner></Banner>
                </View>

                <View>
                    <View style={{ flexDirection: 'row', margin: 5, marginTop: 20 }}>
                        <Text style={{ fontSize: 16, color: 'black', fontWeight: '500', marginLeft: 10 }}>Fruits & Vegetables  </Text>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'lightgrey', alignSelf: 'center' }} />
                    </View>
                    <View style={{ width: wp('100%'), height: hp('18%'), justifyContent: 'center', flexDirection: 'row', gap: 20, alignItems: 'center' }}>
                        <View style={{ width: wp('42%'), height: hp('11%'), backgroundColor: '#E8E9EB', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ resizeMode: 'contain', width: wp('30%'), height: hp('18%') }} source={require('../assets/Image/fruits.png')} />
                            <Text style={{ color: 'black', fontWeight: '400', textAlign: 'center' }}>Fresh Fruits</Text>
                        </View>
                        <View style={{ width: wp('42%'), height: hp('11%'), backgroundColor: '#E8E9EB', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ resizeMode: 'contain', width: wp('30%'), height: hp('18%') }} source={require('../assets/Image/vegetables.png')} />
                            <Text style={{ color: 'black', fontWeight: '400', textAlign: 'center' }}>Fresh Vegetables</Text>
                        </View>
                    </View>
                    <View style={{ width: wp('100%'), height: hp('20%'), justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
                        <View style={{ width: wp('19%'), height: hp('10%'), backgroundColor: '#E8E9EB', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: wp('16%'), height: hp('13%'), resizeMode: 'contain', marginTop: 20 }} source={require('../assets/Image/exotics.png')} />
                            <Text style={{ color: 'black', fontWeight: '400', textAlign: 'center' }}>Exotics</Text>
                        </View>
                        <View style={{ width: wp('19%'), height: hp('10%'), backgroundColor: '#E8E9EB', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ alignSelf: 'center', width: wp('16%'), height: hp('13%'), resizeMode: 'contain', marginTop: 28 }} source={require('../assets/Image/leafy.png')} />
                            <Text style={{ color: 'black', fontWeight: '400', textAlign: 'center', width: wp('20%') }}>Leafy Vegetables</Text>
                        </View>
                        <View style={{ width: wp('19%'), height: hp('10%'), backgroundColor: '#E8E9EB', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: wp('16%'), height: hp('13%'), resizeMode: 'contain', marginTop: 28 }} source={require('../assets/Image/salads.jpg')} />
                            <Text style={{ color: 'black', fontWeight: '400', textAlign: 'center' }}>Salads & Juices</Text>
                        </View>
                        <View style={{ width: wp('19%'), height: hp('10%'), backgroundColor: '#E8E9EB', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: wp('16%'), height: hp('13%'), resizeMode: 'contain', marginTop: 28 }} source={require('../assets/Image/regional.png')} />
                            <Text style={{ color: 'black', fontWeight: '400', textAlign: 'center' }}>Regional Produce</Text>
                        </View>

                    </View>
                </View>
                <View>
                    <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 10, marginRight: 10 }}>
                        <Text style={{ fontSize: 16, color: 'black', fontWeight: '500' }}>Grocery & More  </Text>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'lightgrey', alignSelf: 'center' }} />
                    </View>
                    <View style={{ width: wp('100%'), height: hp('20%'), justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
                        <View style={{ width: wp('19%'), height: hp('10%'), backgroundColor: '#E8E9EB', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: wp('16%'), height: hp('13%'), resizeMode: 'contain', marginTop: 20 }} source={require('../assets/Image/diary.png')} />
                            <Text style={{ color: 'black', fontWeight: '400', textAlign: 'center' }}>Diary, Eggs & Bread</Text>
                        </View>
                        <View style={{ width: wp('19%'), height: hp('10%'), backgroundColor: '#E8E9EB', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ alignSelf: 'center', width: wp('16%'), height: hp('13%'), resizeMode: 'contain', marginTop: 28 }} source={require('../assets/Image/Atta.png')} />
                            <Text style={{ color: 'black', fontWeight: '400', textAlign: 'center', width: wp('17%') }}>Rice, Atta & Dals</Text>
                        </View>
                        <View style={{ width: wp('19%'), height: hp('10%'), backgroundColor: '#E8E9EB', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: wp('16%'), height: hp('13%'), resizeMode: 'contain', marginTop: 28 }} source={require('../assets/Image/dates.png')} />
                            <Text style={{ color: 'black', fontWeight: '400', textAlign: 'center' }}>Masalas & Dry Fruits</Text>
                        </View>
                        <View style={{ width: wp('19%'), height: hp('10%'), backgroundColor: '#E8E9EB', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: wp('16%'), height: hp('13%'), resizeMode: 'contain', marginTop: 28 }} source={require('../assets/Image/Edibleoil.png')} />
                            <Text style={{ color: 'black', fontWeight: '400', textAlign: 'center' }}>Edible Oil & Ghee</Text>
                        </View>
                    </View>
                    <View style={{ width: wp('100%'), height: hp('20%'), justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
                        <View style={{ width: wp('19%'), height: hp('10%'), backgroundColor: '#E8E9EB', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: wp('16%'), height: hp('13%'), resizeMode: 'contain', marginTop: 20 }} source={require('../assets/Image/cookies.png')} />
                            <Text style={{ color: 'black', fontWeight: '400', textAlign: 'center' }}>Biscuits & Cookies</Text>
                        </View>
                        <View style={{ width: wp('19%'), height: hp('10%'), backgroundColor: '#E8E9EB', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ alignSelf: 'center', width: wp('16%'), height: hp('13%'), resizeMode: 'contain', marginTop: 28 }} source={require('../assets/Image/oats.png')} />
                            <Text style={{ color: 'black', fontWeight: '400', textAlign: 'center', width: wp('20%') }}>Cereals & Breakfast</Text>
                        </View>
                        <View style={{ width: wp('19%'), height: hp('10%'), backgroundColor: '#E8E9EB', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: wp('16%'), height: hp('13%'), resizeMode: 'contain', marginTop: 28 }} source={require('../assets/Image/Tea.png')} />
                            <Text style={{ color: 'black', fontWeight: '400', textAlign: 'center' }}>Tea, Coffee & More</Text>
                        </View>
                        <View style={{ width: wp('19%'), height: hp('10%'), backgroundColor: '#E8E9EB', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: wp('16%'), height: hp('13%'), resizeMode: 'contain', marginTop: 28 }} source={require('../assets/Image/salt.png')} />
                            <Text style={{ color: 'black', fontWeight: '400', textAlign: 'center' }}>Salt, Sugar & Jaggery</Text>
                        </View>

                    </View>


                </View>
                <View>
                    <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 10, marginRight: 10 }}>
                        <Text style={{ fontSize: 16, color: 'black', fontWeight: '500' }}>Snacks & Drinks </Text>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'lightgrey', alignSelf: 'center' }} />
                    </View>
                    <View style={{ width: wp('100%'), height: hp('20%'), justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
                        <View style={{ width: wp('19%'), height: hp('10%'), backgroundColor: '#E8E9EB', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: wp('16%'), height: hp('13%'), resizeMode: 'contain', marginTop: 20 }} source={require('../assets/Image/Munchies.png')} />
                            <Text style={{ color: 'black', fontWeight: '400', textAlign: 'center' }}>Munchies</Text>
                        </View>
                        <View style={{ width: wp('19%'), height: hp('10%'), backgroundColor: '#E8E9EB', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ alignSelf: 'center', width: wp('16%'), height: hp('13%'), resizeMode: 'contain', marginTop: 28 }} source={require('../assets/Image/Colddrinks.png')} />
                            <Text style={{ color: 'black', fontWeight: '400', textAlign: 'center', width: wp('20%') }}>Cold Drinks & Juices</Text>
                        </View>
                        <View style={{ width: wp('19%'), height: hp('10%'), backgroundColor: '#E8E9EB', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: wp('16%'), height: hp('13%'), resizeMode: 'contain', marginTop: 28 }} source={require('../assets/Image/Sweet.png')} />
                            <Text style={{ color: 'black', fontWeight: '400', textAlign: 'center' }}>Sweet Tooth</Text>
                        </View>
                        <View style={{ width: wp('19%'), height: hp('10%'), backgroundColor: '#E8E9EB', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: wp('16%'), height: hp('13%'), resizeMode: 'contain', marginTop: 28 }} source={require('../assets/Image/Instant.png')} />
                            <Text style={{ color: 'black', fontWeight: '400', textAlign: 'center' }}>Instant & Frozen</Text>
                        </View>
                    </View>
                    <View style={{ width: wp('100%'), height: hp('20%'), justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
                        <View style={{ width: wp('19%'), height: hp('10%'), backgroundColor: '#E8E9EB', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: wp('16%'), height: hp('13%'), resizeMode: 'contain', marginTop: 20 }} source={require('../assets/Image/Sauces.png')} />
                            <Text style={{ color: 'black', fontWeight: '400', textAlign: 'center' }}>Sauces & Spreads</Text>
                        </View>
                        <View style={{ width: wp('19%'), height: hp('10%'), backgroundColor: '#E8E9EB', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ alignSelf: 'center', width: wp('16%'), height: hp('13%'), resizeMode: 'contain', marginTop: 28 }} source={require('../assets/Image/Readymade.png')} />
                            <Text style={{ color: 'black', fontWeight: '400', textAlign: 'center', width: wp('20%') }}>Ready to Eat & Cook</Text>
                        </View>
                        <View style={{ width: wp('19%'), height: hp('10%'), backgroundColor: '#E8E9EB', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: wp('16%'), height: hp('13%'), resizeMode: 'contain', marginTop: 28 }} source={require('../assets/Image/Icecreams.png')} />
                            <Text style={{ color: 'black', fontWeight: '400', textAlign: 'center' }}>Ice Creams</Text>
                        </View>
                        <View style={{ width: wp('19%'), height: hp('10%'), backgroundColor: '#E8E9EB', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: wp('16%'), height: hp('13%'), resizeMode: 'contain', marginTop: 28 }} source={require('../assets/Image/Indiansnacks.png')} />
                            <Text style={{ color: 'black', fontWeight: '400', textAlign: 'center' }}>Indian Snacks</Text>
                        </View>

                    </View>


                </View>
                <View>
                    <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 10, marginRight: 10 }}>
                        <Text style={{ fontSize: 16, color: 'black', fontWeight: '500' }}>Home Essentials </Text>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'lightgrey', alignSelf: 'center' }} />
                    </View>
                    <View style={{ width: wp('100%'), height: hp('20%'), justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
                        <View style={{ width: wp('19%'), height: hp('10%'), backgroundColor: '#E8E9EB', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: wp('16%'), height: hp('13%'), resizeMode: 'contain', marginTop: 20 }} source={require('../assets/Image/Cleaning.png')} />
                            <Text style={{ color: 'black', fontWeight: '400', textAlign: 'center' }}>Cleaning & Household</Text>
                        </View>
                        <View style={{ width: wp('19%'), height: hp('10%'), backgroundColor: '#E8E9EB', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ alignSelf: 'center', width: wp('16%'), height: hp('13%'), resizeMode: 'contain', marginTop: 28 }} source={require('../assets/Image/Stationary.png')} />
                            <Text style={{ color: 'black', fontWeight: '400', textAlign: 'center', width: wp('20%') }}>Stationary & Electrical</Text>
                        </View>
                        <View style={{ width: wp('19%'), height: hp('10%'), backgroundColor: '#E8E9EB', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: wp('16%'), height: hp('13%'), resizeMode: 'contain', marginTop: 28 }} source={require('../assets/Image/Pooja.png')} />
                            <Text style={{ color: 'black', fontWeight: '400', textAlign: 'center' }}>Pooja Needs</Text>
                        </View>
                        <View style={{ width: wp('19%'), height: hp('10%'), backgroundColor: '#E8E9EB', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: wp('16%'), height: hp('13%'), resizeMode: 'contain', marginTop: 28 }} source={require('../assets/Image/Homeneed.png')} />
                            <Text style={{ color: 'black', fontWeight: '400', textAlign: 'center' }}>Home Needs</Text>
                        </View>
                    </View>
                </View>

                <View style={{ width: wp('100%'), height: hp('30%'), marginTop: 20 }}>
                    <LinearGradient
                        colors={['rgba(213,188,241,1)', 'rgba(245,245,245,1)']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }} style={{ width: wp('100%'), height: hp('30%') }}
                    >
                        <Image style={{ width: wp('80%'), height: hp('10%'), marginTop: 10, alignSelf: 'center' }} source={require('../assets/Image/brand.png')} />
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ width: wp('30%'), height: hp('16%'), backgroundColor: 'violet', marginLeft: 10 }}>

                            </View>
                            <View style={{ width: wp('30%'), height: hp('16%'), backgroundColor: 'orange', marginLeft: 10 }}>

                            </View>
                        </View>


                    </LinearGradient>
                </View>

                <View>
                    <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 10, marginRight: 10 }}>
                        <Text style={{ fontSize: 16, color: 'black', fontWeight: '500' }}>Offers You can't miss! </Text>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'lightgrey', alignSelf: 'center' }} />
                    </View>

                    <View style={{ marginTop: 10, alignItems: 'center' }}>
                        <LinearGradient
                            colors={['rgba(84,38,213,1)', 'rgba(147,116,237,1)']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }} style={{ width: wp('95%'), height: hp('12%'), borderRadius: 16 }}
                        >
                            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', gap: 20 }}>
                                <View style={{ gap: 5, alignSelf: 'center', marginLeft: 10 }}>
                                    <Pressable style={{ backgroundColor: '#ffffff', borderRadius: 4, width: wp('21%') }}>
                                        <Text style={{ color: 'black', fontWeight: '500', padding: 2, textAlign: 'center', fontSize: 11 }}>UPTO 10% OFF</Text>
                                    </Pressable>
                                    <Text style={{ width: wp('30%'), color: 'white', fontSize: 18, fontWeight: '600', fontFamily: 'BerkshireSwash' }}>Laundry Made Easy</Text>
                                </View>

                                <View style={{ width: wp('4.6%'), height: hp('2.2%'), backgroundColor: 'white', justifyContent: 'center', borderRadius: 12 }}>
                                    <Image style={{ alignSelf: 'center', resizeMode: 'contain', width: wp('10%'), height: hp('2%') }} source={require('../assets/Image/arrowicon.png')} />
                                </View>
                                <View style={{ marginLeft: 26 }}>
                                    <Image style={{ width: wp('31%'), height: hp('20%'), resizeMode: 'contain' }} source={require('../assets/Image/Laundry.png')} />
                                </View>

                            </View>


                        </LinearGradient>
                    </View>


                    <View style={{ marginTop: 20, flexDirection: 'row', gap: 20, justifyContent: 'center', alignItems: 'center' }}>
                        <LinearGradient
                            colors={['rgba(84,38,213,1)', 'rgba(147,116,237,1)']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }} style={{ width: wp('45%'), height: hp('20%'), borderRadius: 16 }}
                        >
                            <View style={{ flex: 1, marginTop: 10, justifyContent: 'flex-start', flexDirection: 'column', gap: 5 }}>
                                <View style={{ gap: 5, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10 }}>
                                    <Pressable style={{ backgroundColor: '#ffffff', borderRadius: 4, width: wp('21%') }}>
                                        <Text style={{ color: 'black', fontWeight: '500', padding: 2, textAlign: 'center', fontSize: 11 }}>UPTO 50% OFF</Text>
                                    </Pressable>
                                    <View style={{ width: wp('4.6%'), height: hp('2.2%'), backgroundColor: 'white', justifyContent: 'center', borderRadius: 12 }}>

                                        <Image style={{ alignSelf: 'center', resizeMode: 'contain', width: wp('10%'), height: hp('2%') }} source={require('../assets/Image/arrowicon.png')} />
                                    </View>
                                </View>
                                <View>
                                    <Text style={{ width: wp('40%'), color: 'white', fontSize: 18, fontWeight: '600', fontFamily: 'BerkshireSwash', marginLeft: 10 }}>Turn Your House into a House</Text>
                                    <Image style={{ width: wp('31%'), height: hp('12%'), resizeMode: 'contain' }} source={require('../assets/Image/Odonil.png')} />

                                </View>
                            </View>


                        </LinearGradient>
                        <LinearGradient
                            colors={['rgba(84,38,213,1)', 'rgba(147,116,237,1)']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }} style={{ width: wp('45%'), height: hp('20%'), borderRadius: 16 }}
                        >
                            <View style={{ flex: 1, marginTop: 10, justifyContent: 'flex-start', flexDirection: 'column', gap: 5 }}>
                                <View style={{ gap: 5, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10 }}>
                                    <Pressable style={{ backgroundColor: '#ffffff', borderRadius: 4, width: wp('21%') }}>
                                        <Text style={{ color: 'black', fontWeight: '500', padding: 2, textAlign: 'center', fontSize: 11 }}>UPTO 50% OFF</Text>
                                    </Pressable>
                                    <View style={{ width: wp('4.6%'), height: hp('2.2%'), backgroundColor: 'white', justifyContent: 'center', borderRadius: 12 }}>

                                        <Image style={{ alignSelf: 'center', resizeMode: 'contain', width: wp('10%'), height: hp('2%') }} source={require('../assets/Image/arrowicon.png')} />
                                    </View>
                                </View>
                                <View>
                                    <Text style={{ width: wp('30%'), color: 'white', fontSize: 18, fontWeight: '600', fontFamily: 'BerkshireSwash', marginLeft: 10 }}>Clean House, Happy Home</Text>
                                    <Image style={{ width: wp('%'), height: hp('12%'), resizeMode: 'contain' }} source={require('../assets/Image/Cleaner.png')} />

                                </View>
                            </View>


                        </LinearGradient>
                    </View>

                </View>


            </ScrollView>
        </SafeAreaView >

    );
}

const Brands = (item) => {

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



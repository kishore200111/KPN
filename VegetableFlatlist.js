import React, { FlatList } from 'react-native';
import {View,Text,TextInput} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'react-native-svg';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Vegetables=()=>{
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

    
    return(
        <SafeAreaView style={{width: wp('100%'), height: hp('10%')}}>
            <View>
                <FlatList
                 data={Data}
                 renderItem={Vegetable}
                 keyExtractor={item=>item.id}
                 horizontal={true}
                 showsHorizontalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    );
}

const Vegetable=(item)=>{
    console.log("items.....>",item.title)
    return(
        <View style={{width: wp('20%'),height:hp('20%'),backgroundColor:'white', marginLeft: 10, justifyContent: 'center', alignItems: 'center'}}>
           <View>
           <Image  styel={{width:wp('4%'),height:hp('5%')}}source={item.image}/>
           </View>
           <View>
           <Text>{item.item.title}</Text>
           </View>
        </View>
    )
}

export default  Vegetables;
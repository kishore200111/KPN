import React, { FlatList } from 'react-native';
import { View, Text, TextInput, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Vegetables = () => {
    const Data = [
        {
            id: 1,
            image: require('./assets/Image/cauliflower.webp'),
            title: 'cauliflower',
        },
        {
            id: 2,
            image: require('./assets/Image/ginger.webp'),
            title: 'Ginger',
        },
        {
            id: 3,
            image: require('./assets/Image/potato.webp'),
            title: 'Potato',
        },
        {
            id: 4,
            image: require('./assets/Image/ladysfinger.webp'),
            title: 'Ladies finger',
        },
        {
            id: 5,
            image: require('./assets/Image/cocunut.png'),
            title: 'Fresh Coconut',
        },
        {
            id: 6,
            image: require('./assets/Image/bigonion.jpg'),
            title: 'Onion Bellary',
        },
        {
            id: 7,
            image: require('./assets/Image/greenchilli.png'),
            title: 'Green Chilli',
        },
        {
            id: 8,
            image: require('./assets/Image/corianderleaves.webp'),
            title: 'Coriander Leaves',
        },
        {
            id: 9,
            image: require('./assets/Image/smallonion.jpg'),
            title: 'Small onion',
        },
        {
            id: 10,
            image: require('./assets/Image/garlic.png'),
            title: 'Garlic',
        },

    ]


    return (
        <SafeAreaView style={{ width: wp('100%'), height: hp('15%'), marginTop: 10 }}>
            <FlatList
                data={Data}
                renderItem={Vegetable}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />


        </SafeAreaView>
    );
}

const Vegetable = (item) => {
    console.log("items.....>", item.title)
    return (
        <View style={{ width: wp('25%'), height: hp('18%'), justifyContent: 'flex-start', alignItems: 'center', marginLeft: 5 }}>
            <View style={{ width: wp('22%'), height: hp('8%'), backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 14, borderWidth: 1, borderColor: 'lightgrey', marginTop: 10, marginRight: 2 }}>
                <Image style={{ width: wp('14%'), height: hp('8%'), resizeMode: 'contain', alignSelf: 'center' }} source={item.item.image} />
            </View>
            <View style={{ backgroundColor: 'yellow', position: 'absolute', width: wp('5%'), height: hp('2.3%'), borderRadius: 18, borderColor: 'goldenrod', borderWidth: 1, top: 3, right: -2 }}>
                <Text style={{ textAlign: 'center', fontWeight: '400', marginBottom: 4 }}>+</Text>
            </View>
            <Text style={{ textAlign: 'center', marginLeft: 10 }} >{item.item.title}</Text>
        </View>
    )
}



export default Vegetables;
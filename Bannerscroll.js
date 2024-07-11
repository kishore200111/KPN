// import React, { useRef, useState, useEffect } from 'react';
// import { View, Text, StyleSheet, Image } from 'react-native';
// import Carousel from 'react-native-snap-carousel';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// const images = [
//     require('./assets/Image/banner1.webp'),
//     require('./assets/Image/banner2.webp'),
//     require('./assets/Image/banner3.webp'),
//     require('./assets/Image/banner4.webp'),
// ];

// const Banner = () => {
//     const carouselRef = useRef(null);
//     const [activeIndex, setActiveIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
//             carouselRef.current.snapToNext();
//         }, 3000); // Change image every 3 seconds

//         return () => clearInterval(interval);
//     }, []);

//     const renderItem = ({ item }) => (
//         <View style={styles.slide}>
//             <Image source={item} style={styles.image} />
//         </View>
//     );

//     return (
//         <View style={styles.container}>
//             <Carousel
//                 ref={carouselRef}
//                 data={images}
//                 renderItem={renderItem}
//                 sliderWidth={wp('100%')}
//                 itemWidth={wp('80%')}
//                 onSnapToItem={(index) => setActiveIndex(index)}
//             />
//             <Text style={styles.pagination}>{`${activeIndex + 1} / ${images.length}`}</Text>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     slide: {
//         width: wp('80%'),
//         height: hp('20%'),
//     },
//     image: {
//         width: '100%',
//         height: '100%',
//         resizeMode: 'cover',
//     },
//     pagination: {
//         position: 'absolute',
//         bottom: 10,
//         right: 10,
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         color: 'white',
//         paddingHorizontal: 10,
//         paddingVertical: 5,
//         borderRadius: 15,
//     },
// });

// export default Banner;


import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SliderBox } from "react-native-image-slider-box";

const images = [
    require('./assets/Image/banner1.png'), 
    require('./assets/Image/banner2.png'),
    require('./assets/Image/banner3.png'),
    require('./assets/Image/banner4.png'),
];

const Banner = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
                const interval = setInterval(() => {
                    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
                }, 3000); // Change image every 3 seconds
        
                return () => clearInterval(interval);
            }, []);
    
return(
    <View style={{width:wp('80%'), marginLeft:40,justifyContent:'center '}}>
         <SliderBox
          images={images}
          autoplay
          circleLoop
          sliderBoxHeight={130}
          parentWidth={wp('80%')}
          //resizeMethod='resize'
        resizeMode="contain"
        ImageComponentStyle={{borderRadius:12}}
        ></SliderBox>
        <Text style={styles.pagination}>{`${activeIndex + 1} / ${images.length}`}</Text>
    </View>
   
)    
}

const styles=StyleSheet.create({
    pagination: {
                position: 'absolute',
                bottom: 10,
                right: 1,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                paddingHorizontal: 4,
                paddingVertical: 2,
                borderRadius: 10,
                textAlign:'center'
            },
})

export default Banner;



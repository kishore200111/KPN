import { React, useState } from 'react';
import {
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  Button,
  StatusBar,
  Pressable,
  StyleSheet,
  Image
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SliderBox } from "react-native-image-slider-box";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './LoginScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Products from './Product';
import Loading from './LoadingScreen';
import PropTypes from 'prop-types';
import FreshItems from './Fresh';
import LinearGradient from 'react-native-linear-gradient';
import HotDeals from './Hotdeals';
import GroceriesScreen from './Groceries';
import ReordersScreen from './Reorders';


const Tab = createBottomTabNavigator();

function HomeScreen() {
  const navigation = useNavigation();
  const [images, setImage] = useState([
    require('./assets/Image/home1.jpg'),
    require('./assets/Image/home2.jpg'),
    require('./assets/Image/home3.jpg'),
  ]
  )
  return (
    <SafeAreaView style={{ height: hp('100%'), width: wp('100%'), flexDirection: 'column', backgroundColor: 'seagreen' }}>
      <StatusBar backgroundColor={'seagreen'}></StatusBar>
      <View style={{ width: wp('100%'), height: hp('78%'), position: 'relative' }}>
        <SliderBox
          images={images}
          autoplay
          circleLoop
          sliderBoxHeight={700}
          dotColor="gold"
          inactiveDotColor="gainsboro"
        ></SliderBox>
        <View style={{ position: 'absolute', bottom: 18, left: 16 }}>
          <Text style={{ color: 'white', fontSize: 26, textAlign: 'center', fontWeight: 600, justifyContent: 'center', alignContent: 'center' }}>Treat Yourself to the finest, freshly sourced products on the market</Text>
        </View>
      </View>
      <View style={{ width: wp('100%'), height: hp('100%'), padding: 10 }}>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.text}>Get Started</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
// const PaginationDot = ({ style }) => (
//   <View style={style}>
//     {/* Custom dot rendering */}
//   </View>
// );

// PaginationDot.propTypes = {
//   style: PropTypes.object,
// };

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const renderHeaderBackground = () => {
  return (
    <LinearGradient
      colors={['rgba(239,135,190,1)', 'rgba(255,206,230,1)']}
      style={{ flex: 1 }}
      start={{ x: 1, y: 1 }}
      end={{ x: 1, y: 0 }}
    />);
};
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Product" component={Products} options={{
        headerShown: false, tabBarLabelStyle: { color: 'black', fontSize: 12, fontWeight: '500' }, tabBarLabel: "Home", headerTitleAlign: 'center', headerShadowVisible: true, tabBarIcon: () => (
          <View style={{ backgroundColor: 'palegoldenrod', width: wp('10%'), height: hp('3%'), borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: wp('4.3%'), height: hp('2%') }} source={require('./assets/Image/hut.png')} />
          </View>
        )
      }} />
      <Tab.Screen name="Fresh" component={FreshItems} options={{
        headerShown: false, tabBarLabelStyle: { color: 'black', fontSize: 12, fontWeight: '500' }, tabBarLabel: "Fresh", headerTitleAlign: 'center', headerShadowVisible: true, tabBarIcon: () => (
          <View style={{ backgroundColor: 'palegoldenrod', width: wp('10%'), height: hp('3%'), borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: wp('4.3%'), height: hp('2%') }} source={require('./assets/Image/vegetable.png')} />
          </View>
        )
      }} />
      <Tab.Screen name="Hot Deals" component={HotDeals} options={{
        headerShown: false, tabBarLabelStyle: { color: 'black', fontSize: 12, fontWeight: '500' }, tabBarLabel: "Hot Deals", headerTitleAlign: 'center', headerShadowVisible: true, tabBarIcon: () => (
          <View style={{ backgroundColor: 'palegoldenrod', width: wp('10%'), height: hp('3%'), borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: wp('4.3%'), height: hp('2%') }} source={require('./assets/Image/hot-deal.png')} />
          </View>
        )
      }} />
      <Tab.Screen name="Groceries" component={GroceriesScreen} options={{
        headerShown: false, tabBarLabelStyle: { color: 'black', fontSize: 12, fontWeight: '500' }, tabBarLabel: "Groceries", headerTitleAlign: 'center', headerShadowVisible: true, tabBarIcon: () => (
          <View style={{ backgroundColor: 'palegoldenrod', width: wp('10%'), height: hp('3%'), borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: wp('4.3%'), height: hp('2%') }} source={require('./assets/Image/groceries.png')} />
          </View>
        )
      }} />
      <Tab.Screen name="Reorders" component={ReordersScreen} options={{
        headerShown: false, tabBarLabelStyle: { color: 'black', fontSize: 12, fontWeight: '500' }, tabBarLabel: "Reorder", headerTitleAlign: 'center', headerShadowVisible: true, tabBarIcon: () => (
          <View style={{ backgroundColor: 'palegoldenrod', width: wp('10%'), height: hp('3%'), borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: wp('4.3%'), height: hp('2%') }} source={require('./assets/Image/cycle.png')} />
          </View>
        )
      }} />
      {/* <Tab.Screen name="Fresh"component={FreshItems} options={{headerShown:false,}}/> */}
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
}

function Main() {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name='tab' component={MyTabs} />
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

  },
  tabicon: {
    fontWeight: '300'
  }
})


export default Main;
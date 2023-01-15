import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, TouchableWithoutFeedback,Button,String} from 'react-native';

import Tile from '../components/food';

const homeScreen = ({ navigation }) => {
    return(
    <ScrollView style={styles.container}>
      <View style={styles.flex}>
        <SafeAreaView>
          <Text style={styles.header}>Ali Snackbar</Text>
        </SafeAreaView>
        </View>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Winkelwagen')}>
            <View style= {styles.winkelwagen}>
            <Image style={styles.shoppingcart} source={require('../assets/shoppingcart.png')}/>
            </View>
        </TouchableWithoutFeedback>
        <View> 
            <Tile title = "kapsalon kebab" price = "8"/>
            <View><Text onPress={() => navigation.navigate('Detail')} style= {styles.bekijk}>Bekijk kapsalon kebab!</Text></View> 
          <Tile title = "kapsalon kip " price = "8"/>
          
          <Tile title = "kapsalon pita" price = "8"/>
          <Tile title = "kapsalon mix" price = "10"/>
          <Tile title = "lookbroodjes" price = "5"/>
        </View>

        <TouchableWithoutFeedback onPress={() => navigation.navigate('Ali')}>
        <View>
            <Text style= {styles.text}>meer eten?</Text>
        </View>
        </TouchableWithoutFeedback>

        <StatusBar style="auto"/>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
 
    container: {
      flex: 1,
      backgroundColor: '#000',
      padding: 16,
    },
    flex:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center'
    },
    header:{
      fontSize: 25,
      fontWeight: '800',
      color: '#fff'
    },
    shoppingcart:{
      flex: 1,
      marginTop: 10,
      marginRight: 5,
      height: 80,
      width: 80,
    },
    winkelwagen:{
        marginLeft:300,
    },

    text:{
        flex: 1,
        textAlign: 'center',
        color: '#fff',
        backgroundColor: 'red',
        marginTop: 24,
        padding: 16,
    },

    bekijk:{
        color:'red',
        marginBottom: 16,
    }
  });

  export default homeScreen;

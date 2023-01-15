import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, TouchableWithoutFeedback,} from 'react-native';

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
          <TouchableWithoutFeedback><Tile onPress={() => navigation.navigate('Detail')} title = "kapsalon kebab" price = "8"/></TouchableWithoutFeedback>
          <Tile title = "kapsalon kip " price = "8"/>
          <Tile title = "kapsalon pita" price = "8"/>
          <Tile title = "kapsalon mix" price = "10"/>
          <Tile title = "lookbroodjes" price = "5"/>
        </View>
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
        paddingLeft: 300,
    },
  });

  export default homeScreen;

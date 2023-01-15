import { ScrollView, StyleSheet, Text, View,Image, TouchableWithoutFeedback, Pressable  } from 'react-native';
import React, { useState } from 'react';



const Detail = ({ navigation }) => {

    const [counter, setCounter] = useState(0);
        
    const increase = () => {
        setCounter((currentCounter) => currentCounter + 1);
        console.log("increase");
    }

    return(
        <ScrollView style = {styles.container}>
            <View>
            <Text style = {styles.title}>kapsalon kebab</Text>
            
            <View style= {styles.winkelwagen}>
            <Text style = {styles.one}>{counter}</Text>
            <Pressable onPress= {increase} >
            <Image style={styles.shoppingcart} source={require('../assets/shoppingcart.png')}/>
            </Pressable>
            </View>

            <Image style={styles.image} source={require('../assets/kebab.jpg')}/>
            <Text style = {styles.info}> frieten, kebab, groenten, kaas, saus naar keuze</Text>
            <View style={styles.flex}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
                <Text style = {styles.button}>❗️ Go back to menu ❗️</Text>
            </TouchableWithoutFeedback>
        </View>
        </View>
        </ScrollView>
    ); 
}

const styles = StyleSheet.create({

    container:{
        backgroundColor: '#000',
    },

    title:{
        marginTop: 40,
        color: '#fff',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '800',

    },

    image:{
        width: 400,
        height:200,
    },

    info:{
        color: '#fff',
        marginTop: 16,
    },

    button:{
        color: 'blue',
        textAlign: 'center',
        marginTop: 48,
      },

      shoppingcart:{
        flex: 1,
        marginTop: 0,
        marginRight: 5,
        height: 80,
        width: 80,
      },
      winkelwagen:{
          marginLeft:300,
      },
      one:{
        backgroundColor:'Red',
        color: '#fff',
        textAlign: 'right',
        marginRight: 32,
        marginTop: 16,
        marginBottom: -28,
      }

});



export default Detail;
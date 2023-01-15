import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

const Winkelwagen = ({ navigation }) => {
return(
    <View style= {styles.container}>
        <View style={styles.flex}>
            <Text style={styles.header} >Winkelwagen</Text>
        </View>
        <View style= {styles.text}>
            <Text style= {styles.text}>please order some good food...</Text>
        </View>
        <View style={styles.flex}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
                <Text style = {styles.button}>❗️ Go back to menu ❗️</Text>
            </TouchableWithoutFeedback>
        </View>
        </View>
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

      button:{
        color: 'blue',
      },

      text:{
        color: '#fff',
        flex: 1,
        paddingLeft: 40,
        flexDirection: 'row',
        
      },

      

});

export default Winkelwagen;
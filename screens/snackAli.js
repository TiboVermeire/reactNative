import React from "react";
import { StyleSheet, Text, View, Linking, Button, ScrollView,} from 'react-native';

const Ali = ({ navigation }) => {
    return(
        <ScrollView style={styles.container}>
        <View>
            <Text style = {styles.Text}>Zit je nog niet vol genoeg?</Text>
        </View>

        <View style = {styles.Button}>
        <Button style = {styles.title} title="neem een kijkje op de website." onPress={() => Linking.openURL( 'https://www.snackali.be/')}/>
        </View>
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#000',
    },

    Text:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '800',
        fontSize: 25,
        margin: 32,
    },

    Button:{
        backgroundColor: 'red',
        textAlign:'center',
        padding: 16,
        margin: 8,
    },
    title:{
        color: '#000',
    }
});


export default Ali;

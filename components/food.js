import { StyleSheet,Text, View, TouchableOpacity } from "react-native";
import React , {useState} from "react";

const Tile = props => {
    return(
        <TouchableOpacity style={styles.tile} activeOpacity={0.7}>
        <View>
          <Text style={styles.tileHeader}>{props.title}</Text>
          <Text style={styles.tileText}>€ {props.price}</Text>
        </View>
      </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    tile:{
    flexBasis: '46%',//200
    borderRadius: 5,
    borderColor: '#fff',
    borderWidth: 1,
    borderStyle: 'solid',
    marginVertical: '2%',
    padding: 10,
    },

    tileHeader: {
      color: '#fff',
      fontSize: 22,
      fontWeight: '600',
    },

    tileText: {
      color: 'red',
      fontSize: 16,
      fontWeight: '500',
    }
});

export default Tile;
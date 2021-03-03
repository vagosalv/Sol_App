import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, Button, TouchableOpacity, Component, } from 'react-native';
import { planets } from '../PlanetList/planets';



const mars = require('../img/mars.png');
const neptune = require('../img/neptune.png')


const InfoScreen = ({ navigation, route }) => {
    const { planet } = route.params;
    return (
        <View>
            <Text>Περιγραφή</Text>
            
        </View>
    )
}

export default InfoScreen;

const styles = StyleSheet.create ({
    logo: {
        width: 50,
        height: 50,
    },

    listItems: {
        margin: 10,
        padding: 10,
        width: '80%',
        flex: 1,
        alignSelf: 'center',
    },
});
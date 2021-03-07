import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, Button, TouchableOpacity, Component, StatusBar, ScrollView,} from 'react-native';
import { planets } from '../PlanetList/planets';




const mars = require('../img/mars.png');
const neptune = require('../img/neptune.png');
const earth = require('../img/earth.png');

//esvhsa to const item

const InfoScreen = ({ navigation, route }) => {
    const { planet } = route.params;
    const getImage = (title) => {
        switch (title) {
            case 'Άρης':
                return mars;
            case 'Ποσειδώνας':
                return neptune;
            case 'Γη':
                return earth;
        }
    };

    return (
        <View>
            <Text>Πλανήτες</Text>
            <Text>{planet.title}</Text>
            <Text>{planet.description}</Text>
        </View>
    )
}




const styles = StyleSheet.create ({
    logo: {
        width: 50,
        height: 50,
    },

    listItems: {
        width: '80%',
        height: '80%',
        marginTop: 25,
        backgroundColor: 'lightgrey',
        borderRadius: 10,
        left: 20,
        right: 20,
    },

    container: {
        flex: 1,
        flexDirection: 'column',
        marginTop: StatusBar.currentHeight || 0,
    },
});


export default InfoScreen;
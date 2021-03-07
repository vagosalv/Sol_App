import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, Button, TouchableOpacity, Component, StatusBar, ScrollView,} from 'react-native';


const mars = require('../img/mars.png');
const neptune = require('../img/neptune.png');
const earth = require('../img/earth.png');


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
        <View style={styles.container}>
            <View style={styles.listItems}>
                <View>
                    <Text style={styles.title}>Περιγραφή</Text>
                    <Text style={styles.subTitle}> {planet.description} </Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create ({

    container: {
        flex: 1,
        flexDirection: 'column',
    },
    listItems: {
        width: '100%',
        height: '80%',
        marginTop: 25,
        margin: 10,
        padding: 10,
    },
    title: {
        fontSize: 20,
        padding: 5,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    subTitle: {
        padding: 10,
        left: 10,
        fontSize: 15,
    },
});


export default InfoScreen;
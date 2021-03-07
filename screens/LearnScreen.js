import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, Button, TouchableOpacity, Component, StatusBar, ScrollView,} from 'react-native';
import { planets } from '../PlanetList/planets';


const mars = require('../img/mars.png');
const neptune = require('../img/neptune.png');
const earth = require('../img/earth.png');

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

const Item = ({ title, location}) => (
    <View style={styles.container}>
        <View style={styles.listItems}>
            <Image source={getImage(title)} style={styles.logo} ></Image>
            <Text style={styles.title}>Όνομα Πλανήτη: {title}</Text>
            <Text style={styles.title}>Τοποθεσία: {location}</Text>
        </View>
    </View>

  );


const LearnScreen = ({ navigation, route }) => {
    return (
        <View>
            <Text style={styles.category}>Πλανήτες</Text>
            <FlatList
                data={planets}
                renderItem= {({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Info', {planet: item})}>
                        <Item title={item.title} location={item.location}></Item>
                    </TouchableOpacity>
                )
                }
                keyExtractor={item => item.id}> 
            </FlatList>
        </View>
    )
}


const styles = StyleSheet.create ({
    logo: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    listItems: {
        width: '80%',
        height: '80%',
        marginTop: 15,
        backgroundColor: 'lightgrey',
        borderRadius: 10,
        left: 20,
        right: 20,
        padding: 15,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    category: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15,
        left: 60,
        bottom: 30,
        letterSpacing: 1,
    },
});


export default LearnScreen;
import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, Button, TouchableOpacity, Component, StatusBar, ScrollView,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { planets } from '../PlanetList/planets';
import InfoScreen from './InfoScreen';
import ShowMoreText from 'react-show-more-text';



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

const Item = ({ title, location, description, navigation }) => (
    <View style={styles.container}>
        <View style={styles.listItems}>
            <Image source={getImage(title)} style={styles.logo} ></Image>
            <Text>Όνομα Πλανήτη: {title}</Text>
            <Text>Τοποθεσία: {location}</Text>
        </View>
    </View>
    //<Text>Περιγραφή:  {description}</Text>
  );


const LearnScreen = ({ navigation, route }) => {
    //const renderItem = ({ item }) => (
        //<Item title={item.title} location={item.location} image={item.image} description={item.description} />
     // );
    return (
        <View>
            <Text>Πλανήτες</Text>
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


export default LearnScreen;
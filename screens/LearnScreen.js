import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, Button, TouchableOpacity, Component, } from 'react-native';
import { planets } from '../PlanetList/planets';
import ShowMoreText from 'react-show-more-text';



const mars = require('../img/mars.png');
const neptune = require('../img/neptune.png')

const getImage = (title) => {
    switch (title) {
        case 'Άρης':
            return mars;
        case 'Ποσειδώνας':
            return neptune;
    }
};

const Item = ({ title, location, description, navigation }) => (
    <View>
        <View style={styles.listItems}>
            <Image source={getImage(title)} style={styles.logo} ></Image>
        </View>
        <Text>Όνομα Πλανήτη: {title}</Text>
        <Text>Τοποθεσία: {location}</Text>
        <Text>Περιγραφή</Text>
        <Text> {description}</Text>
    </View>
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
                renderItem={({ item }) => (
                    <Item title={item.title} location={item.location} image={item.image} description={item.description} />
                  )}
                keyExtractor={item => item.id}
            />
            <Button color= 'black' title = 'Info swsto' onPress={() => navigation.navigate('Info', {planet: item}) }></Button>
        </View>
    )
}




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


export default LearnScreen;
import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import { planets } from '../PlanetList/planets';


const mars = require('../img/mars.png');
const neptune = require('../img/neptune.png');
const earth = require('../img/earth.png');
const mercury = require('../img/mercury.png');
const venus = require('../img/venus.png');
const jupiter = require('../img/jupiter.png');
const saturn = require('../img/saturn.png');
const uranus = require('../img/uranus.png');


const getImage = (title) => {
    switch (title) {
        case 'Άρης':
            return mars;
        case 'Ποσειδώνας':
            return neptune;
        case 'Γη':
            return earth;
        case 'Ερμής':
            return mercury;
        case 'Αφροδίτη':
            return venus;
        case 'Δίας':
            return jupiter;
        case 'Κρόνος':
            return saturn;
        case 'Ουρανός':
            return uranus;
    }
};

const Item = ({ title, location}) => (
    <ScrollView style={styles.container}>
        <View style={styles.listItems}>
            <Image source={getImage(title)} style={styles.logo} ></Image>
            <Text style={styles.title}>Όνομα Πλανήτη: {title}</Text>
            <Text style={styles.title}>Τοποθεσία: {location}</Text>
        </View>
    </ScrollView>

  );


const LearnScreen = ({ navigation, route }) => {
    return (
        <ImageBackground source={require('../img/spaceman.png')} style={styles.image} resizeMode= "cover">
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
        </ImageBackground>
    )
}


const styles = StyleSheet.create ({
    logo: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    listItems: {
        width: '90%',
        marginTop: 15,
        backgroundColor: 'lightgrey',
        borderRadius: 20,
        left: 20,
        right: 20,
        padding: 15,
        opacity: 0.9,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
    },
    category: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        textDecorationLine: 'underline',
        color: 'white',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15,
        left: 60,
        bottom: 30,
        letterSpacing: 1,
    },
    image: {
        flex: 1,
      },
});


export default LearnScreen;
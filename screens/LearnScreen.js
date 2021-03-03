import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { planets } from '../PlanetList/planets';
const mars = require('../img/mars.png');

const getImage = (title) => {
    switch (title) {
        case 'mars':
            return mars;
    }
};

const Item = ({ title, image, location }) => (
    <View>
        <View style={styles.listItems}>
            <Image source={getImage(title)} style={styles.logo} ></Image>
        </View>
        <Text>Planet Name: {title}</Text>
        <Text>Location: {location}</Text>
    </View>
  );


const LearnScreen = ({ navigation }) => {

    const renderItem = ({ item }) => (
        <Item title={item.title} location={item.location} image={item.image} />
      );
    


    return (
        <View>
            <Text>Lista apo planhtes</Text>
            <FlatList
                data={planets}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}


export default LearnScreen;

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
import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Button, Linking, } from 'react-native';

const NewsScreen = ({navigation, route}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Διαστημικά νέα</Text>
            <View style={styles.news}>
                <Text onPress={() => Linking.openURL('https://www.nasa.gov/')}>Nasa Site</Text>
            </View>
            <View style={styles.buttons}>
                <Button color='black'  title='Back' onPress={() => navigation.goBack()}></Button>
            </View>
        </View>
    );
};


export default NewsScreen;


// h css 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginVertical: 8,
    },

    title: {
        flex: 0.05,
        textAlign: 'center',
        fontSize: 22,
        borderBottomColor: '#737373',
        borderBottomWidth: 1,
    },

    buttons: {
        flexDirection: 'column',
        marginHorizontal: 100,
        marginVertical: 8,
        color: 'red',
    },

    news: {
        flexDirection: 'column',
        marginHorizontal: 165,
        marginVertical: 8,
    },
});
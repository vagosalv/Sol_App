import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Button, } from 'react-native';

//h arxikh selida ths efarmoghs
const HomeScreen = ({ navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Menu</Text>
            <View style={styles.buttons}>
                <Button title="Διαστημικα Νεα" color="black" onPress={() => navigation.navigate('News')}></Button>
            </View>
            <View style={styles.buttons}>
                <Button title="Γνωση" color="black"></Button>
            </View>
            <View style={styles.buttons}>
                <Button title="Κουιζ" color="black"></Button>
            </View>
        </View>
    );
};


export default HomeScreen;

// h css 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginVertical: 8,
    },

    title: {
        textAlign: 'center',
        fontSize: 22,
    },

    buttons: {
        flexDirection: 'column',
        marginHorizontal: 100,
        marginVertical: 8,
        color: 'red',
    },
});
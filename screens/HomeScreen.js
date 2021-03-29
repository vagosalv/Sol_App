import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, } from 'react-native';


//h arxikh selida ths efarmoghs
const HomeScreen = ({ navigation}) => {
    return (
        <ImageBackground source={require('../img/rock1.png')} style={styles.image} resizeMode= "cover">
        <View style={styles.container}>
            <View style={styles.buttons}>
                <Button title="Διαστημικα Νεα" color="black" onPress={() => navigation.navigate('News')}></Button>
            </View>
            <View style={styles.buttons}>
                <Button title="Γνωση" color="black" onPress={() => navigation.navigate('Learn')}></Button>
            </View>
            <View style={styles.buttons}>
                <Button title="Κουιζ" color="black" onPress={() => navigation.navigate('Quiz')}></Button>
            </View>
        </View>
        </ImageBackground>
    );
};


export default HomeScreen;

// h css 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        padding: 10,
        marginTop: 10,
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
    },

    image: {
        flex: 1,
        //aspectRatio: 1.8,
        //width: 626,
        //height: 347,
      },
});
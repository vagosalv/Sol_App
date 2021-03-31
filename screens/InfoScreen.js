import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView} from 'react-native';


const InfoScreen = ({ navigation, route }) => {
    const { planet } = route.params;
    

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={StyleSheet.absoluteFill}>
                <View style={styles.title}>
                    <Text style={styles.title}>{planet.title}</Text>
                    <Image source={{ uri: planet.picture }} style={styles.image}/>
                    <Text style={styles.title}>Περιγραφή</Text>
                    <Text style={styles.subTitle}> {planet.description} </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        textAlign: 'center',
        color: "black",
        padding: 5
    },
    subTitle: {
        padding: 10,
        left: 10,
        fontSize: 15,
    },
    image: {
        padding: 10,
        margin: 10,
        width: "90%",
        height: "30%",
    },
});


export default InfoScreen;
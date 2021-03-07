import React from 'react';
import { View, Text, StyleSheet, ScrollView, } from 'react-native';
import RNUrlPreview from 'react-native-url-preview';

const NewsScreen = ({navigation, route}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Διαστημικά νέα</Text>
            <View>
                <ScrollView>
                    <RNUrlPreview containerStyle={styles.news} imageProps={styles.image} text={"any text to be parsed , https://www.nasa.gov/press-release/nasa-spacex-invite-media-to-next-commercial-crew-launch/"}/>
                    <RNUrlPreview containerStyle={styles.news} imageProps={styles.image} text={"any text to be parsed , https://www.nasa.gov/press-release/nasa-s-perseverance-drives-on-mars-terrain-for-first-time"}/>
                    <RNUrlPreview containerStyle={styles.news} imageProps={styles.image} text={"any text to be parsed , https://spacenews.com/nasa-hikes-prices-for-commercial-iss-users/"}/>
                    <RNUrlPreview containerStyle={styles.news} imageProps={styles.image} text={"any text to be parsed , https://spacenews.com/dod-space-agency-to-award-multiple-contracts-for-up-to-150-satellites/"}/>
                    <RNUrlPreview containerStyle={styles.news} imageProps={styles.image} text={"any text to be parsed , https://spacenews.com/vega-c-a-new-generation-launcher/"}/>
                </ScrollView>
                
            </View>
            <View style={styles.buttons}>
            </View>
        </View>
    );
};

export default NewsScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 8,
        padding: 10,
        margin: 10,
    },
    title: {
        fontSize: 25,
        padding: 5,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        textAlign: 'center',
    },
    news: {
        marginTop: 15,
        backgroundColor: 'lightgrey',
        borderRadius: 20,
        width: '100%',
        height: '25%',
    },
    titleImage: {
        borderRadius: 20,
    },
    image: {
       width: 0.5,
       height: 0.5, 
       borderRadius: 50,
    },
});
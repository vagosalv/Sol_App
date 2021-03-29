import React from 'react';
import { View, Text, StyleSheet, Button, Alert, SafeAreaView } from 'react-native';
import { GreaterStencilFunc } from 'three';


//na dw kai me checkbox apo @react-native-community/checkbox


const QuizScreen = ({ navigation, route }) => {

    const showAlert = () =>{
        Alert.alert(
           'Alert','Σωστό!!', [{text: 'epomeno', onPress: () => navigation.navigate('News'), color: 'green',}]
        );
     }

    return (
        <View>
            <Text style={styles.title}>Ερώτηση 1</Text>
            <View style={styles.container}>
                <Text style={styles.title}>Μασάει η κατσίκα ταραμά;</Text>
                <SafeAreaView >
                    <View style={styles.buttons}>
                        <Button title=" Ναι" color="black" onPress={() => {alert('Λάθος, δοκίμασε ξανά!')}}></Button>
                    </View>
                    <View style={styles.buttons}>
                        <Button title="Οχι" color="black" onPress={() => {alert('Λάθος, δοκίμασε ξανά!')}}></Button>
                    </View>
                    <View style={styles.buttons}>
                        <Button title="Μερικές φορές" color='black' onPress={showAlert}></Button>
                    </View>
                </SafeAreaView >
            </View>
        </View>
    )
};


export default QuizScreen;

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        justifyContent: 'center',
        padding: 20,
        margin: 20,
    },

    title: {
        textAlign: 'center',
        fontSize: 22,
        marginTop: 20,
        marginBottom: 25,
    },

    buttons: {
        flexDirection: 'column',
        marginHorizontal: 100,
        marginVertical: 8,
    },

});
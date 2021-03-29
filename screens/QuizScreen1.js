import React from 'react';
import { View, Text, StyleSheet, Button, Alert, SafeAreaView } from 'react-native';



//na dw kai me checkbox apo @react-native-community/checkbox


const QuizScreen1 = ({ navigation, route }) => {

    const showAlert = () =>{
        Alert.alert(
           'Alert','Σωστό!! Απάντησες σωστά σε όλες τις ερωτήσεις!!!', [{text: 'Τέλος', onPress: () => navigation.navigate('Home'), color: 'green',}]
        );
     }

    return (
        <View>
            <Text style={styles.title}>Ερώτηση 2</Text>
            <View style={styles.container}>
                <Text style={styles.title}>Σε ποιόν πλανήτη βρίσκεται το "Μάτι του μάγου"; </Text>
                <SafeAreaView >
                    <View style={styles.buttons}>
                        <Button title=" Διας" color="black" onPress={() => {alert('Λάθος, δοκίμασε ξανά!')}}></Button>
                    </View>
                    <View style={styles.buttons}>
                        <Button title="Αφροδιτη" color="black" onPress={() => {alert('Λάθος, δοκίμασε ξανά!')}}></Button>
                    </View>
                    <View style={styles.buttons}>
                        <Button title="Ποσειδωνας" color='black' onPress={showAlert}></Button>
                    </View>
                </SafeAreaView >
            </View>
        </View>
    )
};


export default QuizScreen1;

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
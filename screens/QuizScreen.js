import React from 'react';
import { View, Text, StyleSheet, Button, Alert, SafeAreaView, ImageBackground } from 'react-native';



//na dw kai me checkbox apo @react-native-community/checkbox


const QuizScreen = ({ navigation, route }) => {

    const showAlert = () =>{
        Alert.alert(
           'Alert','Σωστό!!', [{text: 'Επόμενο', onPress: () => navigation.navigate('Quiz1'), color: 'green',}]
        );
     }

    return (
        <View>
            <Text style={styles.title}>Ερώτηση 1</Text>
            <View style={styles.container}>
                <Text style={styles.title}>Τι χρώμα έχει ο πλανήτης Άρης;</Text>
                <SafeAreaView >
                    <View style={styles.buttons}>
                        <Button title=" Μπλε" color="black" onPress={() => {alert('Λάθος, δοκίμασε ξανά!')}}></Button>
                    </View>
                    <View style={styles.buttons}>
                        <Button title="Πρασινο" color="black" onPress={() => {alert('Λάθος, δοκίμασε ξανά!')}}></Button>
                    </View>
                    <View style={styles.buttons}>
                        <Button title="κοκκινο" color='black' onPress={showAlert}></Button>
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
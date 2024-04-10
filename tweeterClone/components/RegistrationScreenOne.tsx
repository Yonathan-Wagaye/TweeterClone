import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";

const RegistrationScreenOne = () => 
{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    return (
        <View style={styles.container}>
            <Text style ={styles.title}>Create your account</Text>
            <TextInput
                placeholder="Name"
                value={name}
                onChangeText={setName}
                style={styles.input}
            />
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.input}     
            />
            <TouchableOpacity style={styles.nextButton}>
                <Text style={styles.nextButtonText} >Next</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        width: "80%",
         
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        
    },
    input: {
        width: "100%",
        height: 40,
        borderStartColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        padding: 10,
    },
    nextButton: {
        backgroundColor: '#000', 
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        width: '80%',
    },
    nextButtonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: "#fff",
        // Style for the text inside the Next button
    }

});


export default RegistrationScreenOne;


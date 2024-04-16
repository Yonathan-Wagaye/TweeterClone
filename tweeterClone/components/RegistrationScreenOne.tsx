import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";
import Logo from "../utils/Logo";
import { RootStackParamList } from "./types";
import { StackScreenProps } from "@react-navigation/stack";

type RegistrationScreenOneProps = StackScreenProps<RootStackParamList, 'RegistrationScreenOne'>;

const RegistrationScreenOne: React.FC<RegistrationScreenOneProps> = ({navigation}) => 
{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.stepContainer}>
                <Text style={styles.stepText}>Step 1 of 3</Text>
            </View>
            
            <Logo/>
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
            <View style={styles.dateContainer}>
                <Text style={styles.dateText}>Date Of Birth</Text>
                <Text style={styles.dateNote}>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</Text>
                <TextInput
                    placeholder="MM-DD-YYYY"
                    value={dateOfBirth}
                    onChangeText={setDateOfBirth}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    style={styles.input}     
                />
            </View>
            
            <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('RegistrationScreenTwo')}>
                <Text style={styles.nextButtonText} >Next</Text>
            </TouchableOpacity>
            
        </View>
    )
};

const styles = StyleSheet.create({
    
    container: {
        flexGrow: 1,
        justifyContent: "flex-start", // Changed from center to flex-start to align items to the top
        alignItems: "center",
        padding: 20,
        width: "100%"
         
    },
    stepContainer: {
        alignSelf: 'flex-start',
        width: '100%', 
        marginBottom: 10,
    },
    stepText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 30,
        
    },
    input: {
        width: "100%",
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        padding: 10,
    },
    dateText: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign:"left",
        marginBottom: 10,

    },
    dateNote: {
       fontSize: 11,
       marginTop: 5,
       marginBottom: 10, 
    },
    dateContainer:{
        alignSelf:'stretch',
        alignItems: 'flex-start',
        marginTop: 5,
        marginBottom: 20,
        padding: 5,

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


import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Logo from "../utils/Logo";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "./types";

type RegistrationScreenTwoProps = StackScreenProps<RootStackParamList, 'RegistrationScreenTwo'>;


const RegistrationScreenTwo: React.FC<RegistrationScreenTwoProps> = ({navigation}) => {
    const [code, setCode] = useState('');

    const handeVerification = () => {
        navigation.navigate('RegistrationScreenThree');
        console.log('Verifying');
    }

    const handleResendEmail = () => {
        console.log('Email');
    }

    return (
        <View style={styles.container}>
            <View style={styles.stepContainer}>
                <Text style={styles.stepText}>Step 2 of 3</Text>
            </View>
            
            <Logo/>
            <Text style ={styles.title}>We sent you a code</Text>
            <Text style={styles.prompt}>
                Enter it below to verify sydprescott1986@gmail.com.
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Verification Code"
                value={code}
                onChangeText={setCode}
                keyboardType="number-pad"

            />
            
        <TouchableOpacity onPress={handleResendEmail}>
            <Text style={styles.resendLink}>Didn't receive email?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handeVerification}>
            <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    
    container: {
        flexGrow: 1,
        justifyContent: "flex-start", // Changed from center to flex-start to align items to the top
        alignItems: "center",
        padding: 20,
        width: "100%"
         
    },
    prompt: {
        fontSize: 16,
        marginBottom: 20,
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
        width: '80%',
        padding: 10,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
    },
    resendLink: {
        color: '#4e8ef7',
        marginBottom: 20,
    },
    button: {
        backgroundColor: "black",
        width: '80%',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },

});

export default RegistrationScreenTwo;
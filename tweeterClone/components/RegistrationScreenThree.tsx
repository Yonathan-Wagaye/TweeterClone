import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Logo from "../utils/Logo";
import { RootStackParamList } from "./types";
import { StackScreenProps } from "@react-navigation/stack";

type RegistrationScreenThreeProps = StackScreenProps<RootStackParamList, 'RegistrationScreenThree'>;

const RegistrationScreenThree:React.FC<RegistrationScreenThreeProps> = ({navigation}) => 
{
    const [password, setPassword] = useState('');

    const handlePassword = () => {
        navigation.navigate('FinalizeRegistration');
        console.log('Password: ', password);
    }
    return (
        <View style={styles.container}>
            <View style={styles.stepContainer}>
                <Text style={styles.stepText}>Step 3 of 3</Text>
            </View>
            
            <Logo/>
            <Text style ={styles.title}>You'll need a password</Text>
            <Text style={styles.prompt}>
                Make sure it's 8 characters or more
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry

            />
            
        <TouchableOpacity style={styles.button} onPress={handlePassword}>
            <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    
    container: {
        flexGrow: 1,
        justifyContent: "flex-start", 
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

export default RegistrationScreenThree;
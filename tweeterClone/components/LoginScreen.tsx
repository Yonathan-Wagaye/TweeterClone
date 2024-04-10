import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button , TouchableOpacity, Image} from "react-native";

const LoginScreen = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Email: ', username);
        console.log('Password: ', password);
    }
    return (
        <View style={styles.container}>
            <View style = {styles.logoContainer}>
                <Image
                    source = {require('../images/logo.png')}
                    style={styles.logo}
                />
            </View>
            
            <Text style={styles.signInText}>Sign in to Twitter</Text>
            <TextInput 
                placeholder="Phone, email, or username"
                placeholderTextColor="#fff"
                onChangeText={setUsername}
                value={username}
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                placeholderTextColor="#fff"
                onChangeText={setPassword}
                value={username}
                secureTextEntry
                style={styles.input} 
            />
            <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
                <Text style={styles.signInButtonText} >Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.forgotPasswordText}>Forgot password?</Text>
            </TouchableOpacity>
            <View style={styles.signUpContainer}>
                <Text style={styles.signUpText}>Don't have an account? </Text>
                <TouchableOpacity>
                    <Text style={styles.signUpButtonText}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000', 
        width: '100%',
    },
    signInText: {
        fontSize: 24,
        color: '#fff', // White color for the text
        marginBottom: 20,
    },
    input: {
        width: '80%',
        height: 40,
        backgroundColor: '#1a1a1a', // Dark input field background
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        color: '#fff', // White color for input text
    },
    buttonGoogle: {
        marginBottom: 10,
        // Add other styles for Google button
    },
    buttonApple: {
        marginBottom: 10,
        // Add other styles for Apple button
    },
    signInButton: {
        backgroundColor: '#1DA1F2', 
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        width: '80%',
        // Add other styles for the Next button
    },
    signInButtonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: "#fff",
        // Style for the text inside the Next button
    },
    forgotPasswordText: {
        color: '#fff', // White color for the text
        marginBottom: 20,
    },
    signUpContainer: {
        flexDirection: 'row',
    },
    signUpText: {
        color: '#fff', // White color for the text
    },
    signUpButtonText: {
        color: '#4e8ef7', // Color for the sign-up button text
    },
    orText: {
        color: '#fff', // White color for the text
        marginBottom: 10,
    },
    logoContainer: {
        position: 'absolute',
        top: 50,
        alignItems: 'center',
        width: '100%',
        padding: 20,
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    // Add other styles as needed
});
  
export default LoginScreen;
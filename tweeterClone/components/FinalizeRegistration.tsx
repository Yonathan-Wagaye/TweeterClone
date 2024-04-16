import React from "react";
import { Text, View, StyleSheet,Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "./types";

type FinalizeRegistrationProps = StackScreenProps<RootStackParamList, 'FinalizeRegistration'>;

const FinalizeRegistration: React.FC<FinalizeRegistrationProps> = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Pick a profile picture</Text>
            <Text style={styles.subHeaderText}>Have a favourite selfie? Upload it now</Text>
            <TouchableOpacity style={styles.imagePlaceholder}>
                <Image source={require('../assests/images/profile.png')} 
                       style={styles.profileImage}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')}>
                <Text style={styles.buttonText}>Skip for now</Text>
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
    headerText: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 10,
      marginTop: 150,
    },
    subHeaderText: {
      fontSize: 16,
      marginBottom: 20,
    },
    imagePlaceholder: {
      marginBottom: 20,
      borderRadius: 100, // make it circular
      width: 200, // set a fixed size for your placeholder
      height: 200,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#E1E8ED', // a light grey background
    },
    profileImage: {
      width:'100%',
      height: '100%',
      borderRadius: 300,
       // circular image
    },
    button: {
        backgroundColor: "black",
        width: '100%',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 50,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    // ... Add any additional styles you might need
  });

export default FinalizeRegistration;
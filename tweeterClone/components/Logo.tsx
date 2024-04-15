import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Logo = () => {

    return (
        <View style = {styles.logoContainer}>
                <Image
                    source = {require('../images/logo.png')}
                    style={styles.logo}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    logoContainer: {
        alignItems: 'center',
        width: '100%',
        padding: 20,
        marginTop: 30, // Instead of position: 'absolute', top: 80
    },
    logo: {
        width: 150,
        height: 130,
        marginBottom: 10,
    },
});


export default Logo;
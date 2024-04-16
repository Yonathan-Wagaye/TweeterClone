import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './components/LoginScreen'; 
import RegistrationScreenOne from './components/RegistrationScreenOne';
import { RootStackParamList } from './components/types';
import RegistrationScreenTwo from './components/RegistrationScreenTwo';
import RegistrationScreenThree from './components/RegistrationScreenThree';
import FinalizeRegistration from './components/FinalizeRegistration';


const Stack = createStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
  };

  return (

      <NavigationContainer>
        <SafeAreaView style={[styles.container, backgroundStyle]}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          
            <Stack.Navigator initialRouteName="LoginScreen">
              <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
              <Stack.Screen name="RegistrationScreenOne" component={RegistrationScreenOne}  options={{ headerShown: false }} />
              <Stack.Screen name="RegistrationScreenTwo" component={RegistrationScreenTwo} options={{headerShown: false}} />
              <Stack.Screen name="RegistrationScreenThree" component={RegistrationScreenThree} options={{headerShown: false}} />
              <Stack.Screen name="FinalizeRegistration" component={FinalizeRegistration} options={{headerShown: false}} /> 
            </Stack.Navigator>
          
        </SafeAreaView>
      </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

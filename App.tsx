/* eslint-disable react/self-closing-comp */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import DetailsScreen from './src/screens/DetailsScreen';
// import PaymentScreen from './src/screens/PaymentScreen';
import TabNavigator from './src/navigators/TabNavigator';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{animation: 'slide_from_bottom'}}></Stack.Screen>
        <Stack.Screen
          name="PaymentScreen"
          component={PaymentScreen}
          options={{animation: 'slide_from_bottom'}}></Stack.Screen> */}
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{animation: 'slide_from_bottom'}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'; // Usa Ionicons come esempio, ma puoi cambiare il set

import HomeScreen from '../View/HomeScreen';
import DetailsScreen from '../View/DetailsScreen';
import ProfileScreen from '../View/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function navigation () {
  
  return (
    <NavigationContainer>
      
      <Tab.Navigator 

        initialRouteName="Home"

        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'Details') {
              iconName = 'list-outline';
            } else if (route.name === 'Profile') {
              iconName = 'person-outline';
            }

            // Restituisce l'icona corrispondente
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >

        <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Home Page' }} />
        <Tab.Screen name="Details" component={DetailsScreen} options={{ title: 'Details Page' }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profilo' }} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
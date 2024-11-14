
import {  Text, TextInput,View, Button, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';

import styles from '../style/style.js';

import {fetchData, updateUserData} from '../viewmodel/appViewmodel.js';

export default function ProfileScreen() {
    const [user, setUser] = useState({ 
        firstName: "", 
        lastName: "", 
        cardFullName: "",
        cardNumber: "",
        cardExpireMonth: "",
        cardExpireYear: "",
        cardCVV: ""
      });
    
      useEffect(() => {
        console.log('component loaded for the first time ');
    
        fetchData(38).then((data) => {
          if (data) {
            setUser({ 
              firstName: data.firstName, 
              lastName: data.lastName, 
              cardFullName: data.cardFullName,
              cardNumber: data.cardNumber,
              cardExpireMonth: data.cardExpireMonth,
              cardExpireYear: data.cardExpireYear,
              cardCVV: data.cardCVV
            });
          }
        });
      }, []);
    
      const handleInputChange = (field, value) => {
        setUser(prevUser => ({ ...prevUser, [field]: value }))
      };
    
      const handleSave = async () => {
        try {
            await updateUserData(38, user);
            console.log("user: ", user);
            
        } catch (error) {
            console.error("Failed to update user data:", error);
        }
    };
    
    
    return (
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.label}>First Name:</Text>
          <TextInput
            style={styles.input}
            value={user.firstName}
            onChangeText={(text) => handleInputChange('firstName', text)}
          />
            
          <Text style={styles.label}>Last Name:</Text>
          <TextInput
            style={styles.input}
            value={user.lastName}
            onChangeText={(text) => handleInputChange('lastName', text)}
          />
    
              
          <Text style={styles.label}>Card Full Name:</Text>
          <TextInput
            style={styles.input}
            value={user.cardFullName}
            onChangeText={(text) => handleInputChange('cardFullName', text)}
          />
    
          <Text style={styles.label}>Card Number:</Text>
          <TextInput
            style={styles.input}
            value={user.cardNumber}
            onChangeText={(text) => handleInputChange('cardNumber', text)}
            keyboardType="numeric"
          />
    
          <Text style={styles.label}>Card Expire Month:</Text>
          <TextInput
            style={styles.input}
            value={user.cardExpireMonth}
            onChangeText={(text) => handleInputChange('cardExpireMonth', text)}
            keyboardType="numeric"
          />
    
          <Text style={styles.label}>Card Expire Year:</Text>
          <TextInput
            style={styles.input}
            value={user.cardExpireYear}
            onChangeText={(text) => handleInputChange('cardExpireYear', text)}
            keyboardType="numeric"
          />
    
          <Text style={styles.label}>Card CVV:</Text>
          <TextInput
            style={styles.input}
            value={user.cardCVV}
            onChangeText={(text) => handleInputChange('cardCVV', text)}
            keyboardType="numeric"
          />
    
    
          <Button title="Save" onPress={handleSave} />
    
          </View>
        </ScrollView>
      );
    }


  
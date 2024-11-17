import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';


import styles from '../style/styles.js';
import ProfileForm from './ProfileForm';

import { fetchData, updateUserData, retrieveSidAndUid  } from '../viewmodel/appViewmodel';

export default function ProfileScreen() {
  
  const [user, setUser] = useState({
      firstName: "",
      lastName: "",
      cardFullName: "",
      cardNumber: "",
      cardExpireMonth: 0,
      cardExpireYear: 0,
      cardCVV: ""
  });




  const [isEditing, setIsEditing] = useState(false); // Stato per gestire la modalità di modifica del profilo


  // Dati dell'utente da visualizzare nella schermata del profilo
  // ossia il nome, il cognome e il nome completo della carta
  const data = [
    { id: '1', label: 'First Name', value: user.firstName },
    { id: '2', label: 'Last Name', value: user.lastName },
    { id: '3', label: 'Card Full Name', value: user.cardFullName },
  ];

  useEffect(() => {


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



  // Funzione per gestire l'input dell'utente e aggiornare lo stato dell'utente
  const handleInputChange = (field, value) => {
    setUser(prevUser => ({ ...prevUser, [field]: value }));
  };

  // Funzione per gestire il salvataggio dei dati dell'utente aggiornati
  const handleSave = async () => {
    try {
      await updateUserData(38, user);
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to update user data:", error);
    }
  };

  return (

    // Se isEditing è true, visualizziamo il form di modifica del profilo, altrimenti visualizziamo i dati dell'utente
    // e un pulsante per passare alla modalità di modifica del profilo
    

    <View style={styles.container}>

      {isEditing ? (
        <ProfileForm user={user} onInputChange={handleInputChange} onSave={handleSave} />
      ) : (
        
        <View style={[styles.container, { justifyContent: 'flex-start' }]}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.label}>{item.label}:</Text>
              <Text style={styles.value}>{item.value}</Text>
            </View>
          )}
        />
        <TouchableOpacity
          style={styles.bottone} 
          onPress={() => setIsEditing(true)}
        >
          <Text style={styles.bottoneTesto}>Modifica Profilo</Text>
        </TouchableOpacity>
      </View>


      )}
    </View>    
  );
}

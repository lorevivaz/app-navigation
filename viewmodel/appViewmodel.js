
// appViewmodel.js è il viewmodel 
import CommunicationController from '../model/CommunicationController';

// Questa funzione effettua una richiesta GET al server per ottenere i dati dell'utente con l'uid specificato
// e restituisce i dati dell'utente se la richiesta ha successo o null altrimenti
export async function fetchData(uid) {
    try {
        return await CommunicationController.getUser(uid);
    } catch (error) {
        console.error("Error during GET request:", error);
    }
}


// Questa funzione effettua una richiesta PUT al server per aggiornare i dati dell'utente con l'uid specificato
// e restituisce i dati aggiornati se la richiesta ha successo o null altrimenti e gestisce eventuali errori
export async function updateUserData(uid, user) {
    try {

        console.log("utente è : ", user.firstName, user.lastName);

        return await CommunicationController.putUser(uid, user);

    } catch (error) {

        console.error("Error during PUT request:", error);
    }
}




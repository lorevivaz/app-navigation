import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    scrollView: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#e8f5e9', // Verde chiaro per sfondo
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffff',
        justifyContent: 'flex-start', // Allinea gli elementi nella parte superiore
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        marginVertical: 8,
        color: '#388e3c', // Verde scuro
    },
    input: {
        height: 45,
        borderColor: '#4caf50', // Verde
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 15,
        marginBottom: 15,
        fontSize: 16,
        backgroundColor: '#ffffff', // Bianco
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    bottone: {
        backgroundColor: '#ffa726', // Arancione
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 15,
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    bottoneTesto: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    value: {
        fontSize: 16,
        color: '#424242',
        marginLeft: 10,
    },

    customButton: {
        backgroundColor: '#32cd32', // verde lime per richiamare l'idea di delivery
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
        alignSelf: 'center',
    },
    customButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },

    

});
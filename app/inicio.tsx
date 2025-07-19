import React from "react";
import {View, Image, Text,StyleSheet, Dimensions, TextInput } from 'react-native';

const {width, height} = Dimensions.get('window');

export default function inicio() {

  
    return(
        <View style={styles.container}>
            <Image
            source={require('../assets/images/logoEstuda.png')}
            style={[styles.imagem, { resizeMode: 'contain' }]}
            />
        <View style={styles.campoComIcone}>
            <Text style={styles.texto}>Materiais</Text>
            <Image 
             source={require('../assets/images/material.png')}
             style={styles.iconeDentro}
            />
        </View>
        <View style={styles.campoComIcone}>
            <Text style={styles.texto}>Simulados</Text>
            <Image
            source={require('../assets/images/simulados.png')}
            style={styles.iconeDentro}
        />
        </View>
        </View>
    );
  
}
const styles = StyleSheet.create ({
    container: {
        flex: 1,                   // usa toda altura da tela
        justifyContent: 'center',  // centraliza verticalmente
        alignItems: 'center',      // centraliza horizontalmente
        backgroundColor: '#fff',
        padding: width * 0.05,
    },

    imagem: {
        width: width * 0.7,
        height: height * 0.4,
        marginBottom: height * 0.02,
    },


    campoComIcone: {
        flexDirection: 'row', //// o Ícone e o input ficam lado a lado
        alignItems: 'center',
        backgroundColor: '#FEADA6',
        borderColor: '#000', //cor da borda
        borderWidth: width * 0.001, //tamanho da borda dentro
        borderRadius: width * 0.1,
        height: height * 0.2,
        width: width * 0.8, //0.6
        paddingHorizontal: width * 0.1,
        marginBottom: height * 0.1,
        
    },

    iconeDentro: {
        width: width * 0.2,
        height: height * 0.11,
        marginRight: 10,
        marginHorizontal: width * 0.1,
    },

    texto: {
        fontSize: 24,
        color: '#000',
        fontWeight:'bold',

        
    }
   

})
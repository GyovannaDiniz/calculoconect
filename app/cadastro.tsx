import React, { useState } from 'react';
import { Button, TextInput, Text,  View, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');


export default function cadastro(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    return (
        <View style={styles.container}>
            <View style={styles.circulo}>
                <Text style={styles.titulo}>Sign Up</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Nome'//nomezinho escrito dentro do campo
                    value={nome}
                    onChangeText={setNome} //vai servir para atualizar o valor 
                />
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    value={email}
                    onChangeText={(setEmail)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Senha'
                    value={senha}
                    onChangeText={(setSenha)}
                />              
                <Button title="Sing Up" color="#ccc"  />
            <View style={styles.linhaComTexto}>
                <View style={styles.linha}/>
                <Text style={styles.ou}>OU</Text>
                <View style={styles.linha}/>
            </View>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,                   // usa toda altura da tela
        justifyContent: 'center',  // centraliza verticalmente
        alignItems: 'center',      // centraliza horizontalmente
        backgroundColor: '#fff',
        padding: width * 0.20,
    },

    circulo: {
        width: width * 0.99,
        height: height * 0.99,
        backgroundColor: '#FEADA6',
        borderRadius: (width * 0.99) / 2,
        marginTop: height * 0.40,
        padding: width * 0.20,
    },

    input: {
        height: height * 0.06,
        borderColor: '#ccc',
        backgroundColor: '#F7FAFB',
        borderWidth: 1,
        marginBottom:height * 0.03,
        paddingHorizontal: 8,
        borderRadius: 20,
    },
    
    titulo: {
        textAlign:'center',
        fontSize: width * 0.06,
        marginBottom: height * 0.02,
    },
    linhaComTexto: {
        alignItems: 'center', 
        flexDirection: 'row',
        marginVertical: height * 0.02,
        marginHorizontal: width * 0.25,
    },
      linha: {
      flex: 1,
      height: height * 0.01,
      backgroundColor: '#ccc',
    },
    ou: {
        marginHorizontal: 10,
        fontSize: 16,
        color: '#555',
    },
    
})
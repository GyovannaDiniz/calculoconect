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
                   
                <Button title="Sing Up" color="#ccc" />
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
        marginTop: height * 0.77,
        padding: width * 0.20,
    },

    input: {
        height: height * 0.06,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 8,
        borderRadius: 20,
    },
    
    titulo: {
        fontSize: width * 0.06,
        marginBottom: height * 0.02,
    },
    
})
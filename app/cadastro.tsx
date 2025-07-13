import React, { useState } from 'react';
import { Button, TextInput, Text,  View, StyleSheet } from 'react-native';


export default function cadastro(){
    const [text, setText ] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Sign Up</Text>
            <TextInput
                style={styles.input}
                placeholder='Nome'//nomezinho escrito dentro do campo
                value={text}
                onChangeText={(newText) => setText(newText)}//smp vai atualizar o texto q esta escrito na caixinha por isso desse 'novoTexto'
                />
            <TextInput
                style={styles.input}
                placeholder='Email'
                onChangeText={(newText) => setText(newText)}
                />
            <TextInput
                style={styles.input}
                placeholder='Senha'
                value={text}
                onChangeText={(newText) => setText(newText)}
                />
             <Button title="Sing Up"  />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       padding: 20,
    },

    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 8,
    },
    
    titulo: {
        fontSize: 16,
        marginBottom: 'auto',
    },
    button: {
        backgroundColor: '#ccc'
    }
})
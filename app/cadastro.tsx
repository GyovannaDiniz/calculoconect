import React, { useState } from 'react';
import { Button, TextInput, Text,  View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

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
                <TouchableOpacity style={styles.botao} onPress={() => console.log('clicado')}>
                    <Text style={styles.texto}>Sing Up</Text>
                </TouchableOpacity>
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

    titulo: {
        textAlign:'center',
        fontSize: width * 0.06,
        marginBottom: height * 0.02,
        
    },

    input: {
        height: height * 0.06,
        borderColor: '#ccc',
        backgroundColor: '#F7FAFB',
        borderWidth: width * 0.001,
        marginBottom:height * 0.03,
        paddingHorizontal: width * 0.1,
        borderRadius: width * 0.10,
    },

    botao: {
        backgroundColor:'#FAD0C4',
        padding: 10,
        borderRadius:  height * 0.5,
        borderWidth: width * 0.001,
        borderColor:'#C1C1C1',
        marginHorizontal: width * 0.05,
        alignItems: 'center',
        width: width * 0.50,
    },
    texto: {
        color:'#000',
        fontSize: 16,
        fontWeight:'bold',
    },
    linhaComTexto: {
        alignItems: 'center', 
        flexDirection: 'row',
        marginVertical: height * 0.02,
        marginHorizontal: width * 0.06,
    },
      linha: {
      height: height * 0.002,
      width: width * 0.2,
      backgroundColor: '#000',
      marginVertical: height * 0.02,
      
    },
    ou: {
        marginHorizontal: width * 0.02,
        fontSize: 14,
        color: '#000',
    },
    
})


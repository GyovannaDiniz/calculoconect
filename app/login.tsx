import React, {useState} from "react";
import {Image, View, StyleSheet, Text, Dimensions, TextInput, TouchableOpacity} from "react-native";

const {width, height } = Dimensions.get('window');

export default function login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  return(
    <View style={Styles.container}>
      <View style={Styles.circulo}>
        <Text style={Styles.titulo}>LOG IN</Text>
      <View style={Styles.campoComIcone}>
        <Image 
          source={require('../assets/images/e-mail.png')}
          style={Styles.iconeDentro}
        />
      <TextInput
        style={Styles.inputComIcone}
        placeholder="email"
        value={email}
        onChangeText={setEmail}
      />
        </View>
        <View style={Styles.campoComIcone}>
          <Image
            source={require('../assets/images/cadeado.png')}
            style={Styles.iconeDentro} 
          />
        <TextInput
          style={Styles.inputComIcone}
          placeholder="senha"
          value={senha}
          onChangeText={setSenha}
      />
        </View>
      </View>
        <TouchableOpacity style={Styles.botao} onPress={() => console.log('clicado')}>
              <Text style={Styles.texto}>Login</Text>
        </TouchableOpacity>

          <View style={Styles.linhaComTexto}>
            <View style={Styles.linha} />
            <Text style={Styles.ou}>OU</Text>
            <View style={Styles.linha} />
          </View>
    </View>
    
  );
}

const Styles = StyleSheet.create ({
    container: {
      flex: 1,
      alignItems: 'center',      // centraliza horizontalmente
      backgroundColor: '#fff',
      paddingHorizontal: width * 0.05,
      paddingTop: height * 0.6,
 //espaçamento geral da parte interna
    
    },

    circulo: {
      position: 'absolute', //posição absoluta
      top: 0, //
      width: width, 
      height: height * 0.60,
      backgroundColor:'#FEADA6',
      borderBottomLeftRadius: width, //arredondou a borda na parte esquerda
      borderBottomRightRadius: width, // arredondou a borda na parte direita
      alignItems:'center', 
      justifyContent: 'center', 
      paddingTop: height * 0.1, //epaço interno superior 
    },


    titulo: {
      textAlign:'center', 
      height: height * 0.01,
      fontSize: width * 0.08, //tam da fonte
      marginBottom: height * 0.10, //margem inferior 
      marginVertical: height * 0.010, //margem vertical
        
    },


    campoComIcone: {
      flexDirection: 'row', //// o Ícone e o input ficam lado a lado
      alignItems: 'center',
      backgroundColor: '#F7FAFB',
      borderColor: '#ccc', //cor da borda
      borderWidth: width * 0.001, //tamanho da borda dentro
      borderRadius: width * 0.1,
      height: height * 0.07,
      width: width * 0.7, //0.6
      paddingHorizontal: width * 0.04,
      marginBottom: height * 0.03,
    },

    iconeDentro: {
      width: width * 0.07,
      height: height * 0.04,
      marginRight: 10,
    },

    inputComIcone: {
      flex: 1,
      fontSize: 16,
    },

    botao: {
      backgroundColor:'#FEADA6',
      padding: 10,
      borderRadius:  height * 0.2,
      borderWidth: width * 0.001,
      borderColor:'#C1C1C1',
      marginHorizontal: width * 0.05,
      alignItems: 'center',
      width: width * 0.5,
      height: height * 0.06,
     marginTop: height * 0.03, //posição do botao      
    },

    texto: {
      color:'#000',
      fontSize: 16,
      fontWeight:'bold',
    },

    linhaComTexto: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: height * 0.02,
      marginBottom: height * 0.02,
      
    },

    linha: {
      flex: 1,
      height: height * 0.1,
      backgroundColor: '#C1C1C1',
      marginHorizontal: width * 0.15,
    },

    ou: {
      fontSize: height * 0.02,
      color: '#000',
      fontWeight: 'bold',
    },

})

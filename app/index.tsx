import React from 'react';
import { Image, View, StyleSheet, Dimensions } from 'react-native';

// Pegando largura e altura da tela
const { width, height } = Dimensions.get('window');

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
  source={require('../assets/images/logoEstuda.png')}//require serve pra colocar uma imagem que ja tem no meu projeto. caso eu queira pegar imgs de fora devo usar 'uri' busca diretamente pela URL!
  style={[styles.image, { resizeMode: 'contain' }]}
/>
      <View style={styles.circulo} />
<button>aperte!</button>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa toda a tela
    justifyContent: 'center', // centraliza verticalmente
    alignItems: 'center',     // centraliza horizontalmente
    backgroundColor: '#fff',
  },
  circulo: {
    width: width * 0.99,
    height: height * 0.99,
    backgroundColor: '#FEADA6',
    borderRadius: (width * 0.99) / 2,
    marginTop: height * 0.77,
  },
 image: {
  width: width * 0.5, //largura da img na tela
  height: height * 0.4, //altura (msm coisa da larg.)
  position: 'absolute', //posição meio que vai ser 'flutuante'
  top: height * 0.1, // ajusta a altura onde ela aparece
  left: width * 0.26, // centraliza horizontalmente
}
});

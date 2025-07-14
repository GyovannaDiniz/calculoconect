import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [idade, setIdade] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Senha:', senha);
    console.log('idade:', idade);
    // Aqui você pode colocar a navegação, autenticação, etc.
  };

  return (
    <View style={style.container}>
      <Text style={style.titulo}>LOG IN</Text>

      <TextInput
        style={style.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={style.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      
      <TextInput
      style={style.input}
      placeholder="Idade"
        secureTextEntry
        value={idade}
        onChangeText={setIdade}
/>
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    width: '100%',
    maxWidth: 300,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 12,
    marginBottom: 16,
  },
});
//https://www.ev.org.br/cursos/desenvolvendo-aplicacoes-mobile-com-android-studios
import { Text, View, StyleSheet } from "react-native";

const usuarios = [
  {id:1,
    nome: "Gyovanna",
    cargo: "aluno"
  },
  {id:2,
    nome: "Andre",
    cargo: "professor"
  }
]

export default function Index() {
  return (
    <View
      style={style.container}
    >
      {
        usuarios.map(item => (
          <View style={style.itemLista}>
        <Text style={{ fontSize: 20}}> {item.nome}</Text>
        </View>
      ))      
      }
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
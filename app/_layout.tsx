import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{headerShown: false }}//diz para o Stack.Navigator(usei o Stack, pois é um atalho do expo-router) não mostrar a barra superior (header).
      />
      <Stack.Screen
        name="login"
        options={{headerShown: false }}
      />
      <Stack.Screen
        name="cadastro"
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="inicio"
        options={{headerShown: false}}
      />
    </Stack>
  
  );


}

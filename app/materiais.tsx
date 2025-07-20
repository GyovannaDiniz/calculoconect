import React from "react";
import {View, Image, StyleSheet} from "react-native";

export default function Materiais(){
    return(
        <View style={styles.container}>
            <Image
                source={require('../assets/images/logoEstuda.png')}
                style={styles.imagem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },

    imagem: {

    },
})
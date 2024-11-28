import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useTheme } from '../theme/theme';

export default function Container({ title, description, exerc, route }) {
    const { colors, size } = useTheme();
    const styles = StyleSheet.create({
        container: {
            color: colors.White,
            backgroundColor: "rgba( 242, 125, 22, 0.7)",
            borderRadius: 50,
            padding: 10,
            margin: 25,
        },
        title: {
            fontSize: size.Title,
            color: colors.White,
            fontWeight: 'bold',
            margin: 'auto',
        },
        corp: {
            fontSize: 20,
            color: colors.White,
            fontWeight: 'medium',
            lineHeight: 28,
            marginVertical: 5
        },
        btn: {
            backgroundColor: colors.Green,
            borderRadius: 50,
            fontSize: 30,
            color: colors.White,
            fontWeight: 'bold',
            margin: 'auto',
            paddingVertical: 10,
            paddingHorizontal: 30,
        }
    });
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.corp}>Descrição: {description}.</Text>
            <Text style={styles.corp}>Exercícios: {exerc}.</Text>
            <TouchableOpacity onPress={()=>route()}>
                <Text style={styles.btn}>ACESSAR</Text>
            </TouchableOpacity>
        </View>
    )
}

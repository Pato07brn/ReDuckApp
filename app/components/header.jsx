import React from 'react';
import { Text, View, StyleSheet } from "react-native";
import { useTheme } from '../theme/theme';

export default function Header({title}) {
    const { colors } = useTheme();
    const styles = StyleSheet.create({
        container: {
            paddingTop: 30, // Adiciona espaço na parte superior
            paddingHorizontal: 20,
            backgroundColor: colors.Black, // Cor de fundo do header
        },
        title: {
            fontSize: 45,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 20,
            color: colors.White, // Cor do texto do header
        },
        line: {
            height: 5,
            backgroundColor: colors.Red1, // Cor da linha abaixo do texto
            marginTop: 10,
        },
    });
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.line} />
        </View>
    );
};


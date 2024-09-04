import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
//import {  } from '@expo/vector-icons/Ionicons'
import { useTheme } from '../theme/theme';

export default function BtnTreino({ title, onPress }) {
    const {colors} = useTheme()
    const styles = StyleSheet.create({
        button: {
            backgroundColor: colors.Red1, // Cor vermelha para o botão
            paddingVertical: 15,
            paddingHorizontal: 30,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
        },
        buttonText: {
            color: colors.White, // Cor branca para o texto
            fontSize: 16,
            fontWeight: 'bold',
        },
    });
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

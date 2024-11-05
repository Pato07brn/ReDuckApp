import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useTheme } from '../theme/theme';

export default function Container({ title, description, exerc }) {
    const { colors, size } = useTheme();
    const styles = StyleSheet.create({
        container: {
            color: colors.White,
            backgroundColor: "rgba( 242, 125, 22, 0.7)",
            borderRadius: 50,
            marginVertical: "1.6em",
            paddingVertical: "1.6em"
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
            marginVertical: 10
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
            <Text style={styles.corp}>{description}</Text>
            <Text style={styles.corp}>{exerc}</Text>
            <TouchableOpacity onPress={()=>{}}>
                <Text style={styles.btn}>ACESSAR</Text>
            </TouchableOpacity>
        </View>
    )
}

import React from 'react';
import { Text, View, StyleSheet } from "react-native";
import { useTheme } from '../theme/theme';

export default function Header({title}) {
    const { colors } = useTheme();
    const styles = StyleSheet.create({
        container: {
            paddingTop: 30,
            width: "100%"
        },
        title: {
            fontSize: 45,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 20,
            color: colors.White,
        },
        line: {
            height: 5,
            backgroundColor: colors.Red1,
            marginTop: 10,
            marginHorizontal: 22
        },
    });
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.line} />
        </View>
    );
};


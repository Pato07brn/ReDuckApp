import React from 'react';
import { StyleSheet, View } from "react-native";
import { useTheme } from '../theme/theme';

export default function Container({ children }) {
    const { theme, colors } = useTheme();

    const styles = StyleSheet.create({
        background: {
            flex: 1,
            backgroundColor: colors.Black,
        },
    });
    return (
        <View style={styles.background}>
            {children}
        </View>
    )
}

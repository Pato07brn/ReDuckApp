import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../theme/theme';
import Icon from 'react-native-vector-icons/Feather';

export default function Footer() {
    const { colors } = useTheme();
    const styles = StyleSheet.create({
        container: {
            paddingTop: 30, 
            paddingHorizontal: 20,
            marginBottom: 20,
        },
        line: {
            height: 5,
            backgroundColor: colors.Red1, 
            marginTop: 5,
        },
        setings: {
            textAlign: 'center',
            marginTop: 20,
        }

    });
    return (
        <View style={styles.container}>
            <View style={styles.line} />
            <Icon name="settings" size={60} style={styles.setings} color={colors.Red1} />
        </View>
    );
};




import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../theme/theme';
import Icon from 'react-native-vector-icons/Feather';

export default function Footer() {
    const { colors } = useTheme();
    const styles = StyleSheet.create({
        container: {
            width: "100%",
            marginBottom: 20,
        },
        line: {
            height: 5,
            backgroundColor: colors.Red1,
        },
        setings: {
            textAlign: 'center',
            marginTop: 20,
        }

    });
    return (
        <View style={styles.container}>
            <View style={styles.line} />
            <TouchableOpacity>
                <Icon name="settings" size={60} style={styles.setings} color={colors.Red1} />
            </TouchableOpacity>
        </View>
    );
};
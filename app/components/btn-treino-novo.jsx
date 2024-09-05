import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

import { useTheme } from '../theme/theme';

export default function BtnTreino({ title, onPress }) {
    const { colors } = useTheme()
    const styles = StyleSheet.create({
        button: {
            backgroundColor: colors.Red1,
            paddingVertical: 20,
            paddingHorizontal: 15,
            borderRadius: 50,
            marginVertical: 10,
            alignItems: 'center',
            maxWidth: '90%'
        },
        buttonText: {
            color: colors.White,
            fontSize: 32,
            fontWeight: 'bold',
        },
        div: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            gap: 20
        }
    });

    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <View style={styles.div}>
                    <Text style={styles.buttonText}>{title}</Text>
                    <Icon name="folder-plus" size={50} color={colors.White} />
            </View>
        </TouchableOpacity>
    );
};

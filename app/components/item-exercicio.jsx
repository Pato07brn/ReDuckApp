import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useTheme } from '../theme/theme';

import Icon from 'react-native-vector-icons/Feather';


export default function Item({ title = "Supinão arrasador de teta", nota = "Evite de morrer no treino", exerc }) {
    const { colors, size } = useTheme();
    const styles = StyleSheet.create({
        container: {
            color: colors.White,
            backgroundColor: "rgba( 175, 11, 10, 0.8)",
            borderRadius: 50,
            padding: 10,
            margin: 25,
        },
        title: {
            textAlign: 'left',
            width: '100%',
            fontSize: '2em',
            color: colors.White,
            fontWeight: '600',
        },
        top: {
            borderBottomColor: colors.White,
            borderBottomWidth: 1
        },
        lineup: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center'
        },
        corp: {
            fontSize: 20,
            color: colors.White,
            fontWeight: 'medium',
            lineHeight: 28,
            marginVertical: 5
        },
        actions: {
            display: "flex",
            flexDirection: "row"
        }
    });
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.lineup}>
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.actions}>
                        <TouchableOpacity onPress={() => { }}>
                            <Icon name="delete" size={60} color={colors.Ambar} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }}>
                            <Icon name="edit" size={60} color={colors.Green} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.corp}>NOTA: {nota}</Text>
            </View>

            <Text style={styles.corp}>{exerc}</Text>
            <TouchableOpacity onPress={() => { }}>
            </TouchableOpacity>
        </View>
    )
}

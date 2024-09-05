import React from 'react';
import { StyleSheet, View, ImageBackground } from "react-native";
import { useTheme } from '../theme/theme';

export default function Container({ children }) {
    const { colors } = useTheme();
    const styles = StyleSheet.create({
        background: {
            flex: 1,
            backgroundColor: colors.Black,
        },
        imgDuck: {
            position: 'fixed',
            top: '25%',
            left: '10%'
        }
    });
    return (
        <View style={styles.background}>
            <ImageBackground style={styles.imgDuck} source={require('./../../assets/images/PATO_FUNDO.png')} />
            {children}
        </View>
    )
}

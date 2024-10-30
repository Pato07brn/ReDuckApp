import React from 'react';
import { StyleSheet, View, ImageBackground } from "react-native";
import { useTheme } from '../theme/theme';

export default function Container({ children }) {
    const { colors } = useTheme();
    const styles = StyleSheet.create({
        imgDuck: {
            flex: 1,
            backgroundColor: colors.Black,
        }
    });
    return (
        <ImageBackground resizeMode='center' style={styles.imgDuck} source={require('./../../assets/images/PATO_FUNDO.png')}>
            {children}
        </ImageBackground>
    )
}

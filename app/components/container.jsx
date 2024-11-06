import React from 'react';
import { StyleSheet, View, Image, StatusBar } from "react-native";
import { useTheme } from '../theme/theme';

export default function Container({ children }) {
    const { colors } = useTheme();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            width: "100%",
            backgroundColor: colors.Black,
            alignItems: 'center',
            justifyContent: 'center'
        },
        img: {
            width: "100%",
            height: "100%",
            position: 'absolute',
        }
    });
    return (
        <View style={styles.container} >
            <StatusBar backgroundColor={colors.Red1}/>
            <Image style={styles.img} resizeMode='contain' source={require('./../../assets/images/PATO_FUNDO.png')} />
            {children}
        </View>
    )
}

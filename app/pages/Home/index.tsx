import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { useTheme } from '../../theme/theme';

import Header from '../../components/header';
import Container from '../../components/container';
import BtnTreino from '../../components/btn-treino-novo';

export default function Home() {
    const { theme, colors } = useTheme();

    return (
        <Container>
            <Header title={'FALA MEU PUTO'} />
            <View style={[styles.container, { backgroundColor: colors.Black }]}>
                <BtnTreino title={"Novo Treino"} onPress={()=>{}}/>
                <Text>
                    Treino
                </Text>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        marginBottom: 20,
    },
});
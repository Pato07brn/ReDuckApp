import React from 'react';
import { View, StyleSheet, ScrollView, StatusBar } from "react-native";
import { useTheme } from "../../theme/theme";

import Header from '../../components/header';
import Container from '../../components/container';
import BtnTreino from '../../components/btn-treino-novo';
import Footer from '../../components/footer';
import ItemTreino from '../../components/item-treino';

export default function Home() {
    const { colors } = useTheme();
    return (
        <Container>
            <StatusBar backgroundColor={colors.Red1}/>
            <Header title={'FALA MEU PUTO'} />
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <ItemTreino title={'TREINO A'} description={"DESCRIÇÃO: PEITO, OMBRO,BÍCEPS"} exerc={"EXERCÍCIOS: SUPINO RETO, SUPINO INCLINADO..."} />
                    <ItemTreino title={'TREINO B'} description={"DESCRIÇÃO: PEITO, OMBRO,BÍCEPS"} exerc={"EXERCÍCIOS: SUPINO RETO, SUPINO INCLINADO..."} />
                    <ItemTreino title={'TREINO C'} description={"DESCRIÇÃO: PEITO, OMBRO,BÍCEPS"} exerc={"EXERCÍCIOS: SUPINO RETO, SUPINO INCLINADO..."} />
                    <View style={styles.btn}>
                        <BtnTreino title={"Novo Treino"} onPress={() => { }} />
                    </View>
                </ScrollView>
            </View>
            <Footer />
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        gap: 10
    },
    btn:{
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        marginBottom: 20,
    },
});
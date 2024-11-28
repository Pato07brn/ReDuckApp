import React from 'react';
import { View, StyleSheet, ScrollView, StatusBar, TouchableOpacity } from "react-native";
import { useTheme } from "../../theme/theme";
import { getBd } from "../../model/bd";

import Icon from "react-native-vector-icons/Feather";
import Header from '../../components/header';
import Container from '../../components/container';
import BtnTreino from '../../components/btn-treino-novo';
import Footer from '../../components/footer';
import ItemTreino from '../../components/item-treino';

export default function Home() {
    const { colors } = useTheme();
    const bd = getBd();
    return (
        <Container>
            <StatusBar backgroundColor={colors.Red1} />
            <Header title={'FALA MEU PUTO'} />
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {Object.keys(bd).map(key => {
                        const treino = bd[key];
                        let treinoExerc = []
                        Object.values(treino.treino).forEach(exercicio => {
                            treinoExerc.push(exercicio.titulo + ", ")
                        });
                        return (
                            <ItemTreino title={treino.titulo} description={treino.descricao} exerc={treinoExerc} id={treino.id} key={key} />
                        )
                    })}
                    <View style={styles.btn}>
                        <BtnTreino title={"Novo Treino"} onPress={() => { }} />
                    </View>
                </ScrollView>
            </View>
            <Footer>
                <TouchableOpacity>
                    <Icon name="settings" size={60} style={styles.setings} color={colors.Red1} />
                </TouchableOpacity>
            </Footer>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        gap: 10
    },
    btn: {
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        marginBottom: 20,
    },
    setings: {
        textAlign: 'center',
        marginTop: 20,
    }
});
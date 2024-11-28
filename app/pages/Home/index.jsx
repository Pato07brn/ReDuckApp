import React from 'react';
import { ScrollView, StatusBar, StyleSheet, TouchableOpacity, View } from "react-native";
import { getBd } from "../../model/bd";
import { useTheme } from "../../theme/theme";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Icon from "react-native-vector-icons/Feather";
import BtnTreino from '../../components/btn-treino-novo';
import Container from '../../components/container';
import Footer from '../../components/footer';
import Header from '../../components/header';
import ItemTreino from '../../components/item-treino';

export default function Home({ navigation }) {
    const { colors } = useTheme();
    const bd = getBd();

    function routeBtn(id) {
        navigation.navigate('Treino', {idTreino: id})
    }

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
                            <ItemTreino title={treino.titulo} description={treino.descricao} exerc={treinoExerc} id={treino.id} key={key} route={() => routeBtn(key)}/>
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
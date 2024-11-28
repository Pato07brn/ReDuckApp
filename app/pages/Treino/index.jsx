import React from 'react';
import { ScrollView, StatusBar, StyleSheet, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../theme/theme";
import { getTreino } from "../../model/bd"

import Icon from 'react-native-vector-icons/Feather';
import Container from '../../components/container';
import Item from '../../components/item-exercicio';
import Footer from '../../components/footer';
import Header from '../../components/header';

export default function AddTreino() {
    const { colors } = useTheme();
    const bd = getTreino(2);
    return (
        <Container>
            <StatusBar backgroundColor={colors.Red1} />
            <Header title={bd.titulo} />
            <View style={styles.container}>
                <ScrollView style={styles.container.Scrool} showsVerticalScrollIndicator={false}>
                    {Object.keys(bd.treino).map(key => {
                        const item = bd.treino[key]
                        console.log(item);
                        return(
                            <Item title={item.titulo} nota={item.nota} int={item.intensidade} med={item.medida} key={key}/>
                        )
                    })}
                    <Item />
                </ScrollView>
            </View>
            <Footer>
                <View style={styles.actions}>
                    <TouchableOpacity>
                        <Icon name="check-circle" size={60} color={colors.Green} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="x-circle" size={60} color={colors.Ambar} />
                    </TouchableOpacity>
                </View>
            </Footer>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        gap: 10,
        width: "100%",
        Scrool: {
            width: "100%",
            maxWidth: 550
        }
    },
    btn: {
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        marginBottom: 20,
    },
    actions: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        gap: 90,
        marginTop: 20,
    },
});
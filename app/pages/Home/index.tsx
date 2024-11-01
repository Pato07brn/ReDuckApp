import React from 'react';
import { View, StyleSheet } from "react-native";


import Header from '../../components/header';
import Container from '../../components/container';
import BtnTreino from '../../components/btn-treino-novo';
import Footer from '../../components/footer';
import ItemTreino from '../../components/item-treino';



export default function Home() {
    return (
        <Container>
            <Header title={'FALA MEU PUTO'} />
            <View style={styles.container}>
                <ItemTreino title={'TREINO A'} description={"DESCRIÇÃO: PEITO, OMBRO,BÍCEPS"} exerc={"EXERCÍCIOS: SUPINO RETO, SUPINO INCLINADO..."}/>
                <BtnTreino title={"Novo Treino"} onPress={()=>{}}/>
            </View>
            <Footer/>
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
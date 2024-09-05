import React from 'react';
import { View, StyleSheet } from "react-native";


import Header from '../../components/header';
import Container from '../../components/container';
import BtnTreino from '../../components/btn-treino-novo';
import Footer from '../../components/footer';


export default function Home() {
    return (
        <Container>
            <Header title={'FALA MEU PUTO'} />
            <View style={styles.container}>
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
import React from 'react';
import { ScrollView, StatusBar, StyleSheet, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../theme/theme";

import Icon from 'react-native-vector-icons/Feather';
import Container from '../../components/container';
import Item from '../../components/item-exercicio';
import Footer from '../../components/footer';
import Header from '../../components/header';

export default function AddTreino() {
    const { colors } = useTheme();
    return (
        <Container>
            <StatusBar backgroundColor={colors.Red1} />
            <Header title={'FALA MEU PUTO'} />
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Item>

                    </Item>
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
    actions: {
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 90,
        marginTop: 20,
    },
});
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Switch } from "react-native";
import { useTheme } from '../theme/theme';

import Icon from 'react-native-vector-icons/Feather';


export default function Item({ title = "SUPINO RETO", nota = "Evite morrer no treino", med = ['Repetições:', '10'], int = ['Carga', '10kg'] }) {
    const { colors } = useTheme();

    const [titulo, setTitulo] = useState(title)
    const [note, setNote] = useState(nota)
    const [medida, setMed] = useState(med)
    const [intensidade, setInt] = useState(int)

    const [check, setCheck] = useState(false);

    function handlerCheck(){
        check ? setCheck(false) : setCheck(true)
    }

    const styles = StyleSheet.create({
        container: {
            color: colors.White,
            backgroundColor: "rgba( 175, 11, 10, 0.6)",
            borderRadius: 50,
            padding: 20,
            margin: 25,
        },
        title: {
            textAlign: 'left',
            width: '100%',
            fontSize: '2em',
            color: colors.White,
            fontWeight: '600'
        },
        top: {
            borderBottomColor: colors.White,
            borderBottomWidth: 2
        },
        lineup: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center'
        },
        corp: {
            fontSize: 20,
            color: colors.White,
            fontWeight: 'medium',
            lineHeight: 28,
            marginVertical: 5,
            align: {
                fontSize: '1em',
                color: colors.White,
                fontWeight: '600',
                textAlign: "center"
            }
        },
        actions: {
            display: "flex",
            flexDirection: "row"
        },
        linedown: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            fontSize: 30,
            itens: {
                width: "50%",
                textAlign: "center"
            },
            line: {
                borderRightColor: colors.White,
                borderRightWidth: 2
            }
        },
        editable: {
            color: colors.White,
            backgroundColor: colors.Black,
            fontSize: 30,
            borderRadius: 10
        }
    });
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.lineup}>
                    <Text style={styles.title}>{titulo}</Text>
                    <View style={styles.actions}>
                        <Switch value={check} onValueChange={handlerCheck}/>
                    </View>
                </View>
                <Text style={styles.corp}>NOTA: {note}</Text>
            </View>
            <View style={styles.linedown}>
                <View style={[styles.linedown.itens, styles.linedown.line]}>
                    <Text style={[styles.corp, styles.corp.align]}>{medida[0]}</Text>
                    <Text style={[styles.corp, styles.corp.align]}>{medida[1]}</Text>
                </View>
                <View style={styles.linedown.itens}>
                    <Text style={[styles.corp, styles.corp.align]}>{intensidade[0]}</Text>
                    <Text style={[styles.corp, styles.corp.align]}>{intensidade[1]}</Text>
                </View>
            </View>
        </View>
    )
}

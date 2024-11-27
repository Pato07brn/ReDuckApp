import React, { useState } from 'react';
import { StyleSheet, View, Text, Switch } from "react-native";
import { useTheme } from '../theme/theme';

export default function Item({ title = "SUPINO RETO", nota = "Evite morrer no treino", med = ['Repetições:', '10'], int = ['Carga:', '10kg'] }) {
    const { colors } = useTheme();

    const [titulo, setTitulo] = useState(title)
    const [note, setNote] = useState(nota)
    const [medida, setMed] = useState(med)
    const [intensidade, setInt] = useState(int)

    const [check, setCheck] = useState(false);

    function handlerCheck() {
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
            fontSize: 30,
            color: colors.White,
            fontWeight: '600',
            switch: {
                fontSize: 30,
            }
        },
        top: {
            borderBottomColor: colors.White,
            borderBottomWidth: 2
        },
        lineup: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        corp: {
            fontSize: 20,
            color: colors.White,
            fontWeight: 'medium',
            lineHeight: 28,
            marginVertical: 5,
            align: {
                fontSize: 25,
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
                        <Switch
                            style={styles.title.switch}
                            value={check}
                            onValueChange={handlerCheck}
                            trackColor={{ false: colors.Ambar, true: colors.Green }}
                        />
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

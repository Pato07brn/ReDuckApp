import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import { useTheme } from '../theme/theme';

import Icon from 'react-native-vector-icons/Feather';


export default function Item({ title = "SUPINO RETO", nota = "Evite morrer no treino", med = ['Repetições:', '10'], int = ['Carga', '10kg'] }) {
    const { colors } = useTheme();

    const [titulo, setTitulo] = useState(title)
    const [note, setNote] = useState(nota)
    const [medida, setMed] = useState(med)
    const [intensidade, setInt] = useState(int)

    const [editable, setEditable] = useState(false)


    function toggleEditable(state) {
        setEditable(state)
    }

    const handleChangeText = (text, index, setArray) => {
        setArray((prevMed) => {
            const updatedMed = [...prevMed];
            updatedMed[index] = text;
            return updatedMed;
        });
    };

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

    if (editable) {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <View style={styles.lineup}>
                        <TextInput style={[styles.title, styles.editable]} onChangeText={setTitulo} value={titulo} focusable />
                        <View style={styles.actions}>
                            <TouchableOpacity onPress={() => { }}>
                                <Icon name="check-circle" size={35} color={colors.Green} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { toggleEditable(false) }}>
                                <Icon name="x-circle" size={35} color={colors.Ambar} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TextInput style={[styles.corp, styles.editable]} onChangeText={setNote} value={note} />
                </View>
                <View style={styles.linedown}>
                    <View style={[styles.linedown.itens, styles.linedown.line]}>
                        <TextInput value={medida[0]} onChangeText={(text) => handleChangeText(text, 0, setMed)} style={styles.editable} />
                        <TextInput value={medida[1]} onChangeText={(text) => handleChangeText(text, 1, setMed)} style={styles.editable} />
                    </View>
                    <View style={styles.linedown.itens}>
                        <TextInput value={intensidade[0]} onChangeText={(text) => handleChangeText(text, 0, setInt)} style={styles.editable} />
                        <TextInput value={intensidade[1]} onChangeText={(text) => handleChangeText(text, 1, setInt)} style={styles.editable} />
                    </View>
                </View>
                <TouchableOpacity onPress={() => { }}>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.lineup}>
                    <Text style={styles.title}>{titulo}</Text>
                    <View style={styles.actions}>
                        <TouchableOpacity onPress={() => { }}>
                            <Icon name="delete" size={35} color={colors.Ambar} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { toggleEditable(true) }}>
                            <Icon name="edit" size={35} color={colors.Green} />
                        </TouchableOpacity>
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
            <TouchableOpacity onPress={() => { }}>
            </TouchableOpacity>
        </View>
    )
}

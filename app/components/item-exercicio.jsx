import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import { useTheme } from '../theme/theme';

import Icon from 'react-native-vector-icons/Feather';


export default function Item({ title = "SUPINO RETO", nota = "Evite morrer no treino", $Editable }) {
    const { colors, size } = useTheme();
    
    const [titulo, setTitulo] = useState(title)
    const [note, setNote] = useState(nota)
    

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
            marginVertical: 5
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
            backgroundColor: colors.Black,
            borderRadius: 10
        }
    });

    if ($Editable) {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <View style={styles.lineup}>
                        <TextInput style={[styles.title, styles.editable]} onChangeText={setTitulo} value={titulo} focusable />
                        <View style={styles.actions}>
                            <TouchableOpacity onPress={() => { }}>
                                <Icon name="check-circle" size={35} color={colors.Green} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { }}>
                                <Icon name="x-circle" size={35} color={colors.Ambar} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TextInput style={[styles.corp, styles.editable]} onChangeText={setNote} value={note}/>
                </View>
                <View style={styles.linedown}>
                    <View style={[styles.linedown.itens, styles.linedown.line]}>
                        <View>Repetições:</View>
                        <View>20</View>
                    </View>
                    <View style={styles.linedown.itens}>
                        <View>Carga:</View>
                        <View>5Kg</View>
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
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.actions}>
                        <TouchableOpacity onPress={() => { }}>
                            <Icon name="delete" size={35} color={colors.Ambar} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }}>
                            <Icon name="edit" size={35} color={colors.Green} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.corp}>NOTA: {nota}</Text>
            </View>
            <View style={styles.linedown}>
                <View style={[styles.linedown.itens, styles.linedown.line]}>
                    <View>Repetições:</View>
                    <View>20</View>
                </View>
                <View style={styles.linedown.itens}>
                    <View>Carga:</View>
                    <View>5Kg</View>
                </View>
            </View>
            <TouchableOpacity onPress={() => { }}>
            </TouchableOpacity>
        </View>
    )
}

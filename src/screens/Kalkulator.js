import React from "react"
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from "react-native"

export default function Kalkulator() {
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <TextInput style={style.container} editable={false} />
            <View style={style.containerButton}>
                <TouchableOpacity style={style.buttonTop}>
                    <Text style={style.textPrimary}>C</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonTop}>
                    <Text style={style.textPrimary}>+/-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonTop}>
                    <Text style={style.textPrimary}>%</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonLeft}>
                    <Text style={style.textSecunder}>/</Text>
                </TouchableOpacity>
            </View>

            <View style={style.containerButton}>
                <TouchableOpacity style={style.buttonMid}>
                    <Text style={style.textSecunder}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonMid}>
                    <Text style={style.textSecunder}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonMid}>
                    <Text style={style.textSecunder}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonLeft}>
                    <Text style={style.textSecunder}>X</Text>
                </TouchableOpacity>
            </View>

            <View style={style.containerButton}>
                <TouchableOpacity style={style.buttonMid}>
                    <Text style={style.textSecunder}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonMid}>
                    <Text style={style.textSecunder}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonMid}>
                    <Text style={style.textSecunder}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonLeft}>
                    <Text style={style.textSecunder}>-</Text>
                </TouchableOpacity>
            </View>

            <View style={style.containerButton}>
                <TouchableOpacity style={style.buttonMid}>
                    <Text style={style.textSecunder}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonMid}>
                    <Text style={style.textSecunder}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonMid}>
                    <Text style={style.textSecunder}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonLeft}>
                    <Text style={style.textSecunder}>+</Text>
                </TouchableOpacity>
            </View>

            <View style={style.containerButton}>
                <TouchableOpacity style={style.buttonButtom}>
                    <Text style={style.textSecunder}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonMid}>
                    <Text style={style.textSecunder}>.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonLeft}>
                    <Text style={style.textSecunder}>=</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    textSecunder: {
        fontSize: 40,
        color: 'white'
    },
    textPrimary: {
        fontSize: 40,
        color: 'black'
    },
    buttonButtom: {
        backgroundColor: '#373737',
        height: 64,
        borderRadius: 32,
        width: 128,
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonMid: {
        backgroundColor: '#373737',
        height: 64,
        borderRadius: 32,
        width: 64,
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonLeft: {
        backgroundColor: '#f38f00',
        height: 64,
        borderRadius: 32,
        width: 64,
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonTop: {
        backgroundColor: '#a3a3a3',
        borderRadius: 32,
        height: 64,
        width: 64,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerButton: {
        justifyContent: "space-around",
        flexDirection: 'row',
        backgroundColor: '#090808',
        flex: 0.15
    },
    container: {
        backgroundColor: '#090808',
        flex: 0.40
    }
});
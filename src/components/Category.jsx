import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Category = ({ item, selecionado, setSelecionado }) => {
    return (
        <TouchableOpacity onPress={() => setSelecionado(item)} >
            <Text
                style={[styles.categoryText,
                selecionado === item && {
                    backgroundColor: 'red'
                }
                ]}>{item}</Text>
        </TouchableOpacity>
    )
}

export default Category

const styles = StyleSheet.create({
    categoryText: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
        backgroundColor: 'grey',
        padding: 10,
        textAlign: 'center',
        borderRadius: 16,
        marginHorizontal: 10
    }
})
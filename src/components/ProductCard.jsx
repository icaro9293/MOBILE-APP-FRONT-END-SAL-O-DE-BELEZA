import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

const ProductCard = ({ item, handleLiked }) => {
    // const [isLiked, setIsLiked] = useState(false)
    const navigation = useNavigation()

    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate('PRODUTO', { item }) // passando props para a outra página.
        }} style={styles.container}>
            <Image source={{ uri: item.image }} style={styles.imagem}></Image>
            <View style={styles.containerConteudo}>
                <Text style={styles.tituloProduto}>{item.title}</Text>
                <Text style={styles.precoProduto}>{item.price}</Text>
            </View>
            <TouchableOpacity style={styles.likeContainer} onPress={() => handleLiked(item)}>
                {
                    item.isLiked ? (<AntDesign name={'heart'} size={20} color={'red'}></AntDesign>) : (<AntDesign name={'hearto'} size={20} color={'red'}></AntDesign>)
                }
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    imagem: {
        height: 255,
        borderRadius: 20,
        width: "90%",
        marginVertical: 10,
        marginLeft: 10
    },
    container: {
        flex: 1,
        position: 'relative'
    },
    tituloProduto: {
        fontSize: 16,
        color: 'black',
        fontWeight: '600'
    },
    precoProduto: {
        color: 'red',
        fontSize: 16
    },
    containerConteudo: {
        paddingLeft: 15
    },
    likeContainer: {
        height: 34,
        width: 34,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 17,
        position: 'absolute',
        top: 20,
        left: 125
    }
})
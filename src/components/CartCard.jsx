import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'

const imagem = 'https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567612/cvafl35dv9wzisdsgtd6.png'

const CartCard = ({ item, deleteItem }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: item.image }} style={styles.imagemCapa}></Image>
            <View style={styles.conteudoCard}>
                <Text style={styles.tituloCard}>{item.title}</Text>
                <Text style={styles.precoCard}>{item.price}</Text>
                <View style={styles.containerCirculo}>
                    <View style={[styles.circulo, { backgroundColor: item.cor }]} />
                    <View style={styles.tamanhoCirculo}>
                        <Text style={styles.textoTamanhoCirculo}>{item.size}</Text>
                    </View>


                </View>
            </View>
            <TouchableOpacity onPress={() => {
                deleteItem(item)
            }}>
                <Entypo name={'trash'} size={24} color={'black'}></Entypo>

            </TouchableOpacity>

        </View >
    )
}

export default CartCard

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        flexDirection: 'row'

    },
    imagemCapa: {
        height: 125,
        width: 94,
        borderRadius: 20
    },
    conteudoCard: {
        flex: 1,
        marginHorizontal: 10
    },
    tituloCard: {
        fontSize: 18,
        color: 'black'
    },
    precoCard: {
        color: 'red',
        marginVertical: 10
    },
    containerCirculo: {
        flexDirection: 'row',
        // marginHorizontal: 10
    },
    circulo: {
        height: 32,
        width: 32,
        borderRadius: 16,

    },
    tamanhoCirculo: {
        backgroundColor: 'white',
        height: 32,
        width: 32,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },
    textoTamanhoCirculo: {
        fontSize: 18,
        fontWeight: '500'
    }
})
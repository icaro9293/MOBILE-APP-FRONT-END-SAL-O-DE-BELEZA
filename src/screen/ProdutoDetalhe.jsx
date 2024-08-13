import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Header from '../components/Header'
import { useNavigation, useRoute } from '@react-navigation/native'
import { CartContext } from '../context/CartContext'

const tamanhos = ['P', 'M', 'G', 'GG']
const cores = ['grey', 'red', 'blue', 'orange', 'green', 'black']

const ProdutoDetalhe = () => {
    const navigation = useNavigation()
    const { addToCart } = useContext(CartContext) // recebendo a função.
    const route = useRoute()
    const item = route.params.item
    // console.log(route.params.item)
    const [tamSelecionado, setTamSelecionado] = useState(null)
    const [corSelecionado, setCorSelecionado] = useState(null)

    const handleAddToCart = (item) => {
        item.tam = tamSelecionado
        item.cor = corSelecionado
        addToCart(item)
        navigation.navigate('CARRINHO')
    }
    return (
        <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
            <View style={styles.headerContainer}>
                <Header></Header>
            </View>
            <Image source={{ uri: item.image }} style={styles.imagem}></Image>
            <View style={styles.conteudoContainer}>
                <Text style={styles.titulo}>{item.title}</Text>
                <Text style={[styles.preco, styles.titulo]}>{item.price}</Text>
            </View>

            <Text style={[styles.tamanhoText, styles.titulo]}>Tamanho</Text>
            <View style={styles.tamanhoContainer}>
                {
                    tamanhos.map((tam, index) => {
                        return (
                            <TouchableOpacity key={index} style={styles.tamValueContainer} onPress={() => setTamSelecionado(tam)}>
                                <Text style={[styles.tamValue, tamSelecionado == tam && { color: 'red' }]}>{tam}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
            <Text style={[styles.corText, styles.titulo]}>Cores</Text>
            <View style={styles.coresContainer}>
                {
                    cores.map((cor, index) => {
                        return (
                            <TouchableOpacity key={index} style={[styles.circuloBorda, corSelecionado == cor && { borderColor: cor, borderWidth: 2 }]} onPress={() => setCorSelecionado(cor)}>
                                <View style={[styles.circuloCor, { backgroundColor: cor }]} />
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
            <TouchableOpacity style={styles.btnCarrinho} onPress={() => {
                handleAddToCart(item)
            }}>
                <Text style={styles.btnText}>Adicionar Ao Carrinho</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}

export default ProdutoDetalhe

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        padding: 20
    },
    imagem: {
        width: '100%',
        height: 320
    },
    conteudoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 20
    },
    titulo: {
        fontSize: 20,
        color: 'black',
        fontWeight: '500'
    },
    preco: {
        color: 'red !important',
    },
    tamanhoContainer: {
        flexDirection: 'row',
        marginHorizontal: 20
    },
    tamanhoText: {
        marginHorizontal: 20
    },
    tamValueContainer: {
        height: 36,
        width: 36,
        borderRadius: 18,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    },
    tamValue: {
        fontSize: 18,
        fontWeight: '600'
    },
    corText: {
        marginHorizontal: 20,
        marginTop: 10
    },
    coresContainer: {
        flexDirection: 'row',
        marginHorizontal: 20
    },
    circuloBorda: {
        height: 48,
        width: 48,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5

    },
    circuloCor: {
        height: 36,
        width: 36,
        borderRadius: 20,
    },
    btnCarrinho: {
        backgroundColor: 'red',
        padding: 20,
        margin: 10,
        borderRadius: 20
    },
    btnText: {
        fontSize: 24,
        fontWeight: '600',
        color: 'white',
        textAlign: 'center'
    }
})
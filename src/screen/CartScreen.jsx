import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Header from '../components/Header'
import CartCard from '../components/CartCard'
import { CartContext } from '../context/CartContext'

const CartScreen = () => {
    const { carts, totalPrice, deleteItem } = useContext(CartContext)
    return (
        <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
            <View style={styles.containerHeader}>
                <Header isCart={true}></Header>
            </View>
            {/* <CartCard></CartCard> */}
            <FlatList data={carts} ListFooterComponent={<>
                <View style={styles.precoContainer}>
                    <View style={styles.precoETitulo}>
                        <Text style={styles.texto}>Total:</Text>
                        <Text>R${totalPrice}</Text>
                    </View>
                    <View style={styles.precoETitulo}>
                        <Text style={styles.texto}>Frete:</Text>
                        <Text>R$0,00</Text>
                    </View>

                </View>
                <View style={styles.divisor} />
                <View style={styles.precoETitulo}>
                    <Text style={styles.texto}>Valor Final:</Text>
                    <Text style={[styles.texto, { color: 'black', fontWeight: '700' }]}>R${totalPrice}</Text>
                </View>
            </>

            } renderItem={({ item }) => <CartCard item={item} deleteItem={deleteItem}></CartCard>} showsVerticalScrollIndicator={false} contentContainerStyle={
                { paddingBottom: 100 }
            }></FlatList>
            <TouchableOpacity style={styles.checkoutContainer}>
                <Text style={styles.botaoTexto}>Finalizar Compra</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
    containerHeader: {
        marginBottom: 10
    },
    precoContainer: {
        marginTop: 40
    },
    precoETitulo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 10
    },
    texto: {
        fontSize: 18,
        color: 'grey'
    },
    divisor: {
        borderWidth: 1,
        borderColor: 'black',
        marginVertical: 10
    },
    checkoutContainer: {
        backgroundColor: 'red',
        width: '100%',
        marginVertical: 10,
        borderRadius: 10
    },
    botaoTexto: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        padding: 10
    }
})
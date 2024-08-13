import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
// import Icon from 'react-native-vector-icons/FontAwesome';
// import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import Category from '../components/Category';
import ProductCard from '../components/ProductCard';
import Fontisto from 'react-native-vector-icons/Fontisto';
import data from '../data/data.json'

const categorias = ['Estilos em Alta', 'Todos', 'Novos', 'Masculino', 'Femninino']
const HomeScreen = () => {
    const [selecionado, setSelecionado] = useState(categorias[0])
    const [products, setProducts] = useState(data.products)

    const handleLiked = (item) => {
        const newProducts = products.map((prod) => {
            if (prod.id === item.id) {
                return {
                    ...prod,
                    isLiked: true //propriedade é isliked é adicionada aqui.
                }
            } else {
                return prod
            }
        })
        setProducts(newProducts)
    }

    return (
        <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
            <Header></Header>

            <FlatList data={products}
                renderItem={({ item, index }) => <ProductCard item={item} handleLiked={handleLiked} />}
                contentContainerStyle={{
                    paddingBottom: 50
                }}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => {
                    return item.id
                }}
                ListHeaderComponent={
                    <>
                        <Text style={styles.mainText}>Encontre Seu Estilo</Text>
                        <View style={styles.inputContainer}>
                            <View style={styles.iconContainer}>
                                <Fontisto name={'search'} size={26} color={'black'}></Fontisto>
                            </View>
                            <TextInput style={styles.textInput} placeholder='Pesquisar'></TextInput>
                        </View>
                        <FlatList
                            data={categorias}
                            renderItem={({ item }) => <Category item={item} selecionado={selecionado} setSelecionado={setSelecionado} />}
                            keyExtractor={(item) => item}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                        </FlatList>
                    </>
                }
            >

            </FlatList>

        </LinearGradient >
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    mainText: {
        fontSize: 28,
        color: 'black',
        marginTop: 25,
    },
    inputContainer: {
        backgroundColor: 'white',
        height: 50,
        borderRadius: 12,
        marginVertical: 20,
        alignItems: 'center',
        flexDirection: 'row'
    },
    iconContainer: {
        marginHorizontal: 20
    },
    textInput: {
        flex: 1,
        // borderWidth: 1,
        // borderColor: 'black'
    }
})
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const Header = ({ isCart }) => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('HOME_STACK')} style={styles.appIconContainer}>
                {
                    isCart ? (<Ionicons name={'chevron-back'} color={'red'} size={24}></Ionicons>) :
                        <Image source={require('../assets/appIcon.png')} style={styles.appIcon} />
                }
            </TouchableOpacity>

            {
                isCart && <Text style={styles.headerText}>Meu Carrinho</Text>
            }
            <Image source={require('../assets/profilePic.png')} style={styles.profilePic} />

        </View >
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    appIconContainer: {
        backgroundColor: 'white',
        height: 46,
        width: 46,
        borderRadius: 23,
        justifyContent: 'center',
        alignItems: 'center'
    },
    appIcon: {
        height: 30,
        width: 30,
    },
    profilePic: {
        height: 46,
        width: 46,
        borderRadius: 23
    },
    headerText: {
        fontSize: 28,
        color: 'black'
    }
})
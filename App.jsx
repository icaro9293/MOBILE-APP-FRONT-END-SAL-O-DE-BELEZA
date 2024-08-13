import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './src/screen/HomeScreen'
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProdutoDetalhe from './src/screen/ProdutoDetalhe'
import CartScreen from './src/screen/CartScreen'
import { CartContext, CartProvider } from './src/context/CartContext'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}
        // initialRouteName='HOME'
        >
            <Stack.Screen name='HOME' component={HomeScreen}></Stack.Screen>
            <Stack.Screen name='PRODUTO' component={ProdutoDetalhe}></Stack.Screen>
        </Stack.Navigator>
    )
}


const App = () => {
    return (
        <CartProvider>
            <NavigationContainer>
                <Tab.Navigator screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: 'red'

                }}
                    initialRouteName=''
                >
                    <Tab.Screen name='HOME_STACK' component={HomeStack} options={{
                        tabBarIcon: ({ size, color, focused }) => {
                            return (<Entypo name={'home'} size={size} color={color}></Entypo>)
                        },
                    }} ></Tab.Screen>
                    <Tab.Screen name='REORDER' component={Reorder} options={{
                        tabBarIcon: ({ size, color }) => {
                            return (<MaterialIcons name={'reorder'} size={size} color={color}></MaterialIcons>)
                        }
                    }}></Tab.Screen>
                    <Tab.Screen name='CARRINHO' component={CartScreen} options={{
                        tabBarIcon: ({ size, color }) => {
                            const { carts } = useContext(CartContext)
                            return (
                                <View style={{ position: 'relative' }}>
                                    <MaterialCommunityIcons name={'cart'} size={size} color={color}></MaterialCommunityIcons>
                                    <View style={{
                                        height: 14,
                                        width: 14,
                                        borderRadius: 7,
                                        backgroundColor: color,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        position: 'absolute',
                                        top: -10,
                                        right: -5
                                    }}>
                                        <Text style={{
                                            fontSize: 10,
                                            color: 'white',
                                            fontWeight: '500'
                                        }}>{carts.length}</Text>
                                    </View>
                                </View>
                            )
                        }
                    }}></Tab.Screen>
                    <Tab.Screen name='CONTA' component={AccountScreen} options={{
                        tabBarIcon: ({ size, color }) => {
                            return (<FontAwesome6 name={'user'} size={size} color={color}></FontAwesome6>)
                        }
                    }}></Tab.Screen>
                </Tab.Navigator>
            </NavigationContainer>
        </CartProvider>
    )
}

const Reorder = () => {
    return (
        <View>
            <Text>
                Home
            </Text>
        </View>
    )
}

// const CartScreen = () => {
//     return (
//         <View>
//             <Text>
//                 Home
//             </Text>
//         </View>
//     )
// }

const AccountScreen = () => {
    return (
        <View>
            <Text>
                Home
            </Text>
        </View>
    )
}

export default App

const styles = StyleSheet.create({})
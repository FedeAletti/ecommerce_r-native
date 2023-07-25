import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { AntDesign } from "@expo/vector-icons"
import { useColorScheme } from 'nativewind'

const ProductCard = ({ image, category, price, title, description }) => {
    const [count, setCount] = useState(1)
    const { colorScheme } = useColorScheme()
    let stock = 10

    const handlePress = (action) => {
        if (action === "plus" && count < stock) {
            setCount(count + 1)
        } else if (action === "minus" && count > 1) {
            setCount(count - 1)
        }
    }

    return (
        <View className="w-full rounded-3xl p-5 my-5 bg-white dark:bg-gray-50/10">
            <View className="bg-white">
                <Image source={{ uri: image }} className="w-full h-72" style={{ resizeMode: "contain" }} />
            </View>
            <View className="mt-5">
                <Text className="text-sm text-black/60 dark:text-white/70">{category}</Text>
                <Text className="text-lg font-semibold dark:text-white">{title}</Text>
                <View className="flex-row justify-between">
                    <View className="flex-row items-center gap-3">
                        <AntDesign
                            name='minuscircleo'
                            size={24}
                            color={colorScheme === "dark" ? "white" : "black"}
                            onPress={() => handlePress("minus")}
                        />
                        <Text className="text-xl dark:text-white">{count}</Text>
                        <AntDesign
                            name='pluscircleo'
                            size={24}
                            color={colorScheme === "dark" ? "white" : "black"}
                            onPress={() => handlePress("plus")}
                        />
                    </View>
                    <Text className="text-2xl font-extrabold dark:text-white">${price * count}</Text>
                </View>

                <Text
                    numberOfLines={3}
                    className="text-sm text-black/60 dark:text-white/70"
                >
                    {description}
                </Text>
                <TouchableOpacity className="flex-row justify-center w-10/12 self-center mt-5 bg-black dark:bg-white p-3 rounded-full">
                    <Text className="text-white dark:text-black">Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProductCard
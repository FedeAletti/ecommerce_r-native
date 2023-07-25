import { StatusBar } from "expo-status-bar"
import { SafeAreaView, StyleSheet, Switch, Text, View } from "react-native"
import { useColorScheme } from "nativewind"
import ProductsList from "./components/ProductsList"
import Constants from "expo-constants"

export default function App() {
	const { colorScheme, toggleColorScheme } = useColorScheme()

	return (
		<SafeAreaView style={{ paddingTop: Constants.statusBarHeight + 5 }}>
			<View				
				className="items-center bg-gray-200 dark:bg-black">
				<View className="flex-row w-full gap-5 items-center">
					<Text className="text-2xl dark:text-white">New collection</Text>
					<Switch
						value={colorScheme === "light"}
						onValueChange={toggleColorScheme}
					/>
				</View>
				<View>
					<ProductsList />
				</View>
				<StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
			</View>
		</SafeAreaView>
	)
}

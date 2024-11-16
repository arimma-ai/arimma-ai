import { Text, View, StyleSheet, SafeAreaView, Image } from "react-native";
import Colors from "../../constants/Colors";

const HistoryScreen = () => {
	return (
		<View style={styles.container}>
			<SafeAreaView style={{ flex: 1 }}>
				<View
					style={{
						paddingHorizontal: 20,
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<Text
						style={{
							fontSize: 24,
							fontWeight: "bold",
							color: "#514E5A",
						}}
					>
						Transaction History
					</Text>

				</View>
			</SafeAreaView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.light.background,
	},
});

export default HistoryScreen;

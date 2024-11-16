import { Text, View, StyleSheet, SafeAreaView, Image } from "react-native";
import Colors from "../../constants/Colors";
import FontAwesome from "expo/vector-icons/FontAwesome";

const MessageScreen = () => {
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
						Arimma Support
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
	creditCard: {
		width: "90%",
		height: 200,
		borderRadius: 10,
		marginTop: 20,
		marginHorizontal: 20,
		padding: 10,
		backgroundColor: "#2A49FB",
	},
});

export default MessageScreen;

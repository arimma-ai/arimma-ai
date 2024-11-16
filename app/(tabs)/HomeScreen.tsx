import { Text, View, StyleSheet, SafeAreaView, Pressable } from "react-native";
import Colors from "../../constants/Colors";
import { StatusBar } from "expo-status-bar";
import AppBar from "../../components/Home/AppBar";
import UserFinance from "../../components/Home/UserFinance";
import BalanceStats from "../../components/Home/BalanceStats";
import TransferList from "../../components/Home/TransferList";
import ExchangeStats from "../../components/Home/ExchangeStats";

const HomeScreen = () => {
	return (
		<View style={styles.container}>
			<StatusBar style={"light"} />
			<SafeAreaView>
				<AppBar />
				<UserFinance />
				<BalanceStats />

				<TransferList />
				<ExchangeStats />
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

export default HomeScreen;
